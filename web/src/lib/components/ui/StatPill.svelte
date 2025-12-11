<script lang="ts">
    export let label: string;
    export let value: string | undefined = undefined;
    export let description: string | undefined = undefined;
</script>

<div
    class="flex flex-col bg-slate-800/50 border border-slate-700/50 rounded-md px-3 py-2 text-sm"
>
    <span class="text-slate-400 text-xs uppercase tracking-wider">{label}</span>
    {#if value}
        <span class="text-slate-100 font-bold font-mono mt-0.5">{value}</span>
    {/if}
    {#if description}
        <span class="text-slate-500 text-xs mt-1 leading-tight"
            >{description}</span
        >
    {/if}
</div>
