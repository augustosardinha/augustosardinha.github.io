<script lang="ts">
	import { page } from '$app/stores'
</script>

<div class="flex flex-col gap-4 items-center">
	<h1 class="text-[100px] font-bold">{'404'}</h1>

	<div class="mockup-code">
		<pre data-prefix="1"><code>Acessando {$page.url.pathname}</code></pre>
		<pre data-prefix="2" class="bg-warning text-warning-content"><code>Error!</code></pre>
		<pre />
		<pre data-prefix=">" class="text-warning"><code>Essa rota não foi encontrada!</code></pre>
	</div>
</div>
