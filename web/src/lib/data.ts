import type { SectionConfig, TimelineSegment, HeroData, WrappedSummaryData } from './types';

export const heroData: HeroData = {
    title: "Chamod's ChatGPT Wrapped 2025: Alignment Mission Control",
    subtitleLines: [
        "You turned ChatGPT into your alignment lab, debugging console, and life storyboard.",
        "From mechanistic interpretability deep dives to WordPress fires and fellowship interviews, 2025 was quiet main-character training for alignment work."
    ],
    stats: [
        "AI Safety & Mech Interp: ~60% of “serious” usage",
        "Stacks touched: Web • iOS • Android • Infra • Policy",
        "Fellowship arcs: AISafety Camp • Autostructures • ARBOx • BlueDot"
    ],
    moodDistribution: [
        { label: "Research", width: "40%", color: "bg-cyan-500" },
        { label: "Shipping", width: "30%", color: "bg-emerald-500" },
        { label: "Career & Meta", width: "20%", color: "bg-indigo-500" },
        { label: "Creative", width: "10%", color: "bg-pink-500" }
    ]
};

export const wrappedSummary: WrappedSummaryData = {
    title: "Chamod's ChatGPT Wrapped 2025 in One Paragraph",
    text: "In 2025, you used ChatGPT as a combined interpretability lab, ops console, and life planning co-pilot. You shipped multi-platform apps for clients, debugged gnarly infra issues, trained for AI safety fellowships, and built internal tools (risk calculators, forecasting dashboards) – all while slowly turning your existing skillset into alignment-focused leverage."
};

export const timelineSegments: TimelineSegment[] = [
    {
        id: 'block1',
        label: 'Shipping Season',
        description: 'Heavy Engineering / Firefighting, some AI Safety and Meta.',
        modeDistribution: { aiSafety: 20, engineering: 60, career: 10, creative: 10 }
    },
    {
        id: 'block2',
        label: 'Deep Dive',
        description: 'Strong AI Safety / Research focus.',
        modeDistribution: { aiSafety: 80, engineering: 10, career: 5, creative: 5 }
    },
    {
        id: 'block3',
        label: 'Hackathon Season',
        description: 'Mix of AI Safety, Engineering, Meta.',
        modeDistribution: { aiSafety: 50, engineering: 30, career: 10, creative: 10 }
    },
    {
        id: 'block4',
        label: 'Interview Gauntlet',
        description: 'High Career & Meta, with AI safety questions.',
        modeDistribution: { aiSafety: 20, engineering: 10, career: 60, creative: 10 }
    },
    {
        id: 'block5',
        label: 'Playful Mode',
        description: 'Image experiments, music chord transposition, chatty Qs.',
        modeDistribution: { aiSafety: 10, engineering: 10, career: 10, creative: 70 }
    }
];

