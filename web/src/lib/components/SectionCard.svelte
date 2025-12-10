<script lang="ts">
    import type { Section } from "$lib/data";
    import TagChip from "./ui/TagChip.svelte";
    import StatPill from "./ui/StatPill.svelte";
    import { Shield, Hammer, TrendingUp, Zap, Radio } from "lucide-svelte";

    export let section: Section;

    // Simple icon mapping based on category
    const icons = {
        "ai-safety": Shield,
        engineering: Hammer,
        career: TrendingUp,
        superpowers: Zap,
        forecast: Radio,
    };

    $: Icon = icons[section.category] || Shield;
</script>

<div
    class="bg-slate-900/50 border border-slate-700/50 rounded-xl overflow-hidden hover:border-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-900/10 group"
>
    <!-- Header -->
    <div class="p-6 border-b border-slate-800/50 bg-slate-800/20">
        <div class="flex items-start gap-4">
            <div
                class="p-2.5 rounded-lg bg-slate-800 border border-slate-700 text-cyan-400 shrink-0 group-hover:text-cyan-300 group-hover:border-cyan-500/50 transition-colors"
            >
                <svelte:component this={Icon} size={24} />
            </div>
            <div>
                <h3
                    class="text-xl font-semibold text-slate-100 group-hover:text-cyan-100 transition-colors"
                >
                    {section.title}
                </h3>
                <p class="text-slate-400 text-sm mt-1 leading-relaxed">
                    {section.subtitle}
                </p>
            </div>
        </div>

        <!-- Tags -->
        {#if section.tags && section.tags.length > 0}
            <div class="flex flex-wrap gap-2 mt-4 ml-[62px]">
                {#each section.tags as tag}
                    <TagChip label={tag} />
                {/each}
            </div>
        {/if}
    </div>

    <!-- Content -->
    <div class="p-6 space-y-6">
        <!-- Stats Row -->
        {#if section.stats && section.stats.length > 0}
            <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
                {#each section.stats as stat}
                    <StatPill {...stat} />
                {/each}
            </div>
        {/if}

        <!-- Highlight Bullets -->
        {#if section.highlightBullets && section.highlightBullets.length > 0}
            <ul
                class="space-y-2 text-slate-300 text-sm list-disc list-outside ml-4 marker:text-cyan-500/50"
            >
                {#each section.highlightBullets as bullet}
                    <li>{bullet}</li>
                {/each}
            </ul>
        {/if}

        <!-- Content Blocks -->
        {#if section.contentBlocks && section.contentBlocks.length > 0}
            <div class="space-y-4">
                {#each section.contentBlocks as block}
                    <div class="bg-slate-800/30 rounded-lg p-4">
                        {#if block.title}
                            <h4
                                class="text-sm font-semibold text-slate-200 mb-2 uppercase tracking-wide"
                            >
                                {block.title}
                            </h4>
                        {/if}
                        <ul
                            class="space-y-1.5 text-slate-400 text-sm list-disc list-outside ml-4 marker:text-slate-600"
                        >
                            {#each block.bullets as bullet}
                                <li>{bullet}</li>
                            {/each}
                        </ul>
                    </div>
                {/each}
            </div>
        {/if}

        <!-- Sub Cards (for Superpowers) -->
        {#if section.subCards && section.subCards.length > 0}
            <div class="grid md:grid-cols-2 gap-4">
                {#each section.subCards as card}
                    <div
                        class="bg-slate-800/40 border border-slate-700/50 rounded-lg p-4"
                    >
                        <h4
                            class="font-medium text-cyan-300 mb-2 flex items-center gap-2"
                        >
                            <span class="w-1.5 h-1.5 rounded-full bg-cyan-400"
                            ></span>
                            {card.title}
                        </h4>
                        <ul
                            class="space-y-1 text-xs text-slate-400 list-disc list-inside marker:text-slate-600"
                        >
                            {#each card.bullets as bullet}
                                <li>{bullet}</li>
                            {/each}
                        </ul>
                    </div>
                {/each}
            </div>
        {/if}

        <!-- Insight -->
        {#if section.insight}
            <div
                class="mt-4 p-3 bg-cyan-950/30 border border-cyan-900/50 rounded-lg flex gap-3 text-sm text-cyan-200 items-start"
            >
                <div class="shrink-0 mt-0.5">💡</div>
                <p class="italic">{section.insight}</p>
            </div>
        {/if}
    </div>
</div>
