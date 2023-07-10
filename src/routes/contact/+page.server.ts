import { fail } from '@sveltejs/kit'
import { zfd } from 'zod-form-data'
import { z } from 'zod'
import { validate } from '$lib/utils/validate.js'
import { sleep } from '$lib/utils/sleep.js'

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData()

		const schema = zfd.formData({
			name: zfd.text(z.string()),
			email: zfd.text(z.string().email('Email inválido')),
			phone: zfd.text(z.string().optional())
		})

		const result = validate(formData, schema)

		await sleep(2000)

		if (!result.success) {
			const data = {
				data: Object.fromEntries(formData),
				errors: result.error.flatten().fieldErrors
			}
			return fail(400, data)
		}

		return { success: true }
	}
}
