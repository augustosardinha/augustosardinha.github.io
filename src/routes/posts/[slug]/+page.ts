export async function load({ params }) {
	const post = await import(`../${params.slug}.md`)
	const content = post.default
	const { title, description } = post.metadata

	return {
		content,
		title,
		description
	}
}
