var config = {
    style: 'mapbox://styles/mapbox/streets-v11',
    accessToken: 'pk.eyJ1IjoiYWx3ZXJtZXJjb2xhbiIsImEiOiJja3RwMzZ3amIwaWo1MnFwM2c4cnFlNmRiIn0.un65ev7gjiwE3NIMedmARA',
    showMarkers: true,
    markerColor: '#3FB1CE',
    theme: 'dark',
    use3dTerrain: false,
    title: 'Philly Community Wireless',
    subtitle: 'Building a community wireless broadband network in Philadelphia',
    byline: 'Internet for the people by the people',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Display Title',
            image: './path/to/image/source.png',
            description: 'Philly Community Wireless is building a community-owned wireless network in the North Philadelphia neighborhood of Norris Square.',
            location: {
                center: [-122.418398, 37.759483],
                zoom: 8.5,
                pitch: 60,
                bearing: 0
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
            id: 'other-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Second Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-77.020636, 38.886900],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
