<script lang="ts">
import 'chota';
import 'reflect-metadata';
import Navbar from '$lib/components/Navbar.svelte';
let { children } = $props();
</script>

<Navbar />

<main>
  {@render children()}
</main>

<style>
  /* TODO: create theme */
  :global(:root) {
    color-scheme: light dark;
    --bg-color: light-dark(#fff, #000);
    --bg-secondary-color: light-dark(#000, #fff);
    --color-primary: #14854F;
    --color-lightGrey: #d2d6dd;
    --color-grey: #747681;
    --color-darkGrey: #3f4144;
    --color-error: #d43939;
    --color-success: #28bd14;
    --grid-maxWidth: 120rem;
    --grid-gutter: 2rem;
    --font-size: 1.6rem;
    --font-color: light-dark(#333, #ccc);
    --font-family-sans: sans-serif;
    --font-family-mono: monaco, "Consolas", "Lucida Console", monospace;
  }

  main {
    padding: 2rem;
  }
</style>
