<script lang="ts">
  import AppLayout from "./lib/components/AppLayout.svelte";
  import Hero from "./lib/components/Hero.svelte";
  import FiltersBar from "./lib/components/FiltersBar.svelte";
  import WrappedSummary from "./lib/components/WrappedSummary.svelte";
  import SectionCard from "./lib/components/SectionCard.svelte";
  import TimelineBar from "./lib/components/TimelineBar.svelte";
  import GuidedTourOverlay from "./lib/components/GuidedTourOverlay.svelte";

  import {
    sections,
    heroData,
    wrappedSummary,
    timelineSegments,
  } from "./lib/data";
  import type { ModeCategory } from "./lib/types";
  import { onMount } from "svelte";

  let searchTerm = "";
  let activeCategory: ModeCategory | "all" = "all";
  let detailed = false;

  $: filteredSections = sections.filter((section) => {
    // 1. Category Filter
    if (activeCategory !== "all" && section.category !== activeCategory) {
      return false;
    }

    // 2. Search Filter
    if (searchTerm.trim()) {
      const query = searchTerm.toLowerCase();
      const matchTitle = section.title.toLowerCase().includes(query);
      const matchSubtitle = section.subtitle.toLowerCase().includes(query);
      const matchTags = section.tags.some((tag) =>
        tag.toLowerCase().includes(query),
      );
      const matchBullets =
        section.highlightBullets?.some((b) =>
          b.toLowerCase().includes(query),
        ) || false;
      const matchContent =
        section.contentBlocks?.some(
          (block) =>
            block.title?.toLowerCase().includes(query) ||
            block.bullets.some((b) => b.toLowerCase().includes(query)),
        ) || false;

      return (
        matchTitle || matchSubtitle || matchTags || matchBullets || matchContent
      );
    }

    return true;
  });
</script>

<AppLayout>
  <Hero data={heroData} />

  <FiltersBar bind:searchTerm bind:activeCategory bind:detailed />

  <WrappedSummary data={wrappedSummary} />

  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
    {#each filteredSections as section (section.id)}
      <div class="animate-in fade-in zoom-in-95 duration-500">
        <SectionCard {section} {detailed} />
      </div>
    {/each}
  </div>

  <div class="mb-16">
    <h3
      class="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-200 to-slate-400 mb-6 flex items-center gap-2"
    >
      <span class="w-2 h-8 bg-cyan-500 rounded-full"></span>
      2025 Timeline
    </h3>
    <TimelineBar segments={timelineSegments} />
  </div>

  <GuidedTourOverlay />
</AppLayout>

<style>
  :global(.dark) {
    color-scheme: dark;
  }
</style>
