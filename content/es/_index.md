---
title: Home
omit_header_text: true

TODO: TRANSLATE

# The `segments` param will generate homepage segments (vertical sections).
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

  # Norris Square project
  - type: call-to-action-image
    heading: Norris Square Network
    text: We are building our first community wireless network in the area around <i class="fa fa-map-marker"></i> [Norris Square Park](https://goo.gl/maps/e4dJb3ghqgnNP53e8). If you live there, you can either get connected or host an antenna to connect your neighbors. 
    link:
      text: Get Connected
      href: getconnected/
    image: 
      src: /images/nsp_map.png
      alt: A map image showing Norris Square Park and the surrounding area.

  # Full-width image (75vh)
  - type: image
    class: opos-top
    src: images/nsnp_antenna.jpg
    alt: "A white antenna mounted on the corner of the Norris Square Neighborhood Project building"

  - type: heading
    text: Get involved
    # class: bg-pcw-dark-blue

  - type: call-to-action
    heading: We are looking for volunteers!
    text: Our people handle antennas installations, network management, planning, community outreach, building software, making materials, and much more.
    link: 
      text: Get involved
      href: volunteer/
    # class: bg-pcw-dark-blue

  - type: image
    src: images/hero.jpg
    alt: A Philly Community Wireless sign reading "Free WiFi available here", amongst some flowers in Norris Square Park

  - type: markdown
    url: contact.md
---