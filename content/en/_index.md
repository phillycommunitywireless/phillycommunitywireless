---
title: Home

# The `segments` param will generate homepage segments (vertically stacked sections of the page).
# For the supported segment templates and required params, see README.md#segments
segments:
  - template: threebuttons
    section1:
      photo: "/images/hero3.jpg"
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      button_text: Connect 
      href: "#"
    section2:
      photo: "/images/pcwvolunteers.png"
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      button_text: Volunteer 
      href: "#"
    section3:
      photo: "/images/nsnp_antenna.jpg"
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      button_text: Support 
      href: "#" 

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
    text: Current Work

  # Norris Square project
  - template: call-to-action-map
    heading: North Philadelphia Network
    text: We are building a community wireless network in North Philadelphia, with a focus on the areas north of [<i class="fa fa-map-marker"></i> Norris Square Park](https://goo.gl/maps/e4dJb3ghqgnNP53e8). If you live in the 19122, 19133, or 19134, reach out to get connected!
    link:
      text: Get Connected
      href: getconnected/

  # Video embed
  - template: video
    src: https://www.youtube-nocookie.com/embed/aQjLMLvahMk
    title: Philly Community Wireless promo video produced by the Big Picture Alliance.
    text: Learn more about the project
    header: "Learn about PCW"

  # stack
  - template: call-to-action-vertical
    heading1: "Join our volunteer team"
    text1: "Volunteers can handle anything from antenna installations to network management, software development, community outreach, and much more" 
    link1: 
      text: "Get involved"
      href: "volunteer/"
    heading2: "Support the project"
    text2: "Your money will go toward networking equipment, tools, training materials, and paying our staff." 
    link2: 
      text: "Donate"
      href: "https://phillycommunitywireless.wedid.it"
      class: bg-green white


  # Volunteer CTA
  # - template: call-to-action
  #   heading: Join our volunteer team
  #   text: Volunteers can handle anything from antenna installations to network management, software development, community outreach, and much more.
  #   link:
  #     text: Get involved
  #     href: volunteer/
  #   class: color-pcw-dark-blue

  # # Divider
  # - template: divider
  #   narrow: true

  # # Donate
  # - template: call-to-action
  #   heading: Support the project
  #   text: Your money will go toward networking equipment, tools, training materials, and paying our staff.
  #   link:
  #     text: Donate
  #     href: https://phillycommunitywireless.wedid.it
  #     class: bg-green white
  #   class: color-pcw-dark-blue

  # Image
  - template: image
    src: images/wifisign.jpg
    alt: A Philly Community Wireless sign near southern entrance to Norris Square Park
    class: opos-left
    
  # Contact info
  - template: markdown
    url: contact.md
    class: contact
---

We are a coalition of technologists and organizers working to build community-controlled wireless internet networks in Philadelphia. 

We are committed to growing tech literacy, expanding internet access, and building community autonomy with our neighbors. We actively partner with affordable housing organizations and other local groups focused on investing in existing communities. We believe that **internet access is a human right**.

By developing an alternative model for expanding broadband access and adoption, PCW empowers communities to be involved in the construction, maintenance, and design of a public utility to provide sustainable connectivity for everyone in the neighborhood.

To stay up-to-date on new opportunities and growth of our community network, [sign up for our newsletter](https://phillycommunitywireless.us5.list-manage.com/subscribe?u=7a97e4278a5833f5505a85940&id=6af414f631).

Questions? Check out our [FAQ](/about/faq).
