# phillycommunitywireless.org

Source code for the Philly Community Wireless website, [phillycommunitywireless.org](https://phillycommunitywireless.org) (or [pcw.fi](https://phillycommunitywireless.org)). The site is built using the [Hugo](https://gohugo.io) static site generator and hosted with [GitHub Pages](https://pages.github.com/). Deploy previews via `Render`

**Contents**  
&nbsp;&nbsp;&nbsp;&nbsp;[Theme](#theme)  
&nbsp;&nbsp;&nbsp;&nbsp;[Local development](#local-development)
# Theme

The site's theme is a fork of [gohugo-theme-ananke](https://github.com/theNewDynamic/gohugo-theme-ananke) with major modifications.

## Custom CSS

Custom CSS lives in `/assets/pcw-hugo-theme/css/custom.css` 

## Shortcodes 

### Adding Images with `figure`
This site uses [Hugo's figure shortcode](https://gohugo.io/content-management/shortcodes/#figure). It's highly recommended to use `figure` rather than simple images via Markdown (i.e. `![]()`), so that images can be automatically sized and properly styled. Non-`figure` images may not display in a consistent manner.

To insert a `figure` into a page, paste the following example text directly into the markdown file:

```html 
{{< figure src="/images/elephant.jpg" title="An elephant at sunset" >}}
```

Which will render as 
```html
<figure>
  <img src="elephant.jpg">
  <figcaption><h4>An elephant at sunset</h4></figcaption>
</figure>
```

Optionally add the `figure-center` class to center the image 

```html
<!-- from custom.css -->
.figure-center {
  display: flex;
  justify-content: center;
  /* center-align captions + photo attr credits */
  flex-direction: column;
  align-items: center;
}

{{< figure class="figure-center" src="/images/elephant.jpg" title="An elephant at sunset" >}}

<figure class="figure-center">
  <img src="elephant.jpg">
  <figcaption><h4>An elephant at sunset</h4></figcaption>
</figure>
```

You can add image captions and credits using the `figure` shortcode's parameters `caption`, `attr`, and `attrlink`. When adding captions/credits, you will most likely want to use the `figure-center` class as well to ensure the text and image are properly aligned. Additionally, the `caption` parameter will render any markdown in the argument - for example, `caption="*some caption here...*"` will render italicized - e.g, *some caption here*. 

Here's an example use for a photo with attribution:

```html
{{< figure class="figure-center" src="/images/treepr.jpg" alt="A tree with the Puerto Rican flag painted on the bottom branches." caption="A tree at NSNP." attr="Photo by me." attrlink="http://example.com/" >}}
```

`figure` has several additional parameters:
* **src** - URL of the image to be displayed.
* **link** - If the image needs to be hyperlinked, URL of the destination.
* **target** - Optional `target` attribute for the URL if `link` parameter is set.
* **rel** - Optional `rel` attribute for the URL if `link` parameter is set.
* **alt** - Alternate text for the image if the image cannot be displayed.
* **title** - Image title.
* **caption** - Image caption. Markdown within the value of `caption` will be rendered.
* **class** - `class` attribute of the HTML `figure` tag.
* **height** - `height` attribute of the image.
* **width** - `width` attribute of the image.
* **loading** - `loading` attribute of the image.
* **attr** - Image attribution text. Markdown within the value of `attr` will be rendered.
  * An `attr` parameter with no/an empty `attrlink` will have no link styling -  to fix this, just use '#' for the value of `attrlink` - e.g, `attrlink='#'` *

* **attrlink** - If the attribution text needs to be hyperlinked, URL of the destination.


### Custom Buttons 
We've also created a "button-custom" shortcode for adding buttons to Markdown files. 
```html
{{< button-custom href="#" text="your text here...">}}
```

Which will render to...
```html
<a role="button" href="#" class="tc dib link mv3 pa3 ph4 f3 b bg-pcw-important white">
    your text here...    
</a>
```

## Segments

This theme supports a `segments` front matter parameter for all normal pages, which allows for composing layouts from "stackable components" (partials). The `segments` param is a YAML list of objects, each of which will correspond to one of these components. Each type of segment uses a pre-written HTML template to render a component, like a full-width photo, a video, or a call-to-action, to the page it's used on. Segments are all full-width and can usually be customized right from the YAML.

### Example

Here is an example of some typical [Hugo front matter](https://gohugo.io/content-management/front-matter/), along with the `segments` param. This would render a single full-width image followed by a volunteering call-to-action:

```yml
---
title: Home
segments:
  - template: image
    src: images/antenna.jpg
    alt: An image of an antenna mounted on a brick wall.
  - template: call-to-action
    text: Volunteer!
    link:
      href: https://example.com/volunteer
      text: Get involved
---
```

### Segment types
A segment consists of a `template` string that determines which HTML template is used, as well as a series of other mandatory and optional params to serve as props/options for the component. For a full list of currently supported segments, please check [this page](segments.md)

### Adding new segment templates

You can create a new segment template by creating a `<type-name>.html` file in the `theme/pcw-hugo-theme/layouts/partials/segments` directory. This template will automatically be used to render segments with this title. The [context](https://gohugo.io/content-management/front-matter/) passed to the partial will be the segment object from the YAML (you can access the global site variable as `site`).

### Adding funder logos / new funders to Funders page

After navigating to `static/images`, you can add funder logos in PNG, JPG/JPEG, or SVG formats to the folder titled `funders`.

Then, you can create a new "funder card" on the Funders page (located in `content/en/funders.md` or `content/es/funders.md`) by following the format below and pasting it to the top of the `funders.md` file below the 2nd `---` divider:

(Parentheses here represent what should be replaced, for example: `(Organization Name)` -> `PCW`.)

```
<div class="funder-card">
    <img alt="(Organization Name)" src="/images/funders/(what you saved the logo as)"/>
    <div class="funder-desc">
        (Grant Title), <a href="(organization's website)">(Organization Name)</a>, (Year)
    </div>
</div>
```

or, if the grant has a logo/website:

```
<div class="funder-card">
    <img alt="(Grant Title)" src="/images/funders/(what you saved the logo as)"/>
    <div class="funder-desc">
        <a href="(grant's website)">(Grant Title)</a>, (Organization Name), (Year)
    </div>
</div>
```

### Adding partner logos / new partners to Partners page

After navigating to `static/images`, you can add partner logos in PNG, JPG/JPEG, or SVG formats to the folder titled `partners`.

Then, you can create a new "partner card" on the Partners page (located in `content/en/partners.md` or `content/es/partners.md`) by following the format below and pasting it above the line saying `<!-- insert new Norris Square Community Partner above this line -->` if you are inserting a new Norris Square Community Partner, or `<!-- insert new Philly Community Partner above this line -->` if you are inserting a new Philly Community Partner.

(Parentheses here represent what should be replaced, for example: `(Organization Name)` -> `PCW`.)

```
<div class="partner-card">
    <img alt="(Organization Name)" src="/images/partners/(what you saved the logo as)"/>
    <div class="partner-desc">
        <a href="(organization's website)">(Organization Name)</a>
    </div>
</div>
```

# Local development
## Docker
* Clone this repository
* Start the server with `docker-compose up -d`
* Stop the server with `docker-compose down`
* Server is at http://localhost:1313.
  * **NOTE - Experienced an issue on Windows where hot reloading did not work and viewing changes required restarting the container. Fixed by adding `--poll 700ms` to `server -D` in `compose` file and rebuilding container - see [Forums](https://discourse.gohugo.io/t/hugo-serve-not-detecting-changes-in-docker/38775/3)**

## Local Dvelopment
* Install [hugo](https://gohugo.io/getting-started/installing/) and [surge](https://surge.sh/help/getting-started-with-surge). 
* From the project root directory, run `hugo && surge public --domain pcw-staging.surge.sh`.
* The staging site will be deployed to https://pcw-staging.surge.sh.
> Alternatively, add a file named `CNAME` with the following contents to the `/static` directory: 
> ```
> pcw-staging.surge.sh
> ```
> This will remove the need for the `--domain pcw-staging.surge.sh` option, and `hugo && surge public` will just work.
