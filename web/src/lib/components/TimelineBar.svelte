<script lang="ts">
    import type { TimelineSegment } from "../types";

    export let segments: TimelineSegment[];
</script>

<div
    class="space-y-6 container mx-auto p-4 bg-slate-900/50 rounded-xl border border-slate-800"
>
    <div
        class="relative h-24 flex rounded-lg overflow-hidden border border-slate-700"
    >
        {#each segments as block}
            <div
                class="flex-1 h-full relative group border-r border-slate-800 last:border-0 transition-opacity hover:opacity-100 opacity-90"
            >
                <!-- Stacked Column -->
                <div class="w-full h-full flex flex-col">
                    {#if block.modeDistribution.aiSafety > 0}
                        <div
                            style="height: {block.modeDistribution.aiSafety}%"
                            class="bg-cyan-500/80 w-full"
                            title="AI Safety"
                        ></div>
                    {/if}
                    {#if block.modeDistribution.engineering > 0}
                        <div
                            style="height: {block.modeDistribution
                                .engineering}%"
                            class="bg-emerald-500/80 w-full"
                            title="Engineering"
                        ></div>
                    {/if}
                    {#if block.modeDistribution.career > 0}
                        <div
                            style="height: {block.modeDistribution.career}%"
                            class="bg-indigo-500/80 w-full"
                            title="Career"
                        ></div>
                    {/if}
                    {#if block.modeDistribution.creative > 0}
                        <div
                            style="height: {block.modeDistribution.creative}%"
                            class="bg-pink-500/80 w-full"
                            title="Creative"
                        ></div>
                    {/if}
                </div>

                <!-- Label Overlay -->
                <div
                    class="absolute inset-0 flex items-center justify-center p-2 text-center pointer-events-none"
                >
                    <span
                        class="bg-slate-950/80 text-white text-[10px] md:text-xs px-2 py-1 rounded backdrop-blur-sm opacity-60 group-hover:opacity-100 transition-opacity"
                    >
                        {block.label}
                    </span>
                </div>

                <!-- Tooltip -->
                <div
                    class="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-48 bg-slate-900 border border-slate-700 p-3 rounded shadow-xl opacity-0 group-hover:opacity-100 transition-opacity z-20 pointer-events-none"
                >
                    <div class="text-xs font-bold text-white mb-1">
                        {block.label}
                    </div>
                    <div class="text-xs text-slate-400 mb-2">
                        {block.description}
                    </div>
                    <div class="flex gap-2 text-[10px]">
                        <span class="text-cyan-400"
                            >Safety: {block.modeDistribution.aiSafety}%</span
                        >
                        <span class="text-emerald-400"
                            >Eng: {block.modeDistribution.engineering}%</span
                        >
                    </div>
                </div>
            </div>
        {/each}
    </div>

    <div class="flex justify-center gap-4 text-xs">
        <div class="flex items-center gap-1">
            <div class="w-3 h-3 bg-cyan-500 rounded-sm"></div>
             AI Safety
        </div>
        <div class="flex items-center gap-1">
            <div class="w-3 h-3 bg-emerald-500 rounded-sm"></div>
             Engineering
        </div>
        <div class="flex items-center gap-1">
            <div class="w-3 h-3 bg-indigo-500 rounded-sm"></div>
             Career
        </div>
        <div class="flex items-center gap-1">
            <div class="w-3 h-3 bg-pink-500 rounded-sm"></div>
             Creative
        </div>
    </div>
</div>
