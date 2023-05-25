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
            title: 'How does it work?',
            image: './images/mounting_antenna.jpg',
            description: 'We often get questions about how the network is built. This scrollytelling map will walk you through how our wireless mesh network functions, and what happens when you access the internet on our network.',
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
            title: 'A local access point at the Norris Square Neighborhood Project Main Building',
            image: './images/nsnp.jpg',
            description: 'Here you see a directional antenna mounted on the outside facade of our community partner, Norris Square Neighborhood Projects. This device broadcasts wifi into Norris Square Park. If you were to log in, your device would reach the internet by connecting to it. This device is connected to a router and a radio antenna on the roof, known as a Litebeam.',
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
            id: '5',
            alignment: 'right',
            hidden: false,
            title: 'Las Parcelas',
            image: './images/las_parcelas.jpg',
            description: "At the Norris Square Neighborhood Project's Las Parcelas gardens, we've installed an antenna visible in light of sight from the Gotham Tower. In this image, you can see the access point broadcasting wifi, and behind it, the radio antenna pointed to PhillyWisper's supernode at Gotham Tower.",
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
            title: 'The supernode',
            image: './images/gotham.png',
            description: 'The Gotham Tower highsite southwest of Norris Square Park has a series of sector antennas broadcasting wireless radio signals in every direction. These sector antennas, point to multipoint radios, connect to the Litebeam on the roof of local residences and organizations.',
            location: {
                center: { lon: -75.13713, lat: 39.98152 },
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
            alignment: 'right',
            hidden: false,
            title: 'The datacenter',
            image: './images/datacenter.jpg',
            description: 'Gotham Tower also has radios connecting it to the Data center at 401 N Broad, which acts as the gateway out to the cloud or internet more broadly.',
            location: {
                center: { lon: -75.16105, lat: 39.95982 },
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
            id: '9',
            alignment: 'right',
            hidden: false,
            title: 'LOS',
            image: './images/los.png',
            description: 'One problem that often arises is we cannot get Line of Sight between a residential house and Gotham tower. To address this problem, we can take advantage of the mesh capabilities of our wifi network. For example, buildings that are too close to Gotham Tower or below a taller building, cannot get direct access from the supernode to the internet.',
            location: {
                center: { lon: -75.13441, lat: 39.98149},
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
            id: '10',
            alignment: 'right',
            hidden: false,
            title: 'LOS',
            image: './images/los.png',
            description: 'We often relay signal from a local residential hub, to another location using wireless meshing. For example, we mounted an omnidirectional antenna on the top of a residential rowhouse, with the omni wired via ethernet directly to the Litebeam pionting at Gotham. Then from a neighboring community organization, GALAEI, we pointed a directional antenna towards the hub omni, and ran a cable inside the building to provide the organization with wifi.',
            location: {
                center: { lon: -75.13441, lat: 39.98149 },
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
            id: '12',
            alignment: 'right',
            hidden: false,
            title: 'Installing Antennas on Rooftops',
            image: './images/rooftop.jpg',
            description: 'We are currently looking for homeowners who would allow us to install an antenna to relay signal from Gotham Tower. If you are interested in helping us grow the network, please reach out and we can work with you to figure out how we can grow a public wifi network in your neighborhood',
            location: {
                center: { lon: -75.13385, lat: 39.98150 },
                zoom: 15.01,
                pitch: 60.00,
                bearing: -10.40
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
