import { Movie } from "../types/movies"

export function limitText(text: string, limit: number): string {
	let formatedText = text.slice(0, limit)

	// Case have more than 1 word
	if (formatedText.includes(" ")) {
		//remove Broken Words
		formatedText = formatedText.slice(
			0,
			Math.min(formatedText.length, formatedText.lastIndexOf(" "))
		)
		formatedText += "..."
	}

	return formatedText
}

export function shuffle(arr: Array<any>): Array<any> {
	//Fisher-Yates Algorithm
	for (let i = arr.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1))
		const temp = arr[i]
		arr[i] = arr[j]
		arr[j] = temp
	}
	return arr
}

export function convertToArray(arr: Array<any>): Array<any> {
	return arr
}
