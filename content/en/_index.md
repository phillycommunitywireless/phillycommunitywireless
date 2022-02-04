---
title: Home
omit_header_text: true

# The `segments` param will generate homepage segments (vertically stacked sections of the page).
# For the supported segment types and required params, see README.md#homepage-segments
segments:
  # Brief description of the project
  - type: markdown
    url: segments/short-about.md
  
  # Responsive three-column icons
  - type: icons
    icons:
      - icon: fas fa-laptop-code
        text: Growing tech literacy
      - icon: fas fa-wifi
        text: Expanding internet access
      - icon: fas fa-people-carry
        text: Building community autonomy

  # Simple heading
  - type: heading
    text: Current work
    divider: true

  # Norris Square project
  - type: call-to-action-image
    heading: Norris Square Network
    text: We are beginning to build out a community wireless network in the area around [<i class="fa fa-map-marker"></i> Norris Square Park](https://goo.gl/maps/e4dJb3ghqgnNP53e8). If you live there, you can either get connected or host an antenna to connect your neighbors. 
    link:
      text: Get Connected
      href: getconnected/
    image: 
      src: /images/nsp_map.png
      alt: A map image showing Norris Square Park and the surrounding area.

  # Video embed
  - type: video
    src: https://www.youtube-nocookie.com/embed/aQjLMLvahMk
    title: Philly Community Wireless promo video produced by the Big Picture Alliance.
    text: Learn more about the project

  # Volunteer CtA
  - type: call-to-action
    heading: Join our volunteer team
    text: Volunteers can handle anything from antenna installations to network management, software development, community outreach, and much more. 
    link: 
      text: Get involved
      href: volunteer/

  # Image
  - type: image
    src: images/hero.jpg
    alt: "A Philly Community Wireless sign amongst some flowers in Norris Square Park"

  # Contact info
  - type: markdown
    url: contact.md
---
