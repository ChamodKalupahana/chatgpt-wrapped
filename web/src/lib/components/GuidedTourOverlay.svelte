<script lang="ts">
    import { X, ArrowRight } from "lucide-svelte";
    import { fade, scale } from "svelte/transition";

    export let show = false;
    export let onClose: () => void;

    let step = 0;

    const steps = [
        {
            title: "Welcome to Mission Control",
            text: "This dashboard visualizes your 2025 activity.",
        },
        {
            title: "The Alignment Lab",
            text: "Where you spent time researching mech interp and safety.",
        },
        {
            title: "Full-Stack Firefighting",
            text: "How you kept shipping apps and fixing prod.",
        },
        {
            title: "2026 Forecast",
            text: "Where the trajectory is heading next year.",
        },
    ];

    function next() {
        if (step < steps.length - 1) {
            step++;
        } else {
            onClose();
        }
    }
</script>

{#if show}
    <div
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
        transition:fade={{ duration: 200 }}
    >
        <div
            class="w-full max-w-md bg-slate-800 border border-slate-700 rounded-xl overflow-hidden shadow-2xl relative"
            transition:scale={{ start: 0.95, duration: 200 }}
        >
            <!-- Close Button -->
            <button
                class="absolute top-4 right-4 text-slate-500 hover:text-white"
                on:click={onClose}
            >
                <X size={20} />
            </button>

            <!-- Progress -->
            <div class="h-1 bg-slate-700 w-full flex">
                {#each steps as _, i}
                    <div
                        class="h-full flex-1 transition-colors duration-300 {i <=
                        step
                            ? 'bg-cyan-500'
                            : 'bg-transparent'}"
                    ></div>
                {/each}
            </div>

            <!-- Content -->
            <div class="p-8 text-center space-y-4">
                <h3 class="text-xl font-bold text-white">
                    {steps[step].title}
                </h3>
                <p class="text-slate-400">{steps[step].text}</p>
            </div>

            <!-- Footer -->
            <div class="p-4 bg-slate-900/50 flex justify-between items-center">
                <button
                    class="text-sm text-slate-500 hover:text-slate-300 px-3 py-2"
                    on:click={onClose}
                >
                    Skip
                </button>
                <button
                    class="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded-md font-medium text-sm transition-colors"
                    on:click={next}
                >
                    {step === steps.length - 1 ? "Finish" : "Next"}
                    <ArrowRight size={16} />
                </button>
            </div>
        </div>
    </div>
{/if}
