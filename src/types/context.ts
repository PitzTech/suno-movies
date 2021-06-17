import { Movie } from "./movies"

export interface MoviesContextProps {
	featuredMovies?: Movie[]
	categories?: {
		id: number
		name: string
	}[]
}
