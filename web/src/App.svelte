<script lang="ts">
  import Layout from "./lib/components/Layout.svelte";
  import Hero from "./lib/components/Hero.svelte";
  import FiltersBar from "./lib/components/FiltersBar.svelte";
  import SectionCard from "./lib/components/SectionCard.svelte";
  import Footer from "./lib/components/Footer.svelte";
  import GuidedTourOverlay from "./lib/components/GuidedTourOverlay.svelte";
  import { sections } from "./lib/data";
  import { onMount } from "svelte";

  let searchQuery = "";
  let selectedCategory = "All";
  let showTour = false;

  // Simulate "first visit" for tour
  onMount(() => {
    const hasSeenTour = localStorage.getItem("chamgpt_wrapped_tour_seen");
    if (!hasSeenTour) {
      // Small delay for effect
      setTimeout(() => (showTour = true), 1000);
    }
  });

  function closeTour() {
    showTour = false;
    localStorage.setItem("chamgpt_wrapped_tour_seen", "true");
  }

  // Filter Logic
  $: filteredSections = sections.filter((section) => {
    // 1. Category Filter
    if (selectedCategory !== "All" && section.category !== selectedCategory) {
      return false;
    }

    // 2. Search Filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = section.title.toLowerCase().includes(q);
      const matchSubtitle = section.subtitle.toLowerCase().includes(q);
      const matchTags = section.tags.some((t) => t.toLowerCase().includes(q));

      // Deep search in bullets
      const matchBullets = section.highlightBullets?.some((b) =>
        b.toLowerCase().includes(q),
      );
      const matchContent = section.contentBlocks?.some((block) =>
        block.bullets.some((b) => b.toLowerCase().includes(q)),
      );
      const matchSubCards = section.subCards?.some(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          c.bullets.some((b) => b.toLowerCase().includes(q)),
      );

      return (
        matchTitle ||
        matchSubtitle ||
        matchTags ||
        matchBullets ||
        matchContent ||
        matchSubCards
      );
    }

    return true;
  });
</script>

<Layout>
  <div class="relative">
    <Hero />

    <FiltersBar bind:searchQuery bind:selectedCategory />

    <main class="max-w-4xl mx-auto px-4 space-y-6 min-h-[50vh]">
      {#each filteredSections as section (section.id)}
        <SectionCard {section} />
      {:else}
        <div class="text-center py-20 text-slate-500">
          <p>No mission logs found matching criteria.</p>
          <button
            class="mt-4 text-cyan-400 hover:text-cyan-300 underline underline-offset-4"
            on:click={() => {
              searchQuery = "";
              selectedCategory = "All";
            }}
          >
            Clear filters
          </button>
        </div>
      {/each}
    </main>

    <Footer />

    <GuidedTourOverlay show={showTour} onClose={closeTour} />

    <!-- Floating Fab to reopen tour (optional) -->
    <button
      class="fixed bottom-6 right-6 p-3 rounded-full bg-slate-800 text-slate-400 hover:text-cyan-400 border border-slate-700 hover:border-cyan-500/50 transition-all shadow-lg z-30"
      on:click={() => (showTour = true)}
      title="Replay Mission Briefing"
    >
      <span class="sr-only">Tour</span>
      ?
    </button>
  </div>
</Layout>
