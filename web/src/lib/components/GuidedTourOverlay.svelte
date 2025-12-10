<script lang="ts">
    import { X, ChevronRight, ChevronLeft } from "lucide-svelte";
    import { onMount } from "svelte";
    import { fade } from "svelte/transition";

    export let show = false;

    let step = 0;

    const steps = [
        {
            title: "Welcome to Mission Control",
            text: "This is your 2025 in one glance. A dashboard of your alignment work, engineering fires, and life planning.",
        },
        {
            title: "Alignment Lab",
            text: "The cyan sections show where you spent your 'serious' cognitive energy: AI safety research and mechanistic interpretability.",
        },
        {
            title: "Full-Stack Ops",
            text: "Check 'Shipping & Systems' to see the projects you built and the fires you put out.",
        },
        {
            title: "Timeline",
            text: "Scroll down to see the timeline bar – visualizing the phases of your year.",
        },
        {
            title: "2026 Forecast",
            text: "Don't miss the predictions for next year at the bottom.",
        },
    ];

    function next() {
        if (step < steps.length - 1) step++;
        else close();
    }

    function prev() {
        if (step > 0) step--;
    }

    function close() {
        show = false;
        localStorage.setItem("tourSeen", "true");
    }

    onMount(() => {
        if (!localStorage.getItem("tourSeen")) {
            show = true;
        }
    });
</script>

{#if show}
    <div
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
        transition:fade
    >
        <div
            class="bg-slate-900 border border-slate-700 p-6 rounded-2xl max-w-md w-full shadow-2xl relative"
        >
            <button
                on:click={close}
                class="absolute top-4 right-4 text-slate-500 hover:text-white"
            >
                <X class="w-5 h-5" />
            </button>

            <div class="mb-6">
                <span
                    class="text-xs font-mono text-cyan-500 uppercase tracking-widest mb-2 block"
                    >Step {step + 1}/{steps.length}</span
                >
                <h3 class="text-2xl font-bold text-white mb-2">
                    {steps[step].title}
                </h3>
                <p class="text-slate-300">{steps[step].text}</p>
            </div>

            <div class="flex justify-between items-center mt-8">
                <button
                    on:click={prev}
                    class="flex items-center text-sm text-slate-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed px-3 py-2"
                    disabled={step === 0}
                >
                    <ChevronLeft class="w-4 h-4 mr-1" /> Back
                </button>

                <div class="flex gap-1">
                    {#each steps as _, i}
                        <div
                            class="w-2 h-2 rounded-full {i === step
                                ? 'bg-cyan-500'
                                : 'bg-slate-700'}"
                        ></div>
                    {/each}
                </div>

                <button
                    on:click={next}
                    class="flex items-center text-sm bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded-full font-medium transition-colors"
                >
                    {step === steps.length - 1 ? "Finish" : "Next"}
                    <ChevronRight class="w-4 h-4 ml-1" />
                </button>
            </div>
        </div>
    </div>
{/if}
