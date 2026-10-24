import { gr441Project } from './gr441-project';

/** Goals are ambitions supplied by Enzo, not confirmed race entries or completed records. */
export const trailGoals = [
    {
        id: 'miut',
        title: 'MIUT Legend',
        location: 'Madeira, Portugal',
        timing: '24 April 2027',
        type: 'Race goal',
        image: '/images/trail/madeira.webp',
        imageAlt: 'Madeira mountain landscape',
        distance: '110 km',
        elevation: '7,200 m+',
        description:
            'Take on Madeira from coast to coast. A long day and night in the mountains, and a chance to take my ultra-running a step further.',
        href: 'https://miutmadeira.com/miut-2027-regulations/',
        linkLabel: 'Explore MIUT',
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
        id: 'diagonale',
        title: 'Diagonale des Fous',
        location: 'Réunion Island',
        timing: '2027',
        type: 'Race goal',
        image: '/images/trail/reunion.webp',
        imageAlt: 'Mountain ridges and valleys on Réunion Island',
        distance: 'An island crossing',
        elevation: 'Grand Raid',
        description:
            'Make it to the start line of the Diagonale and experience Réunion on foot. One of the adventures that makes me want to keep going further.',
        href: 'https://www.grandraid-reunion.com/en/',
        linkLabel: 'Explore the Grand Raid',
    },
];
