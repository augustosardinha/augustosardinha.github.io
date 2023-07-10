<script lang="ts">
	import Icon from '@iconify/svelte'

	const menuList = [
		{
			label: 'Projetos',
			url: '/projects'
		},
		{
			label: 'Tecnologias',
			url: '/technologies'
		},
		{
			label: 'Experiência',
			url: '/experience'
		}
	]

	const menuListMobile = [
		...menuList,
		{
			label: 'Contato',
			url: '/contact'
		}
	]
</script>

<header class="navbar bg-base-100 py-4 px-8">
	<div class="flex-1">
		<a href="/" class="flex items-center btn bg-base-100 normal-case text-xl">
			<Icon icon="ant-design:code-filled" class="w-10 h-10" />
			Augusto
		</a>
	</div>

	<div class="flex-none">
		<div class="dropdown md:hidden">
			<button class="btn btn-ghost btn-circle">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h7"
					/>
				</svg>
			</button>
			<ul class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
				{#each menuListMobile as menuListItem}
					<li>
						<a href={menuListItem.url} class="btn">{menuListItem.label}</a>
					</li>
				{/each}
			</ul>
		</div>

		<div class="hidden md:flex items-center space-x-4">
			<ul class="menu menu-horizontal text-lg">
				{#each menuList as menuListItem}
					<li>
						<a href={menuListItem.url}>{menuListItem.label}</a>
					</li>
				{/each}
			</ul>
			<a href="/contact" class="btn btn-primary btn-outline">Contato</a>
		</div>
	</div>

	<label class="swap swap-rotate ml-4">
		<input type="checkbox" />
		<Icon icon="ph:sun" class="swap-on w-6 h-6" />
		<Icon icon="ph:moon" class="swap-off w-6 h-6" />
	</label>
</header>
