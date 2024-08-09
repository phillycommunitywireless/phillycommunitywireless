---
title: Home

# The `segments` param will generate homepage segments (vertically stacked sections of the page).
# For the supported segment templates and required params, see README.md#segments
segments:
  # Responsive three-column icons
  - template: icons
    icons:
      - icon: fas fa-laptop-code
        text: Growing tech literacy
      - icon: fas fa-wifi
        text: Expanding internet access
      - icon: fas fa-people-carry
        text: Building community autonomy
    class: dn # Hide on mobile

  # Divider
  - template: divider

  # Simple heading
  - template: heading
    text: Current work

  # Norris Square project
  - template: call-to-action-image
    heading: North Philadelphia Network
    text: We are building a community wireless network in North Philadelphia, with a focus on the areas north of [<i class="fa fa-map-marker"></i> Norris Square Park](https://goo.gl/maps/e4dJb3ghqgnNP53e8). If you live in the 19122, 19133, and other nearby zipcodes, reach out to get connected!
    link:
      text: Get Connected
      href: getconnected/
    image:
      src: /images/nsp_map2.png
      alt: A map image showing Norris Square Park and the surrounding area.
      class: bg-top

  # Video embed
  - template: video
    src: https://www.youtube-nocookie.com/embed/aQjLMLvahMk
    title: Philly Community Wireless promo video produced by the Big Picture Alliance.
    text: Learn more about the project

  # Volunteer CTA
  - template: call-to-action
    heading: Join our volunteer team
    text: Volunteers can handle anything from antenna installations to network management, software development, community outreach, and much more.
    link:
      text: Get involved
      href: volunteer/
    class: color-pcw-dark-blue

  # Divider
  - template: divider
    narrow: true

  # Donate
  - template: call-to-action
    heading: Support the project
    text: Your money will go toward networking equipment, tools, training materials, and paying our staff.
    link:
      text: Donate
      href: https://phillycommunitywireless.wedid.it
      class: bg-green white
    class: color-pcw-dark-blue

  # Image
  - template: image
    src: images/wifisign.jpg
    alt: A Philly Community Wireless near southern entrance to Norris Square Park
    class: opos-left

  # Divider
  - template: divider
    narrow: true

  # Video embed
  - template: video
    src: https://www.youtube.com/embed/nmuGwgVoAgI
    title: Philly Community Wireless animated inforgraphic produced by the Big Picture Alliance.
    text: Learn more about community wireless mesh projects
    
  # Contact info
  - template: markdown
    url: contact.md
    class: contact
---

We are a coalition of technologists and organizers working to build community controlled wireless internet networks in Philadelphia. We are committed to growing tech literacy, expanding internet access, and building community autonomy with our neighbors. We believe that **internet access is a human right**.

To stay up-to-date on new opportunities and growth of our community network, [sign up for our newsletter](https://phillycommunitywireless.us5.list-manage.com/subscribe?u=7a97e4278a5833f5505a85940&id=6af414f631).

Questions? Check out our [FAQ](./faq).
