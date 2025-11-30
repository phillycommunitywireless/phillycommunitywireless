---
title: Home

# The `segments` param will generate homepage segments (vertically stacked sections of the page).
# For the supported segment templates and required params, see README.md#segments
segments:
  - template: three-button-call-to-action
    title: "Join us in building Internet access for everyone."
    sections:
      - photo: "/images/IMG_6878.jpg"
        photo_alt_text: "A white access point device on a pole with the sky in the background."
        text: "**Get connected!** Join our network and use our Wi-Fi service at your home, organization, or local green space."
        button_text: Our Wi-Fi 
        button_href: "/getconnected"
      - photo: "/images/pcwvolunteers.png"
        photo_alt_text: "7 people in matching PCW t-shirts posing for a photo on a sidewalk."
        text: "**Get involved!** Volunteer to help build our internet networks, learn new skills, and make a difference in our community."
        button_text: Volunteer 
        button_href: "/volunteer"
        button_class: "bg-pcw-salmon"
      - photo: "/images/web updates/Signage_Collazo.jpg"
        photo_alt_text: "A PCW sign saying Free Wifi Available Here with PCW's contact information and logos of partner organizations."
        text: "**Get behind us!** Support our work in providing essential internet access to individuals and families in Philadephia."
        button_text: Support 
        button_href: "/support" 
        button_class: "bg-pcw-lilac"

  # # Responsive three-column icons
  # - template: icons
  #   icons:
  #     - icon: fas fa-laptop-code
  #       text: Growing tech literacy
  #     - icon: fas fa-wifi
  #       text: Expanding internet access
  #     - icon: fas fa-people-carry
  #       text: Building community autonomy
  #   class: dn # Hide on mobile

  # Volunteer CTA
  - template: call-to-action-photo-right
    text: "**Philly Community Wireless** is building community-controlled wireless internet networks in Philadelphia. We aim to provide a baseline of internet access for everyone, enhancing quality of life today and positioning communities for a more healthy and prosperous tomorrow."
    photo: "/images/web updates/clearfield-install.jpg"
    photo_alt_text: "4 PCW Volunteers on a roof, with one using a drill to secure a pole that the access point device is on."
    button: 
      button_text: "What We Do"
      button_href: "about/"
      # no_button_arrow: "true"

    class: bg-light-gray

  # Divider
  # - template: divider

  # Simple heading
  # - template: heading
    # text: Current Work

  # Norris Square project
  - template: call-to-action-map
    # heading: North Philadelphia Network
    text: "Our community wireless network currently exists in North Philadelphia, with a focus on **Norris Square, Fairhill, and Kensington**. If you live in the 19122, 19133, or 19134 zip codes, reach out! Check out our map for more details on where you can find us and get connected."
    link:
      text: Where We Are 
      href: /networkmap
    class: bg-light-gray

  # Video embed
  # - template: video
  #   src: https://www.youtube-nocookie.com/embed/aQjLMLvahMk
  #   title: Philly Community Wireless promo video produced by the Big Picture Alliance.
  #   text: Learn more about the project
  #   header: 
  #     text: "Our Story"
  #     class: tc
  #   class: pv4

  # stack
  # - template: call-to-action-vertical
  #   heading1: "Join our volunteer team"
  #   text1: "Volunteers can handle anything from antenna installations to network management, software development, community outreach, and much more" 
  #   link1: 
  #     text: "Get involved"
  #     href: "volunteer/"
  #   heading2: "Support the project"
  #   text2: "Your money will go toward networking equipment, tools, training materials, and paying our staff." 
  #   link2: 
  #     text: "Donate"
  #     href: "https://phillycommunitywireless.wedid.it"
  #     class: bg-green white


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

  # newsletter 
  - template: newsletter-verbose

  # Image
  - template: image
    src: "/images/nkcdc-drone.jpg"
    alt: Birds-eye image of three people setting up equipment on a building roof, with the neighborhood in the background.
    class: display-img-bottom-center
    
  # Contact info
  # - template: markdown
  #   url: contact.md
  #   class: contact

# !!! IMPORTANT !!! 
# The old content of this page (below) was moved into the front matter because even comments will cause the "markdown" template to render, adding extra vertical space 
# See template index.html ln3 - the "markdown" template is included regardless of if the content is a comment. 
 
# We are a coalition of technologists and organizers working to build community-controlled wireless internet networks in Philadelphia. 

# We are committed to growing tech literacy, expanding internet access, and building community autonomy with our neighbors. We actively partner with affordable housing organizations and other local groups focused on investing in existing communities. We believe that **internet access is a human right**.

# By developing an alternative model for expanding broadband access and adoption, PCW empowers communities to be involved in the construction, maintenance, and design of a public utility to provide sustainable connectivity for everyone in the neighborhood.

# To stay up-to-date on new opportunities and growth of our community network, [sign up for our newsletter](https://phillycommunitywireless.us5.list-manage.com/subscribe?u=7a97e4278a5833f5505a85940&id=6af414f631).

# Questions? Check out our [FAQ](/about/faq).
---
