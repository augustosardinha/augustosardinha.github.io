import type { Schema } from 'zod'

export const validate = (formData: FormData, schema: Schema) => {
	return schema.safeParse(formData)
}
