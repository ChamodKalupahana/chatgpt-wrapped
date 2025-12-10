<script lang="ts">
    import type { WrappedSummaryData } from "../types";

    export let data: WrappedSummaryData;
</script>

<div
    class="mb-12 p-6 bg-gradient-to-br from-indigo-900/40 to-slate-900 rounded-xl border border-indigo-500/30 shadow-lg relative overflow-hidden group"
>
    <div class="absolute top-0 right-0 p-4 opacity-50">
        <div class="w-32 h-32 bg-indigo-500/20 blur-3xl rounded-full"></div>
    </div>

    <h2
        class="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-cyan-300 mb-4"
    >
        {data.title}
    </h2>

    <p class="text-slate-300 leading-relaxed text-base md:text-lg">
        {data.text}
    </p>
</div>
