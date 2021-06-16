import preferences, { auth } from "../services/preferences"

const paramPrefs = `&api_key=${auth.API_KEY}&language=${preferences.language}`

export function solveParams(params: string): string {
	const newUrl = params + paramPrefs

	return newUrl
}

export function solvePosterUrl(file_path: string, image_size: string): string {
	const base_url = "https://image.tmdb.org/t/p/"

	return `${base_url}${image_size}/${file_path}`
}
