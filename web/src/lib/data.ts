export type Tag = string;

export type Stat = {
    label: string;
    value?: string;
    description?: string;
};

export type SubCard = {
    title: string;
    bullets: string[];
};

export type Section = {
    id: string;
    title: string;
    subtitle: string;
    category: 'ai-safety' | 'engineering' | 'career' | 'superpowers' | 'forecast';
    tags: Tag[];
    stats?: Stat[];
    highlightBullets?: string[];
    subCards?: SubCard[];
    contentBlocks?: {
        title?: string;
        bullets: string[];
    }[];
    insight?: string;
};

export const sections: Section[] = [
    {
        id: 'alignment',
        title: 'Alignment & AI Safety Deep Dives',
        subtitle: 'Turning late-night LessWrong posts and papers into tools, forecasts, and interview-ready arguments.',
        category: 'ai-safety',
        tags: [
            'mechanistic interpretability',
            'logit lens',
            'incident forecasting',
            'instrumental convergence',
            's-risks & x-risks',
            'governance infrastructure',
            'AI pause & policy'
        ],
        stats: [
            { label: 'Safety-related sessions', value: '40–60%', description: 'of total use' },
            { label: 'Custom tools explored', value: '3+', description: 'Risk calcs, Cham-GPT, models' }
        ],
        highlightBullets: [
            'Wrote accessible metaphors (e.g., logit lens as “live photos” of the model’s thoughts).',
            'Built or outlined tools (risk calculators, dashboards, incident modeling).',
            'Prepared for debates and interviews by probing assumptions and community consensus.'
        ],
        insight: 'You treated ChatGPT like a lab notebook, critic, and simulator for alignment-relevant thinking.'
    },
    {
        id: 'shipping',
        title: 'Shipping & Systems – Full-Stack Firefighter',
        subtitle: 'When something breaks in prod, ChatGPT becomes your senior engineer who never sleeps.',
        category: 'engineering',
        tags: [
            'Angular & Azure',
            'Swift / iOS',
            'Kotlin / Android',
            'WordPress / WooCommerce',
            'MySQL & cPanel',
            'AWS / S3 / Cognito',
            'Networking & servers'
        ],
        stats: [
            { label: 'Production issues triaged', value: 'Many', description: 'Email loops, DB timeouts, etc.' },
            { label: 'Stack breadth', value: 'Web • Mobile • Infra' }
        ],
        contentBlocks: [
            {
                title: 'Signature Moves',
                bullets: [
                    'Turning chaotic client reports into precise bullet-point root cause analyses.',
                    'Asking “what is safe to tell the client?” and crafting clear status emails.',
                    'Using ChatGPT for translations between stack layers (logs → mental models → concrete fixes).'
                ]
            }
        ]
    },
    {
        id: 'career',
        title: 'Career Arc – From Shipping Apps to Saving the World',
        subtitle: 'Physics → full-stack engineer → mechanistic interpretability & governance.',
        category: 'career',
        tags: [
            'AISafety Camp',
            'MeaningStack / Blueprints',
            'Autostructures',
            'ARBOx / OAISI',
            'BlueDot AGI Strategy',
            'fellowship prep',
            'mock interviews'
        ],
        contentBlocks: [
            {
                title: 'Timeline Highlight',
                bullets: [
                    'Early 2025: Heavy focus on client apps, infra, and platform glue.',
                    'Mid 2025: Increasing AI-safety reading, mech interp deep dives.',
                    'Late 2025: Intense interview prep, governance protocols, AI agents.'
                ]
            },
            {
                title: 'How ChatGPT Helped',
                bullets: [
                    'Simulating interviewers for AI safety, mech interp, and interface design.',
                    'Drafting and refining application answers and “why AI safety?” narratives.',
                    'Clarifying whether views are “just you” or shared by the alignment community.'
                ]
            }
        ]
    },
    {
        id: 'superpowers',
        title: 'Superpowers & Signature Moves',
        subtitle: 'Your recurring patterns when you use ChatGPT – aka how Cham operates.',
        category: 'superpowers',
        tags: ['planning', 'alignment-brain', 'debugging reality', 'meta'],
        subCards: [
            {
                title: 'Systemization & Structure',
                bullets: [
                    'Uses “flexible outcomes” (minimum/target/stretch).',
                    'Builds Kanban boards, Notion tables, timelines.',
                    'Turns vague tasks into structured checklists without losing the vibe.'
                ]
            },
            {
                title: 'Multi-Project Juggler',
                bullets: [
                    'Manages multiple client projects, infra tasks, hacks, and research.',
                    'Uses ChatGPT as memory extender and context restorer.',
                    'Comfortable hopping between stacks and domains quickly.'
                ]
            },
            {
                title: 'Research Translator',
                bullets: [
                    'Asks questions like “is this actually community consensus?”.',
                    'Summarizes complex papers and posts into intuitive metaphors.',
                    'Integrates theoretical stuff with practical tools.'
                ]
            },
            {
                title: 'Honest Introspection',
                bullets: [
                    'Actively looks for hidden assumptions in own arguments.',
                    'Asks for adversarial takes on positions.',
                    'Uses ChatGPT as a mirror for epistemic hygiene.'
                ]
            }
        ]
    },
    {
        id: 'forecast',
        title: '2026 Forecast & Recommendations',
        subtitle: 'If 2025 was setup, 2026 is execution.',
        category: 'forecast',
        tags: ['2026', 'mechanistic interpretability', 'governance protocols', 'fellowships', 'public artifacts'],
        contentBlocks: [
            {
                title: 'Predictions',
                bullets: [
                    'You run at least one substantial mech-interp or governance-infra project.',
                    'You become an informal “alignment infra and debugging person” for people around you.',
                    'You get at least one fellowship / camp / structured program that meaningfully levels you up.'
                ]
            },
            {
                title: 'Recommendations',
                bullets: [
                    'Ship one flagship interpretability or governance tool and show it publicly.',
                    'Maintain a weekly AI-safety synthesis note.',
                    'Use ChatGPT as “adversarial reviewer” in addition to collaborator.',
                    'Do one monthly “alignment dashboard” review of your own goals.'
                ]
            }
        ],
        insight: '2025 was you wiring up the lab. 2026 is when you start running bigger experiments.'
    }
];
