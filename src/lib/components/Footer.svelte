<script lang="ts">
	import { socials } from '$lib/utils/socials'
	import Icon from '@iconify/svelte'
	import BackNavigation from '$lib/components/BackNavigation.svelte'
	import { page } from '$app/stores'

	let showBackNavigation = false

	$: if ($page.url.pathname !== '/') {
		showBackNavigation = true
	}
</script>

<div class="flex flex-col gap-6 mt-12">
	{#if showBackNavigation}
		<BackNavigation />
	{/if}

	<footer class="footer items-center p-4 bg-base-200 rounded text-neutral-content">
		<div class="items-center grid-flow-col">
			<Icon icon="akar-icons:hashtag" class="w-10 h-10" />
			<p>Copyright © {new Date().getFullYear()} - All right reserved</p>
		</div>
		<nav class="md:place-self-center md:justify-self-end">
			<ul data-sveltekit-reload role="list" class="grid grid-flow-col gap-4">
				<li>
					<a rel="external" href={socials.linkedin.url} target="_blank" title="LinkedIn" class="btn">
						<Icon icon={socials.linkedin.icon} class="w-6 h-6" />
					</a>
				</li>
				<li>
					<a rel="external" href={socials.github.url} target="_blank" title="Github" class="btn">
						<Icon icon={socials.github.icon} class="w-6 h-6" />
					</a>
				</li>
			</ul>
		</nav>
	</footer>
</div>
