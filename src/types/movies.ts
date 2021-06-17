export interface Movie {
	id: number
	title: string
	original_title: string
	poster_path: string
	overview: string
	genre_ids: number[]
	backdrop_path: string
	vote_average: number
	number_of_seasons?: number
	first_air_date?: string
}
