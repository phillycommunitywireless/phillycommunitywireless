---
title: Home
omit_header_text: true

# The `segments` param will generate homepage segments (vertical sections).
# For the supported segment types and required params, see README.md#homepage-segments
segments:
  # Header image, with SVG logo
  - type: image
    src: images/hero3.jpg
    alt: hero3
    text: images/WebLogo_Standard.svg

  # Brief description of the project
  - type: markdown
    url: segments/about.md

  # Norris Square project
  - type: call-to-action
    header: Pilot network
    text: We are currently building our first wireless network in the area around <i class="fa fa-map-marker"></i> [Norris Square Park](https://goo.gl/maps/e4dJb3ghqgnNP53e8). If you live there, you can either get connected or host an antenna to connect your neighbors. 
    link:
      text: Join the network
      href: getconnected/
    image: 
      src: images/nsp_map.png
      alt: A map image showing Norris Square Park and the surrounding area.

  - type: image
    class: opos-top
    src: images/nsnp_antenna.jpg
    alt: "A white antenna mounted on the corner of the Norris Square Neighborhood Project building"

  - type: call-to-action
    header: We are looking for volunteers!
    link: 
      text: Get involved
      href: volunteer/
    class: bg-pcw

  - type: image
    src: images/hero.jpg
    alt: "A Philly Community Wireless sign amongst some flowers in Norris Square Park"

  - type: markdown
    url: contact.md
---
