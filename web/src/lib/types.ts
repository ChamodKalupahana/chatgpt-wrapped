export type ModeCategory =
    | 'ai-safety'
    | 'engineering'
    | 'career'
    | 'superpowers'
    | 'timeline'
    | 'forecast'
    | 'creative';

export type Tag = string;

export type Stat = {
    label: string;
    value?: string;
    description?: string;
    tone?: 'neutral' | 'good' | 'highlight' | 'warning';
};

export type ContentBlock = {
    title?: string;
    bullets: string[];
};

export type SectionConfig = {
    id: string;
    title: string;
    subtitle: string;
    category: ModeCategory;
    icon: string; // lucide-svelte icon name
    tags: Tag[];
    stats?: Stat[];
    highlightBullets?: string[];
    contentBlocks?: ContentBlock[];
    progressBars?: { label: string; percent: number }[];
};

export type TimelineSegment = {
    id: string;
    label: string;
    description: string;
    modeDistribution: {
        aiSafety: number;
        engineering: number;
        career: number;
        creative: number;
    };
};

export type HeroData = {
    title: string;
    subtitleLines: string[];
    stats: string[];
    moodDistribution: { label: string; width: string; color: string }[];
};

export type WrappedSummaryData = {
    title: string;
    text: string;
};
