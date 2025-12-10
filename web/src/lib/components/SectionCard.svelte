<script lang="ts">
    import type { SectionConfig } from "../types";
    import * as Icons from "lucide-svelte";

    export let section: SectionConfig;
    export let detailed = false;

    // Dynamic icon loading
    // @ts-ignore
    $: Icon = Icons[section.icon] || Icons.HelpCircle;

    function getToneColor(tone: string | undefined) {
        switch (tone) {
            case "good":
                return "text-emerald-400 border-emerald-500/30 bg-emerald-500/10";
            case "warning":
                return "text-amber-400 border-amber-500/30 bg-amber-500/10";
            case "highlight":
                return "text-cyan-400 border-cyan-500/30 bg-cyan-500/10";
            default:
                return "text-slate-400 border-slate-700 bg-slate-800/50";
        }
    }
</script>

<div
    class="group relative bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-slate-700 hover:shadow-lg transition-all duration-300"
>
    <!-- Header -->
    <div class="flex items-start justify-between mb-4">
        <div class="flex items-center gap-3">
            <div
                class="p-2 rounded-lg bg-slate-800 text-cyan-400 group-hover:scale-110 transition-transform"
            >
                <svelte:component this={Icon} class="w-6 h-6" />
            </div>
            <div>
                <h3 class="text-xl font-bold text-slate-100">
                    {section.title}
                </h3>
                <p class="text-sm text-slate-400 mt-1">{section.subtitle}</p>
            </div>
        </div>
    </div>

    <!-- Stats Grid -->
    {#if section.stats}
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
            {#each section.stats as stat}
                <div
                    class="flex items-start gap-2 p-2 rounded-lg border {getToneColor(
                        stat.tone,
                    )}"
                >
                    <div class="flex-1">
                        <div
                            class="text-xs opacity-70 uppercase tracking-wider"
                        >
                            {stat.label}
                        </div>
                        <div class="font-medium">
                            {stat.value || ""}
                            <span class="opacity-75 font-normal"
                                >{stat.description || ""}</span
                            >
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    {/if}

    <!-- Progress Bars -->
    {#if section.progressBars}
        <div class="space-y-3 mb-6 bg-slate-950/50 p-4 rounded-lg">
            {#each section.progressBars as bar}
                <div>
                    <div
                        class="flex justify-between text-xs mb-1 text-slate-400"
                    >
                        <span>{bar.label}</span>
                        <span>{bar.percent}%</span>
                    </div>
                    <div class="h-2 bg-slate-800 rounded-full overflow-hidden">
                        <div
                            class="h-full bg-cyan-500 transition-all duration-1000 ease-out font-medium"
                            style="width: {bar.percent}%"
                        ></div>
                    </div>
                </div>
            {/each}
        </div>
    {/if}

    <!-- Tags -->
    <div class="flex flex-wrap gap-2 mb-4">
        {#each section.tags as tag}
            <span
                class="px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded border border-slate-700 hover:border-slate-600 cursor-default"
            >
                #{tag}
            </span>
        {/each}
    </div>

    <!-- Highlight Bullets (Summary) -->
    {#if section.highlightBullets && section.highlightBullets.length > 0}
        <ul class="space-y-2 text-sm text-slate-300 mb-4">
            {#each section.highlightBullets as bullet}
                <li class="flex gap-2">
                    <span class="text-cyan-500 mt-1">•</span>
                    <span
                        >{@html bullet.replace(
                            /\*\*(.*?)\*\*/g,
                            '<strong class="text-cyan-200">$1</strong>',
                        )}</span
                    >
                </li>
            {/each}
        </ul>
    {/if}

    <!-- Detailed Content (Conditional) -->
    {#if detailed && section.contentBlocks}
        <div
            class="mt-6 pt-4 border-t border-slate-800 animate-in fade-in slide-in-from-top-2"
        >
            {#each section.contentBlocks as block}
                <div class="mb-4 last:mb-0">
                    {#if block.title}<h4
                            class="text-sm font-bold text-slate-400 mb-2 uppercase tracking-wide"
                        >
                            {block.title}
                        </h4>{/if}
                    <ul class="space-y-2 text-sm text-slate-400">
                        {#each block.bullets as bullet}
                            <li class="flex gap-2">
                                <span class="text-slate-600 mt-1">▹</span>
                                <span
                                    >{@html bullet.replace(
                                        /\*\*(.*?)\*\*/g,
                                        '<strong class="text-slate-200">$1</strong>',
                                    )}</span
                                >
                            </li>
                        {/each}
                    </ul>
                </div>
            {/each}
        </div>
    {/if}
</div>
