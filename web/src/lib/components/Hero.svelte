<script lang="ts">
    import { Terminal, Activity, Brain, Server } from "lucide-svelte";
</script>

<div
    class="relative pt-12 pb-10 bg-gradient-to-b from-slate-900 via-slate-900 to-transparent"
>
    <!-- Status Bar / Decor -->
    <div
        class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500/0 via-cyan-500/50 to-cyan-500/0"
    ></div>

    <div class="text-center space-y-6 max-w-2xl mx-auto px-4">
        <!-- Badge -->
        <div
            class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/30 border border-cyan-900/50 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-4"
        >
            <span class="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
            Mission Control Online
        </div>

        <!-- Titles -->
        <h1
            class="text-4xl md:text-6xl font-black tracking-tight text-white mb-2 selection:bg-cyan-500/30"
        >
            Chamod's ChatGPT <span
                class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400"
                >Wrapped</span
            >
        </h1>
        <div class="text-2xl font-light text-slate-400 tracking-wide">
            2025 Alignment Mission Control
        </div>

        <!-- Summary -->
        <p class="text-slate-400 text-lg leading-relaxed max-w-xl mx-auto">
            You turned ChatGPT into your alignment lab, debugging console, and
            life storyboard. From mech interp deep dives to infra firefighting.
        </p>

        <!-- Pills -->
        <div class="flex flex-wrap justify-center gap-3 mt-6">
            <div
                class="flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-800/50 border border-slate-700/50 text-slate-300 text-sm"
            >
                <Brain size={16} class="text-purple-400" />
                <span>AI Safety Lab</span>
            </div>
            <div
                class="flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-800/50 border border-slate-700/50 text-slate-300 text-sm"
            >
                <Terminal size={16} class="text-emerald-400" />
                <span>Full-Stack Ops</span>
            </div>
            <div
                class="flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-800/50 border border-slate-700/50 text-slate-300 text-sm"
            >
                <Activity size={16} class="text-orange-400" />
                <span>Career Pivot</span>
            </div>
        </div>
    </div>
</div>
