var config = {
    style: 'mapbox://styles/alwermercolan/ckv2tkazn42hr14mhv7fctvek',
    accessToken: 'pk.eyJ1IjoiYWx3ZXJtZXJjb2xhbiIsImEiOiJja3RwMzZ3amIwaWo1MnFwM2c4cnFlNmRiIn0.un65ev7gjiwE3NIMedmARA',
    showMarkers: true,
    markerColor: '#3FB1CE',
    theme: 'dark',
    use3dTerrain: false,
    title: 'Philly Community Wireless',
    subtitle: 'Building a community wireless broadband network in Philadelphia',
    byline: 'Internet for the people by the people',
    footer: 'Philly Community Wireless',
    chapters: [
        {
            id: '1',
            alignment: 'left',
            hidden: false,
            title: 'North Philadelphia',
            image: './images/rooftop_antenna.jpg',
            description: 'Philly Community Wireless is building a community-owned wireless network in the North Philadelphia neighborhood of Norris Square.',
            location: {
                center: { lon: -75.14770, lat: 39.98100 },
                zoom: 12.50,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
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
            title: 'Norris Square Neighborhood Project',
            image: './images/mounting_antenna.jpg',
            description: 'The first stage of our pilot in Norris Square involves installing anchor antennas on blocks around the neighborhood.',
            location: {
                center: { lon: -75.13473, lat: 39.98269 },
                zoom: 16.34,
                pitch: 0.00,
                bearing: 0.00,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '3',
            alignment: 'right',
            hidden: false,
            title: 'Norris Square Park',
            image: './images/park_sign.jpg',
            description: 'After installing antennas on West Kensington Ministry and Norris Square Neighborhood Project properties, we are able to project free wifi into Norris Square Park.',
            location: {
                center: { lon: -75.13381, lat: 39.98319 },
                zoom: 17.00,
                pitch: 4.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