export const sections: SectionConfig[] = [
    {
        id: 'alignment',
        title: 'Alignment & AI Safety Deep Dives',
        subtitle: 'Turning late-night LessWrong posts and papers into tools, forecasts, and interview-ready arguments.',
        category: 'ai-safety',
        icon: 'FlaskConical',
        tags: [
            'mechanistic interpretability', 'logit lens', 'GPT-2 circuits', 'hallucination risk',
            'AI governance & infrastructure', 'instrumental convergence', 's-risks & x-risks',
            'AI pause', 'forecasting & incidents', 'MeaningStack Blueprints'
        ],
        stats: [
            { label: 'Safety-related sessions', value: '40–60%', description: 'of ChatGPT use (vibes)' },
            { label: 'Custom tools concepted', description: 'misalignment-risk calculator, Cham-GPT, forecasting dashboards' },
            { label: 'Interpretability focus', description: 'GPT-2-small, logit lens, circuits' }
        ],
        progressBars: [
            { label: 'Mechanistic interp learning curve', percent: 70 },
            { label: 'Governance infra understanding', percent: 60 },
            { label: 'Forecasting & incident modeling', percent: 55 }
        ],
        highlightBullets: [
            'Crafted intuitive metaphors like the **“live photo”** analogy for logit lens.',
            'Explored hallucination/tool-risk toolkits (e.g., HallBayes-style thinking) and risk calculators.',
            'Prepared for AISafety Camp & MeaningStack projects centered on **governance protocols** and **blueprints** for agents.'
        ]
    },
    {
        id: 'shipping',
        title: 'Shipping & Systems – Full-Stack Firefighter',
        subtitle: 'When something breaks in prod, ChatGPT becomes your senior engineer who never sleeps.',
        category: 'engineering',
        icon: 'Server',
        tags: [
            'Angular 17 / Azure Static Web Apps', 'SwiftUI / iOS workout app', 'Kotlin / Jetpack Compose',
            'WordPress / WooCommerce', 'MySQL / SSH / cPanel', 'AWS – Cognito, S3, Lambda, RDS',
            'Networking & servers', 'Email loops & webhooks', 'Buildium API integration'
        ],
        stats: [
            { label: 'Stack breadth', value: 'Web • Mobile • Infra', tone: 'highlight' }
        ],
        contentBlocks: [
            {
                title: 'Prod incidents handled (vibes)',
                bullets: [
                    'Email duplication in WooCommerce',
                    'MySQL timeouts + SSH tunneling trouble',
                    'wp-toolkit hidden staging DBs',
                    'cPanel IP whitelisting'
                ]
            },
            {
                title: 'Favorite moves',
                bullets: [
                    'Turning vague: “customers are getting multiple emails” → into a precise chain of cause hypotheses.',
                    'Asking “what do I tell the client in one honest but calm paragraph?” and drafting the email.',
                    'Using ChatGPT to reason across logs, UIs, and plugin configs.'
                ]
            }
        ]
    },
    {
        id: 'career',
        title: 'Career Arc – From Shipping Apps to Saving the World',
        subtitle: 'Physics → full-stack engineer → mechanistic interpretability & governance infrastructure.',
        category: 'career',
        icon: 'Route',
        tags: [
            'AISafety Camp', 'MeaningStack governance', 'Autostructures – live theory',
            'ARBOx / OAISI', 'BlueDot AGI Strategy', 'career pivot', 'mock interviews'
        ],
        contentBlocks: [
            {
                title: 'How ChatGPT helped',
                bullets: [
                    'Simulated interviewers who ask about strengths/weaknesses, project fit, and AI safety motivations.',
                    'Provided second opinions on whether your framings match the **alignment community’s consensus**.',
                    'Turned messy drafts into coherent statements and project proposals.'
                ]
            }
        ]
    },
    {
        id: 'superpowers',
        title: 'Superpowers & Signature Moves',
        subtitle: 'Your recurring patterns when you use ChatGPT – aka how Cham operates.',
        category: 'superpowers',
        icon: 'Sparkles',
        tags: ['planning', 'alignment-brain', 'debugging reality', 'meta-skill', 'epistemic hygiene'],
        contentBlocks: [
            {
                title: 'Systemization & Structure',
                bullets: [
                    '“Flexible outcomes” frameworks (minimum/target/stretch plans).',
                    'Kanban boards, Notion tables, timelines for 3–6 month arcs.',
                    'Uses ChatGPT to help define scopes, milestones, and time estimates.'
                ]
            },
            {
                title: 'Multi-Project Juggler',
                bullets: [
                    'Juggles multiple client projects, infra tasks, and AI safety hackathons.',
                    'Uses ChatGPT as external RAM: “remind me what we did with this site,” “restructure this email,” etc.',
                    'Comfortable context switching across languages and platforms.'
                ]
            },
            {
                title: 'Research Translator',
                bullets: [
                    'Converts dense academic or LessWrong content into intuitive explanations and metaphors.',
                    'Asks probing questions like: “is this actually community consensus?”.',
                ]
            },
            {
                title: 'Honest Introspection',
                bullets: [
                    'Looks for hidden assumptions in arguments (e.g., doom path node diagrams).',
                    'Uses ChatGPT to generate adversarial critiques and alternative framings.'
                ]
            }
        ]
    },
    {
        id: 'forecast',
        title: '2026 Forecast & Recommendations',
        subtitle: 'If 2025 was setup, 2026 is execution.',
        category: 'forecast',
        icon: 'Rocket',
        tags: ['2026', 'mechanistic interpretability', 'governance protocols', 'fellowships', 'public artifacts', 'meta-reflection'],
        contentBlocks: [
            {
                title: 'Predictions',
                bullets: [
                    'You run at least one **substantial mech-interp or governance-infra project** with public outputs.',
                    'You become “the alignment infra/debug person” in at least one community.',
                    'You get into at least one **fellowship / camp** that provides a serious scaffold for your research direction.'
                ]
            },
            {
                title: 'Recommendations',
                bullets: [
                    'Ship a **flagship interpretability/governance tool**.',
                    'Maintain a **weekly AI-safety synthesis note**.',
                    'Use ChatGPT at least monthly as an **adversarial reviewer**.',
                    'Do a **monthly “alignment mission control review”**.'
                ]
            }
        ],
        highlightBullets: [
            '2025 was you wiring up the lab. 2026 is when you start running bigger experiments.'
        ]
    }
];
