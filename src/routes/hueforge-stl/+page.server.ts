import { createRequire } from 'module'
import type { Actions } from './$types'

const require = createRequire(import.meta.url)
const { deserialize } = require('@jscad/stl-deserializer')
const { serialize } = require('@jscad/3mf-serializer')

export const actions: Actions = {
	default: async ({ request }) => {
		const form = await request.formData()
		const file = form.get('stl')
		const dataString = form.get('data')
		if (!(file instanceof File) || typeof dataString !== 'string') {
			return new Response('Invalid input', { status: 400 })
		}
		const buffer = Buffer.from(await file.arrayBuffer())
		const geometry = deserialize({ output: 'geometry', addMetaData: false }, buffer)
		geometry.forEach((g: any) => g && (g.name = dataString))
		const [model] = serialize({}, geometry)
		return new Response(model, {
			headers: {
				'Content-Type': 'model/3mf',
				'Content-Disposition': 'attachment; filename="output.3mf"'
			}
		})
	}
}
