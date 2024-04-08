<script>
  import Logo from './logo.svelte';
</script>

<main class="container px-8 sm:mx-auto">
  <p class="mt-40 sm:mt-60">hey, I'm</p>
  <Logo class="mt-2 w-4/5" />
  <!-- <h1 class="text-6xl font-bold sm:text-8xl">Raymond</h1> -->
  <h2 class="mt-2 text-2xl">& this page is ~under construction~</h2>
  <ul class="mt-4 flex flex-row gap-x-4">
    <li>
      <a class="hover:underline hover:underline-offset-4" href="mailto:r@ymond.wang" target="_blank"
        >Email</a
      >
    </li>
    <li>
      <a
        class="hover:underline hover:underline-offset-4"
        href="https://github.com/raymondwang"
        target="_blank">GitHub</a
      >
    </li>
    <li>
      <a
        class="hover:underline hover:underline-offset-4"
        href="https://www.linkedin.com/in/raymondruiwang"
        target="_blank">LinkedIn</a
      >
    </li>
  </ul>
</main>
