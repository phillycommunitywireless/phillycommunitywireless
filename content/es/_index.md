---
title: Home

# The `segments` param will generate homepage segments (vertically stacked sections of the page).
# For the supported segment templates and required params, see README.md#segments
segments:
  - template: three-button-call-to-action
    title: "Únete para crear acceso a Internet para todos."
    sections:
      - photo: "/images/IMG_6878.jpg"
        photo_alt_text: "Un dispositivo de punto de acceso blanco en un poste con el cielo de fondo."
        text: "**¡Conéctate!** Únate a nuestra red y utilice nuestro servicio Wi-Fi en su hogar, organización o espacio verde local."
        button_text: Nuestro wi-fi 
        button_href: "/es/getconnected"
      - photo: "/images/pcwvolunteers.png"
        photo_alt_text: "7 personas con camisetas a juego de PCW posando para una foto en una acera."
        text: "**¡Participa!** Ofrece tu ayuda como voluntario para construir nuestras redes de Internet, aprender nuevas habilidades y marcar la diferencia en nuestra comunidad."
        button_text: Hazte voluntario
        button_href: "/es/volunteer"
        button_class: "bg-pcw-salmon"
      - photo: "/images/web updates/Signage_Collazo.jpg"
        photo_alt_text: "Un cartel de PCW con el mensaje Wifi gratuito disponible aquí la información de contacto de PCW y los logotipos de las organizaciones asociadas."
        text: "**¡Apóyanos!** Apoye nuestro trabajo para proporcionar acceso esencial a Internet a personas y familias de Filadelfia."
        button_text: Apóyanos
        button_href: "/support"
        button_class: "bg-pcw-lilac"

  # Volunteer CTA
  - template: call-to-action-photo-right
    text: "**Philly Community Wireless** está construyendo redes inalámbricas de Internet controladas por la comunidad en Filadelfia. Nuestro objetivo es proporcionar un acceso básico a Internet para todos, mejorando la calidad de vida actual y posicionando a las comunidades para un futuro más saludable y próspero."
    photo: "/images/web updates/clearfield-install.jpg"
    photo_alt_text: "4 voluntarios de PCW en un tejado, uno de ellos utilizando un taladro para fijar un poste en el que se encuentra el dispositivo de punto de acceso."
    button: 
      button_text: "Que hacemos"
      button_href: "/es/about/"
      # no_button_arrow: "true"
    class: bg-light-gray

  - template: call-to-action-map
    text: "Nuestra red inalámbrica comunitaria existe actualmente en el norte de Filadelfia, centrada en **Norris Square, Fairhill y Kensington**. Si vives en los códigos postales 19122, 19133 o 19134, ¡ponte en contacto con nosotros! Consulta nuestro mapa para obtener más detalles sobre dónde puedes encontrarnos y conectarte."
    link:
      text: Donde estamos
      href: /networklocation
    class: bg-light-gray

  # newsletter 
  - template: newsletter-verbose

  # Image
  - template: image
    src: "/images/nkcdc-drone.jpg"
    alt: Imagen aérea de tres personas instalando equipos en el tejado de un edificio, con el barrio al fondo.
    class: display-img-bottom-center
---
