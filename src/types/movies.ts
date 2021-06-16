export interface Genre {
	name: string
}
export interface Movie {
	id: number
	title: string
	original_title: string
	poster_path: string
	overview: string
	genres?: Genre[]
	backdrop_path: string
	vote_average: number
	number_of_seasons?: number
	first_air_date?: string
}

export interface MovieRequest {
	id: string
	title: string
	url: string
	movies?: Movie[]
}
export interface MovieRequestsList {
	// Movie Recommendation
	originals: MovieRequest
	trending: MovieRequest
	topRated: MovieRequest
	// Movie Categories
	action: MovieRequest
	comedy: MovieRequest
	horror: MovieRequest
	romance: MovieRequest
	documentary: MovieRequest
}
