<script lang="ts">
	import type { SubmitFunction } from '@sveltejs/kit'
	import { enhance } from '$app/forms'
	import { socials } from '$lib/utils/socials'
	import Icon from '@iconify/svelte'

  export let form

  let tryingToSendEmail = false

  const sendEmail: SubmitFunction = () => { 
    tryingToSendEmail = true
    return async (test) => {
      tryingToSendEmail = false
      await test.update()
    }
  }
</script>

<div class="flex flex-col gap-4 w-ful">
	<h1 class="text-3xl font-bold">Contato</h1>
	<div class="flex w-full" />

	<article class="flex gap-6 border-opacity-50 rounded-lg w-full">
		<section class="flex flex-col gap-4 w-1/2">
			<h2
				class="grid h-20 flex-grow card bg-base-300 rounded-md place-items-center text-lg font-semibold"
			>
				Rede sociais
			</h2>

			<ul class="menu gap-8 h-full">
        {#each Object.values(socials) as social}
          <li>
            <a
              rel="external"
              class="card gap-4 p-4 text-base hover:text-[{social.color}]"
              href={social.url}
              target="_blank"
            >
              <Icon icon={social.icon} class="w-8 h-8" />
              {social.label}
            </a>
          </li>
        {/each}
			</ul>
		</section>

		<div class="divider divider-horizontal">OU</div>

		<section class="flex flex-col gap-4 w-1/2">
			<h2
				class="grid h-20 flex-grow card bg-base-300 rounded-md place-items-center text-lg font-semibold"
			>
				E-mail
			</h2>

			<form method="POST" use:enhance={sendEmail} class="flex flex-col gap-4 h-full">
				<div class="form-control w-full">
					<label for="#user_name" class="label">Nome:</label>
					<input
						type="text"
						id="user_name"
						name="name"
						placeholder="Seu nome"
						class="input input-bordered w-full"
            class:input-error={form?.errors?.name?.length}
					/>
				</div>

				<div class="form-control w-full">
					<label for="#user_email" class="label">E-mail:</label>
					<input
						type="text"
						id="user_email"
						name="email"
						placeholder="Seu melhor e-mail"
						class="input input-bordered w-full"
            class:input-error={form?.errors?.email?.length}
					/>
				</div>

				<div class="form-control w-full">
					<label for="#user_phone" class="label">Telefone:</label>
					<input
						type="phone"
						id="user_phone"
            name="phone"
						placeholder="(11) 99999-9999"
						class="input input-bordered w-full"
            class:input-error={form?.errors?.phone?.length}
					/>
				</div>

        <button type="submit" class="btn btn-primary mt-8" class:btn-success={form?.success}> 
          {#if tryingToSendEmail}
            <span class="loading loading-dots"></span>
            Enviando
          {:else if form?.success}
            <Icon icon="mdi:success" />
            Enviado
          {:else}
            Enviar
          {/if}
        </button>
			</form>
		</section>
	</article>
</div>
