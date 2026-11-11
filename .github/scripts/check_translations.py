"""Report on how well docs/es keeps up with docs/en.

Lists English pages with no Spanish version, Spanish pages that are still
machine-drafted, and Spanish pages whose English page has changed since the
Spanish one was last edited. On a pull request it also warns (as an inline
annotation) when the PR edits an English page without touching its Spanish
version.

This only reports; it always exits 0 so it never blocks a merge.

Usage: check_translations.py [BASE_REF]
    BASE_REF  the branch a pull request targets (e.g. origin/main), if any
"""

import os
import subprocess
import sys
from pathlib import Path

EN = Path("docs/en")
ES = Path("docs/es")
DRAFT_MARKER = "TODO: machine-drafted"


def git(*args):
    result = subprocess.run(["git", *args], capture_output=True, text=True)
    return result.stdout.strip()


def last_commit_time(path):
    stamp = git("log", "-1", "--format=%ct", "--", str(path))
    return int(stamp) if stamp else 0


def changed_files(base_ref):
    if not base_ref:
        return set()
    return set(git("diff", "--name-only", f"{base_ref}...HEAD").splitlines())


def main():
    base_ref = sys.argv[1] if len(sys.argv) > 1 else ""
    changed = changed_files(base_ref)

    missing, drafts, stale = [], [], []
    for en_page in sorted(EN.rglob("*.md")):
        rel = en_page.relative_to(EN)
        es_page = ES / rel
        if not es_page.exists():
            missing.append(rel)
            continue
        if DRAFT_MARKER in es_page.read_text(encoding="utf-8"):
            drafts.append(rel)
        if last_commit_time(en_page) > last_commit_time(es_page):
            stale.append(rel)
        if str(en_page) in changed and str(es_page) not in changed:
            print(
                f"::warning file={en_page}::This PR changes the English page but "
                f"not {es_page}. Update the Spanish version too, or leave it for "
                "a translator (it will show up as out of date)."
            )

    for rel in missing:
        print(f"::warning file={EN / rel}::No Spanish version at {ES / rel}.")

    lines = ["## Spanish translations", ""]
    if not (missing or drafts or stale):
        lines.append("Every English page has an up-to-date, reviewed Spanish version.")
    for title, pages, note in [
        ("No Spanish version", missing, "Spanish readers see the English page."),
        ("English changed since the Spanish was last edited", stale,
         "The Spanish page may be missing recent changes."),
        ("Machine-drafted, awaiting review", drafts,
         "Remove the notice and TODO comment once a fluent speaker has reviewed it."),
    ]:
        if pages:
            lines += [f"### {title} ({len(pages)})", "", note, ""]
            lines += [f"- `{rel}`" for rel in pages]
            lines.append("")

    report = "\n".join(lines) + "\n"
    print(report)
    summary = os.environ.get("GITHUB_STEP_SUMMARY")
    if summary:
        with open(summary, "a", encoding="utf-8") as f:
            f.write(report)


if __name__ == "__main__":
    main()
