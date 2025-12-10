<script lang="ts">
    import { Search, Filter } from "lucide-svelte";
    import type { ModeCategory } from "../types";

    export let searchTerm = "";
    export let activeCategory: ModeCategory | "all" = "all";
    export let detailed = false;

    const categories: { id: ModeCategory | "all"; label: string }[] = [
        { id: "all", label: "All" },
        { id: "ai-safety", label: "AI Safety" },
        { id: "engineering", label: "Engineering" },
        { id: "career", label: "Career" },
        { id: "superpowers", label: "Superpowers" },
        { id: "timeline", label: "Timeline" },
        { id: "forecast", label: "2026" },
    ];
</script>

<div
    class="sticky top-0 z-10 bg-slate-50/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 py-4 mb-8 -mx-4 px-4 md:px-0"
>
    <div
        class="max-w-5xl mx-auto flex flex-col md:flex-row gap-4 items-center justify-between"
    >
        <!-- Search -->
        <div class="relative w-full md:w-64 group">
            <Search
                class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-cyan-400 transition-colors"
            />
            <input
                type="text"
                bind:value={searchTerm}
                placeholder="Search specs..."
                class="w-full pl-10 pr-4 py-2 bg-slate-200 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all"
            />
        </div>

        <!-- Filters -->
        <div class="flex flex-wrap justify-center gap-2">
            {#each categories as cat}
                <button
                    on:click={() => (activeCategory = cat.id)}
                    class="px-3 py-1 rounded-full text-xs md:text-sm font-medium transition-all duration-200
            {activeCategory === cat.id
                        ? 'bg-cyan-500 text-slate-950 shadow-[0_0_10px_rgba(6,182,212,0.4)]'
                        : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-300 dark:hover:bg-slate-700'}"
                >
                    {cat.label}
                </button>
            {/each}
        </div>

        <!-- Detail Toggle -->
        <div class="hidden md:flex items-center gap-2">
            <span class="text-xs text-slate-500 uppercase font-mono"
                >Detailed View</span
            >
            <button
                on:click={() => (detailed = !detailed)}
                class="w-10 h-6 rounded-full bg-slate-700 relative transition-colors {detailed
                    ? 'bg-cyan-600'
                    : ''}"
                role="switch"
                aria-checked={detailed}
            >
                <span
                    class="absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform {detailed
                        ? 'translate-x-4'
                        : ''}"
                ></span>
            </button>
        </div>
    </div>
</div>
