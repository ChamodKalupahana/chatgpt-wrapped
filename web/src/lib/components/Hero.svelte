<script lang="ts">
    import type { HeroData } from "../types";

    export let data: HeroData;
</script>

<section class="mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
    <h1
        class="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-6 leading-tight"
    >
        {data.title}
    </h1>

    <div class="space-y-2 mb-8 text-lg text-slate-600 dark:text-slate-300">
        {#each data.subtitleLines as line}
            <p>{line}</p>
        {/each}
    </div>

    <div class="flex flex-wrap gap-3 mb-8">
        {#each data.stats as stat}
            <div
                class="px-3 py-1 rounded-full bg-slate-200 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700 text-xs md:text-sm font-medium text-slate-700 dark:text-slate-300 shadow-sm backdrop-blur-sm"
            >
                {stat}
            </div>
        {/each}
    </div>

    <!-- Mood Bar -->
    <div class="w-full h-4 rounded-full overflow-hidden flex bg-slate-800">
        {#each data.moodDistribution as mood}
            <div
                class="{mood.color} h-full transition-all duration-1000 ease-out hover:opacity-90 relative group"
                style="width: {mood.width}"
            >
                <div
                    class="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-slate-900 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-slate-700"
                >
                    {mood.label}: {mood.width}
                </div>
            </div>
        {/each}
    </div>
    <div
        class="flex justify-between text-xs text-slate-500 mt-2 font-mono uppercase tracking-wider"
    >
        {#each data.moodDistribution as mood}
            <span class="flex items-center gap-1">
                <span class="w-2 h-2 rounded-full {mood.color}"></span>
                {mood.label}
            </span>
        {/each}
    </div>
</section>
