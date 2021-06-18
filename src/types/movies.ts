export interface Movie {
	id: number
	title: string
	original_title: string
	poster_path: string
	overview: string
	genre_ids: number[]
	genres: {
		id: number
		name: string
	}[]
	backdrop_path: string
	vote_average: number
	number_of_seasons?: number
	first_air_date?: string
}

export interface MovieTrailer {
	id: string
	key: string
	title: string
}
