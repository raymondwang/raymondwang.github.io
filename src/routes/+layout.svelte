<script lang="ts">
  import '../app.css';
</script>

<svelte:head>
  <link rel="preload" as="font" href="/fonts/Satoshi-Variable.woff2" type="font/woff2" />
  <link rel="preload" as="font" href="/fonts/Erode-Variable.woff2" type="font/woff2" />

  <title>r@ymond.wang</title>
</svelte:head>

<!-- <header class="p-4">
  <nav class="flex justify-end gap-x-4">
    <a href="/">home</a>
    <a href="/now">now</a>
  </nav>
</header> -->

<slot />
