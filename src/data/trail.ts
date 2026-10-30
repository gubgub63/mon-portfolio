import { gr441Project } from './gr441-project';

/** Goals are ambitions supplied by Enzo, not confirmed race entries or completed records. */
export const trailGoals = [
    {
        id: 'utlac',
        title: 'UTLAC 120K',
        location: 'Lake Como, Italy',
        timing: '2027',
        type: 'Race goal',
        distance: '120 km',
        elevation: '6,200 m+',
        description:
            'Cross the Triangolo Lariano from Menaggio to Lecco. Long climbs above Lake Como and a night on the ridges, for my first ultra beyond 100 km.',
        href: 'https://www.utlactrail.com/gare/120k/',
        linkLabel: 'Explore UTLAC',
    },
    {
        id: 'gr441',
        title: 'GR441 · FKT attempt',
        location: 'Chaîne des Puys, Auvergne',
        timing: gr441Project.timing.en,
        type: 'Personal challenge',
        image: '/images/trail/auvergne.webp',
        imageAlt: 'The volcanic landscape of the Chaîne des Puys, seen from Puy de Dôme',
        distance: '114 km',
        elevation: '2,782 m+',
        description:
            'Attempt a supported fastest known time on the loop around my home volcanoes in early 2027. A personal project, from the preparation to attempt day.',
        href: 'https://fastestknowntime.com/route/gr441-france',
        linkLabel: 'View the FKT route',
    },
    {
        id: 'vda',
        title: 'Val d’Aran · VDA 160K',
        location: 'Pyrenees, Spain',
        timing: '2027',
        type: 'Race goal',
        distance: '160 km',
        elevation: '10,000 m+',
        description:
            'Complete the Torn dera Val d’Aran, a long loop from Vielha through valleys, passes and mountain lakes. The biggest ultra of my projects.',
        href: 'https://valdaran.utmb.world/races/VDA',
        linkLabel: 'Explore Val d’Aran',
    },
];
