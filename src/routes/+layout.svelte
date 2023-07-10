<script lang="ts">
	import '../app.postcss'
	import { blur } from 'svelte/transition'
	import NavBar from '$lib/components/NavBar.svelte'
	import Footer from '$lib/components/Footer.svelte'
	import Icon from '@iconify/svelte'

	export let data

	let scrollY: number
  
	const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

	$: showScrollToTop = scrollY > 300
</script>

<svelte:head>
	<meta name="author" content="Augusto Sardinha" />
	<meta name="revisit-after" content="7 days" />
	<meta http-equiv="X-UA-Compatible" content="chrome=1" />
</svelte:head>

<svelte:window bind:scrollY />

{#if showScrollToTop}
	<button
		title="Scroll to top"
		class="fixed right-3 bottom-3 btn btn-outline btn-circle z-100"
		on:click={scrollToTop}
	>
		<Icon icon="mingcute:up-line" class="w-6 h-6" />
	</button>
{/if}

<NavBar />

{#key data.url}
	<main
		class="container mx-auto"
		in:blur={{ duration: 300, delay: 300 }}
		out:blur={{ duration: 300 }}
	>
		<slot />
		<Footer />
	</main>
{/key}
