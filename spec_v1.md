# ChamGPT Wrapped 2025 – Alignment Mission Control  
_spec.md_

## 1. Product Summary

A single-page “year in review” web app that visualizes how **Cham** used ChatGPT in 2025:

- As an **AI safety / alignment lab**
- As a **full-stack / infra firefighter**
- As a **career transition coach**
- As a **meta-thinking + planning assistant**

Tone: playful, self-aware, slightly “mission control / ops console”–themed, but grounded and readable.

Single React page, mostly static data for now (hardcoded or simple JSON), styled with Tailwind, animated with Framer Motion, icons via lucide-react.

---

## 2. Target User & Use Cases

**User:**  
Cham – AI-safety-obsessed, full-stack dev, operates multiple client projects, doing career pivot into mech interp & governance / alignment infra. Heavy ChatGPT power-user.

**Primary use case:**

- Open page and get a nicely structured, slightly cheeky reflection of 2025:
  - “What did I actually use ChatGPT for?”
  - “What patterns / strengths does that reveal?”
  - “What does this suggest for 2026?”

No auth, no backend required initially. Everything can be local/static.

---

## 3. High-Level Structure

Single page layout with:

1. **Hero Section (Top)**
2. **Section 1: Alignment & AI Safety Deep Dives**
3. **Section 2: Shipping & Systems – Full-Stack Firefighter**
4. **Section 3: Career Arc – From Shipping Apps to Saving the World**
5. **Section 4: Superpowers & Signature Moves**
6. **Section 5: 2026 Forecast & Recommendations**
7. Optional **Footer** with credits / “Built with ChatGPT + vibes”.

Global elements:

- Top bar: Title, small filter/search control.
- Reusable “Card” components for each section.
- Small “Wrapped Summary” block somewhere (e.g., right below hero).
- Optional guided tour overlay highlighting sections.

---

## 4. Content & Sections

### 4.1 Hero Section: Alignment Mission Control

**Title:**
- `ChamGPT Wrapped 2025: Alignment Mission Control`

**Subtitle / Hero summary line (example):**
- Line 1: `You turned ChatGPT into your alignment lab, debugging console, and life storyboard.`
- Line 2: `From mechanistic interpretability deep dives to WordPress fires and fellowship interviews, 2025 was quiet main-character training for alignment work.`

**Elements:**

- Big title + subtitle.
- Small pill row:
  - `AI Safety • Mech Interp`
  - `Full-Stack Dev`
  - `Career Pivot`
  - `Power User`
- Tiny stats row (rough, not accurate, just vibes):
  - “~60% AI safety / interpretability / governance chats”
  - “Multi-stack: Web • iOS • Android • Infra”
  - “Fellowships engaged: AISafety Camp • Autostructures • ARBOx • BlueDot”

---

### 4.2 Section 1 – Alignment & AI Safety Deep Dives

Card title: `Alignment & AI Safety Deep Dives`  
Card subtitle: `Turning late-night LessWrong posts and papers into tools, forecasts, and interview-ready arguments.`

**Content ideas:**

- Chips / tags:
  - `mechanistic interpretability`
  - `logit lens`
  - `incident forecasting`
  - `instrumental convergence`
  - `s-risks & x-risks`
  - `governance infrastructure`
  - `AI pause & policy`
- Mini stats (purely illustrative):
  - “Safety-related sessions: 40–60% of ChatGPT use”
  - “Custom tools explored: misalignment-risk calculator, Cham-GPT, forecasting models”
  - “Key domains: GPT-2 circuits, hallucination risk, governance protocols”
- Small bullet “highlights” block:
  - Wrote accessible metaphors (e.g., logit lens as “live photos” of the model’s thoughts).
  - Built or outlined tools (risk calculators, dashboards, incident modeling).
  - Prepared for debates and interviews by probing assumptions and community consensus.
- Mini “insight” line:
  - `You treated ChatGPT like a lab notebook, critic, and simulator for alignment-relevant thinking.`

---

### 4.3 Section 2 – Shipping & Systems: Full-Stack Firefighter

Card title: `Shipping & Systems – Full-Stack Firefighter`  
Card subtitle: `When something breaks in prod, ChatGPT becomes your senior engineer who never sleeps.`

**Content:**

