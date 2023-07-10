<script lang="ts">
	import { goto } from '$app/navigation'
	import { page } from '$app/stores'
	import Icon from '@iconify/svelte'

	const goToHomePage = () => {
		if ($page.url.pathname === '/') return

		return goto('/')
	}
</script>

<button on:click={goToHomePage} class="self-start">
	<pre class="flex gap-2 items-center text-lg bg-base-200 p-1"> 
    <Icon icon="fe:arrow-right" />
    <code
			class="border-b border-b-neutral-400 text-neutral-400 hover:border-b-neutral-100 hover:text-neutral-200 transition-colors duration-300"
			>cd..</code
		>
  </pre>
</button>
