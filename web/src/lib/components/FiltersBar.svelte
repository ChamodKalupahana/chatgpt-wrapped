<script lang="ts">
    import { Search, X } from "lucide-svelte";

    export let searchQuery = "";
    export let selectedCategory: string = "All";

    const categories = [
        { id: "All", label: "All Operations" },
        { id: "ai-safety", label: "AI Safety" },
        { id: "engineering", label: "Engineering" },
        { id: "career", label: "Career Arc" },
        { id: "superpowers", label: "Superpowers" },
        { id: "forecast", label: "2026 Forecast" },
    ];
</script>

<div
    class="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50 py-4 mb-8"
>
    <div
        class="max-w-4xl mx-auto px-4 w-full flex flex-col md:flex-row gap-4 items-center justify-between"
    >
        <!-- Category Chips -->
        <div
            class="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar items-center"
        >
            {#each categories as category}
                <button
                    class="px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all
          {selectedCategory === category.id
                        ? 'bg-cyan-500 text-slate-900 font-semibold shadow-[0_0_10px_rgba(6,182,212,0.5)]'
                        : 'bg-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-700'}"
                    on:click={() => (selectedCategory = category.id)}
                >
                    {category.label}
                </button>
            {/each}
        </div>

        <!-- Search -->
        <div class="relative w-full md:w-64 shrink-0">
            <div
                class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500"
            >
                <Search size={14} />
            </div>
            <input
                type="text"
                bind:value={searchQuery}
                placeholder="Filter logs by keyword..."
                class="w-full bg-slate-800 border border-slate-700 text-slate-200 text-sm rounded-md pl-9 pr-8 py-1.5 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all placeholder:text-slate-600"
            />
            {#if searchQuery}
                <button
                    class="absolute inset-y-0 right-0 pr-2 flex items-center text-slate-500 hover:text-slate-300"
                    on:click={() => (searchQuery = "")}
                >
                    <X size={14} />
                </button>
            {/if}
        </div>
    </div>
</div>