- Tags:
  - `Angular & Azure`
  - `Swift / iOS`
  - `Kotlin / Android`
  - `WordPress / WooCommerce`
  - `MySQL & cPanel`
  - `AWS / S3 / Cognito`
  - `Networking & servers`
- Possible stat-like items:
  - “Production issues triaged: Many (email loops, DB timeouts, WooCommerce weirdness, staging DBs, SSH tunneling, etc.)”
  - “Stack breadth: Web • Mobile • Infra • Payments”
  - “Typical pattern: turn vague client ‘something’s wrong’ into clear hypotheses + debugging plan.”
- “Signature Moves” list (local to this card):
  - Turning chaotic client reports into precise bullet-point root cause analyses.
  - Asking “what is safe to tell the client?” and crafting clear status emails.
  - Using ChatGPT for translations between stack layers (logs → mental models → concrete fixes).

---

### 4.4 Section 3 – Career Arc: From Shipping Apps to Saving the World

Card title: `Career Arc – From Shipping Apps to Saving the World`  
Card subtitle: `Physics → full-stack engineer → mechanistic interpretability & governance.`

**Content:**

- Timeline bullets (loose, not strict months):
  - `Early 2025:` Heavy focus on client apps, infra, and platform glue (Angular, Azure, WordPress, MySQL, iOS/Android).
  - `Mid 2025:` Increasing AI-safety reading, mech interp deep dives, incident modeling.
  - `Late 2025:` Intense interview prep (AISafety Camp, Autostructures, ARBOx/BlueDot), governance protocols, AI agents and blueprints.
- Chips:
  - `AISafety Camp`
  - `MeaningStack / Blueprints`
  - `Autostructures`
  - `ARBOx / OAISI`
  - `BlueDot AGI Strategy`
  - `fellowship prep`
  - `mock interviews`
- Little list of ways ChatGPT helped:
  - Simulating interviewers for AI safety, mech interp, and interface design.
  - Drafting and refining application answers, statements, and “why AI safety?” narratives.
  - Clarifying whether views are “just you” or shared by the alignment community.

---

### 4.5 Section 4 – Superpowers & Signature Moves

Card title: `Superpowers & Signature Moves`  
Card subtitle: `Your recurring patterns when you use ChatGPT – aka how Cham operates.`

**Sub-cards inside this section (each with icon, title, 2–3 bullets):**

1. **Systemization & Structure**
   - Uses “flexible outcomes” (minimum/target/stretch).
   - Builds Kanban boards, Notion tables, timelines.
   - Turns vague tasks into structured checklists without losing the vibe.

2. **Multi-Project Juggler**
   - Manages multiple client projects, infra tasks, hacks, and research sprints at once.
   - Uses ChatGPT as memory extender and context restorer across projects.
   - Comfortable hopping between stacks and domains quickly.

3. **Research Translator**
   - Asks questions like “is this actually community consensus?”.
   - Summarizes complex papers and posts into intuitive metaphors.
   - Integrates theoretical stuff with practical tools (e.g., risk calculators).

4. **Honest Introspection**
   - Actively looks for hidden assumptions in own arguments.
   - Asks for adversarial takes on positions (“is this fair?”, “where is this wrong?”).
   - Uses ChatGPT as a mirror for epistemic hygiene, not just cheerleader.

Each superpower can have chips like `planning`, `alignment-brain`, `debugging reality`, `meta`.

---

### 4.6 Section 5 – 2026 Forecast & Recommendations

Card title: `2026 Forecast & Recommendations`  
Card subtitle: `If 2025 was setup, 2026 is execution.`

**Content:**

- “Predictions” list:
  - You run at least one **substantial mech-interp or governance-infra project** with public outputs (blog, repo, or tool).
  - You become an informal “alignment infra and debugging person” for people around you.
  - You get at least one **fellowship / camp / structured program** that meaningfully levels you up.

- “Recommendations” list:
  - Ship one **flagship interpretability or governance tool** (even if small) and show it publicly.
  - Maintain a **weekly AI-safety synthesis note** (what you learned, where your views shifted).
  - Use ChatGPT as “adversarial reviewer” in addition to collaborator: have it attack your arguments/designs.
  - Do one **monthly “alignment dashboard” review** of your own goals, projects, and readings.

- Tag pills:
  - `2026`
  - `mechanistic interpretability`
  - `governance protocols`
  - `fellowships`
  - `public artifacts`

