<script lang="ts">
    import { onMount } from "svelte";
    import { Sun, Moon } from "lucide-svelte";

    let dark = true;

    onMount(() => {
        // Check localStorage or system preference
        if (localStorage.theme === "light") {
            dark = false;
        } else {
            dark = true;
        }
    });

    $: if (typeof document !== "undefined") {
        if (dark) {
            document.documentElement.classList.add("dark");
            localStorage.theme = "dark";
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
        }
    }

    function toggleTheme() {
        dark = !dark;
    }
</script>

<div
    class="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300"
>
    <div class="max-w-5xl mx-auto px-4 py-8">
        <nav class="flex justify-between items-center mb-8">
            <div
                class="text-sm font-mono text-slate-500 uppercase tracking-widest"
            >
                Mission Control // v2.0
            </div>
            <button
                on:click={toggleTheme}
                class="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                aria-label="Toggle Theme"
            >
                {#if dark}
                    <Sun class="w-5 h-5 text-amber-400" />
                {:else}
                    <Moon class="w-5 h-5 text-slate-400" />
                {/if}
            </button>
        </nav>
        <slot />
        <footer
            class="mt-20 pt-8 border-t border-slate-200 dark:border-slate-800 text-center text-sm text-slate-500"
        >
            <p>Built with Svelte + Tailwind + ChatGPT Vibes</p>
        </footer>
    </div>
</div>
