/** Public profile truth: https://github.com/gubgub63 (retrieved October 4, 2026).
 * Name, email and current employment were confirmed directly by the user.
 */
export const profile = {
    name: 'Enzo Gubbiotti',
    firstName: 'Enzo',
    email: 'enzogubbiotti63@gmail.com',
    handle: 'gubgub63',
    role: 'Full-Stack Developer',
    location: 'France',
    bio: 'Building thoughtful web experiences, from e-commerce to the trails.',
    about: [
        "I'm Enzo, a full-stack developer based in France, currently working at Accenture. I graduated with a BUT in Computer Science and started out building e-commerce experiences at De Bussac Multimedia.",
        "I work across frontend and backend, with a particular fondness for clear interfaces, reliable services, and things that make everyday life a little easier. These days, I'm also exploring data engineering, Python, and modern data workflows.",
        "Away from the keyboard, you'll find me on the trails. Running and ultra-trail inspire some of my favourite side projects — bringing the things I love to build closer to the things I love to do.",
    ],
    github: 'https://github.com/gubgub63',
    avatar: '/images/profile.png',
    interests: ['Trail running', 'Ultra-trail', 'Building side projects'],
};

export const experience = [
    {
        role: 'Full-Stack Developer',
        company: 'Accenture',
        period: 'Since September 14',
        current: true,
        description:
            'Working across frontend and backend to build web applications, on a permanent contract.',
    },
    {
        role: 'Full-Stack Developer · Apprenticeship',
        company: 'De Bussac Multimedia',
        period: 'Previously',
        current: false,
        description:
            'Built e-commerce experiences with WordPress and WooCommerce, working with ACF, Gutenberg, and Timber.',
    },
    {
        role: 'BUT in Computer Science',
        company: 'Education',
        period: 'Graduated',
        current: false,
        description:
            'A university technology degree in computer science, combining software development with hands-on project work.',
    },
];

export const stackGroups = [
    {
        label: 'Frontend',
        items: ['Angular', 'React', 'React Native', 'Vue', 'Astro', 'Tailwind CSS'],
    },
    { label: 'Backend', items: ['Java', 'Spring Boot', 'PHP', 'Symfony', 'Node.js'] },
    { label: 'E-commerce', items: ['WordPress', 'WooCommerce', 'ACF', 'Gutenberg', 'Timber'] },
    { label: 'Data & tools', items: ['Python', 'Pandas', 'Streamlit', 'SQL', 'Docker', 'Git'] },
    {
        label: 'Currently exploring',
        items: ['Snowflake', 'Databricks', 'Data engineering', 'ETL / ELT'],
    },
];

export const projects = [
    {
        slug: 'summitstride',
        title: 'SummitStride',
        summary: 'A training companion for the long run.',
        description:
            'An ultra-trail training application combining personalised plans, nutrition, activity integrations, and a training calendar.',
        repo: 'https://github.com/gubgub63/SummitStride',
        technologies: ['Next.js', 'TypeScript', 'Fastify', 'PostgreSQL'],
        year: 2025,
        source: 'Public repository README',
    },
    {
        slug: 'nourino',
        title: 'Nourino',
        summary: 'A simpler way to track meals and macros.',
        description:
            'A nutrition journal that estimates calories and macros from meal descriptions, photos, and barcodes, with native iOS and Android apps.',
        repo: '',
        website: 'https://nourino.com/',
        featureImage: '/images/nourino-journal.webp',
        featureImages: [
            '/images/nourino-journal.webp',
            '/images/nourino-meal.webp',
            '/images/nourino-stats.webp',
        ],
        technologies: ['SwiftUI', 'Jetpack Compose', 'Django', 'Astro'],
        source: 'Official Nourino website and local project README',
    },
    {
        slug: 'portfolio',
        title: 'Personal Portfolio',
        summary: 'A little about me and the things I build.',
        description:
            'My personal portfolio, built with Astro and TypeScript, featuring a pixelated avatar, accessible interactions, and real GitHub activity.',
        repo: 'https://github.com/gubgub63/mon-portfolio',
        technologies: ['Astro', 'TypeScript', 'CSS'],
        year: 2026,
        source: 'Current portfolio source code',
    },
    {
        slug: 'dansenity',
        title: 'Dansenity',
        summary: 'Connecting dance classes, teachers, and students.',
        description:
            'A dance-class platform with course discovery, bookings, payments, and dedicated tools for teachers and administrators.',
        repo: 'https://github.com/gubgub63/dansenity',
        technologies: ['Symfony', 'PHP', 'Stripe'],
        source: 'Public repository controllers and dependency manifests',
    },
    {
        slug: 'pykemon',
        title: 'Pykemon',
        summary: 'Learning Python, one Pokémon at a time.',
        description:
            'A Pokémon-inspired fangame written in Python as an NSI computer science school project.',
        repo: 'https://github.com/gubgub63/Pykemon',
        technologies: ['Python'],
        year: 2022,
        source: 'Public repository README',
    },
];