- A small “Closing line”:
  - `2025 was you wiring up the lab. 2026 is when you start running bigger experiments.`

---

## 5. Layout & Components

### 5.1 Page Layout

- Root container: max-width center, padding, dark background.
- Vertical stack:
  1. Top navigation / header.
  2. Hero section.
  3. Global filters/search.
  4. Section cards grid (1–2 cols depending on screen).
  5. Footer.

### 5.2 Core Components (conceptual)

You can vibe implementation, but rough idea:

- `<AppLayout>` – wraps everything, sets background and typography.
- `<Hero />`
- `<FiltersBar />`
  - Search input (filters visible section titles or card text).
  - Filter chips by category: `All`, `AI Safety`, `Engineering`, `Career`, `Superpowers`, `2026`.
- `<SectionCard />`
  - Props: `title`, `subtitle`, `icon`, `tags[]`, `children`.
- `<StatPill />`
  - Props: `label`, `value` (optional), `tone ('neutral' | 'good' | 'highlight')`.
- `<TagChip />`
  - Small, pill-style tags (for topics/skills).
- `<MiniProgress />` (optional)
  - Props: `label`, `percent`, maybe `caption`.
- `<WrappedSummary />`
  - Small summary block near hero summarizing the entire page in 2–3 lines.
- `<GuidedTourOverlay />`
  - Simple overlay with step-by-step hints.

Use Tailwind for spacing, grid, fonts; lucide-react icons for little visual anchors (lab flask, server, rocket, brain, etc.). Use Framer Motion for fade/slide in cards, slight hover scale.

---

## 6. Data Model (Static)

You can hardcode an object like:

```ts
type Tag = string;

type Stat = {
  label: string;
  value?: string;
  description?: string;
};

type Section = {
  id: string;
  title: string;
  subtitle: string;
  category: 'ai-safety' | 'engineering' | 'career' | 'superpowers' | 'forecast';
  tags: Tag[];
  stats?: Stat[];
  highlightBullets?: string[];
  contentBlocks?: {
    title?: string;
    bullets: string[];
  }[];
};
```

Then define an array `sections: Section[]` with the 5 sections above.  
Filter/search just operate on this array.

---

## 7. Interactions & Behavior

- **Search bar:**
  - Filters section cards by matching query in `title`, `subtitle`, `tags`, or bullet text.
- **Filter chips:**
  - Toggle category filter; `All` resets.
- **Guided tour:**
  - Simple boolean `showTour`.
  - When enabled, overlay dims background.
  - Steps:
    1. Highlight hero – text: “Start: Your 2025 in one glance.”
    2. Highlight AI Safety section – “Your alignment lab.”
    3. Highlight Shipping & Systems – “Your full-stack firefighter mode.”
    4. Highlight 2026 Forecast – “Where this seems to be going.”
  - “Next”, “Skip”, “Done” buttons.

- **Animation ideas:**
  - Page load: hero and sections fade/slide in.
  - Hover on cards: gentle scale + shadow.
  - Tag chips: tiny hover lift.

---

## 8. Visual & Theming Notes

- **Color palette (loose):**
  - Background: dark slate / charcoal.
  - Primary accent: alignment green / cyan.
  - Secondary: amber / orange for “warnings / forecasts”.
  - Neutral cards: slightly lighter dark with soft border.

- **Typography:**
  - Hero title: large, bold.
  - Section titles: medium-large font, semibold.
  - Body: comfortable reading, distinct from tags.

- **Vibe keywords:**
  - “Mission control”
  - “Research lab”
  - “Ops dashboard”
  - “Wrapped / celebratory”

---

## 9. Future Extensions (Optional)

You don’t have to build this now, but design spec should be compatible:

- Pull real stats from ChatGPT exports or a JSON file.
- Allow switching between years (2024, 2025, 2026…).
- Export as PDF or image.
- Add “edit mode” to tweak text or stats without touching code.

---

## 10. Done / Success Criteria

- Single-page React app renders:
  - Hero + summary
  - 5 main sections with specific content described above
  - Search + filters that actually affect visible sections
  - Light animations + icons
  - Optional guided tour overlay
- The copy throughout feels:
  - Personal to Cham (AI safety, mech interp, infra firefighting, career pivot)
  - Informal but not cringe
  - “Year in review” + “mission control” blend
