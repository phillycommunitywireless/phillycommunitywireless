var config = {
    style: 'mapbox://styles/alwermercolan/ckv2us2if3p6k14le2i48yrcz',
    accessToken: 'pk.eyJ1IjoiYWx3ZXJtZXJjb2xhbiIsImEiOiJja3RwMzZ3amIwaWo1MnFwM2c4cnFlNmRiIn0.un65ev7gjiwE3NIMedmARA',
    showMarkers: true,
    markerColor: '#3FB1CE',
    theme: 'dark',
    use3dTerrain: false,
    title: 'Philly Community Wireless',
    subtitle: 'Internet for the people by the people',
    byline: 'Created by Alex Wermer-Colan',
    footer: 'Philly Community Wireless',
    chapters: [
        {
            id: '1',
            alignment: 'center',
            hidden: false,
            title: 'Building a Community Wifi Network in North Philadelphia',
            image: './images/rooftop_antenna.jpg',
            description: 'Philly Community Wireless is building a community-owned wireless network in the North Philadelphia neighborhood of Norris Square.',
            location: {
                center: { lon: -75.14770, lat: 39.98100 },
                zoom: 11.50,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: '2',
            alignment: 'right',
            hidden: false,
            title: 'The Pilot Stage',
            image: './images/mounting_antenna.jpg',
            description: 'The first stage of our pilot in Norris Square involves installing anchor antennas on blocks around the neighborhood.',
            location: {
                center: { lon: -75.13523, lat: 39.98361 },
                zoom: 13.01,
                pitch: 3.00,
                bearing: 9.60
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '3',
            alignment: 'right',
            hidden: false,
            title: 'The Anchor: Installation at the Norris Square Neighborhood Project Main Building',
            image: './images/nsnp.jpg',
            description: 'Here you see a relay antenna mounted on the wall of Norris Square Neighborhood Projects, projecting wireless signal into Norris Square Park.',
            location: {
                center: { lon: -75.13358, lat: 39.98294 },
                zoom: 17.00,
                pitch: 60.00,
                bearing: 46.40
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '4',
            alignment: 'left',
            hidden: false,
            title: 'Free Wifi in Norris Square Park',
            image: './images/park_sign.jpg',
            description: 'After installing antennas on West Kensington Ministry and Norris Square Neighborhood Project properties, we are able to project free wifi into Norris Square Park.',
            location: {
              center: { lon: -75.13468, lat: 39.98269 },
              zoom: 17.00,
              pitch: 5.50,
              bearing: 7.20
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '5',
            alignment: 'right',
            hidden: false,
            title: 'Las Parcelas',
            image: './images/las_parcelas.jpg',
            description: "At the Norris Square Neighborhood Project's Las Parcelas gardens, we've installed an antenna visible in light of sight from the Gotham Tower.",
            location: {
              center: { lon: -75.13587, lat: 39.98497 },
              zoom: 17.00,
              pitch: 31.00,
              bearing: -26.40
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '6',
            alignment: 'left',
            hidden: false,
            title: 'Antenna Detail',
            image: './images/antenna_detail.png',
            description: 'Here you can see the antenna and the source tower clearly marked.',
            location: {
              center: { lon: -75.13587, lat: 39.98497 },
              zoom: 17.00,
              pitch: 59.50,
              bearing: -167.19
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '7',
            alignment: 'right',
            hidden: false,
            title: 'Installing Antennas on Rooftops',
            image: './images/rooftop.jpg',
            description: 'We are currently looking for homeowners who would allow us to install an antenna to relay signal from Gotham Tower',
            location: {
                center: { lon: -75.13385, lat: 39.98150 },
                zoom: 15.01,
                pitch: 60.00,
                bearing: -10.40
            },
            mapAnimation: 'easeTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '8',
            alignment: 'left',
            hidden: false,
            title: 'The Digital Divide in North Philadelphia',
            image: './images/divide_map.png',
            description: 'Kensington and Fairhill are two of the neighborhoods in North Philadelphia in need of more affordable options for bridging the digital divide.',
            location: {
                center: { lon: -75.12988, lat: 39.99176 },
                zoom: 12.49,
                pitch: 15.50,
                bearing: 0.00
            },
            mapAnimation: 'easeTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
