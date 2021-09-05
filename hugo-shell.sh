docker run --rm -it \
    -v $(pwd):/src \
    --user $(id -u):$(id -g) \
    klakegg/hugo:ext-alpine \
    shell