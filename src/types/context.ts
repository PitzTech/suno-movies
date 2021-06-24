import React from "react"
import { Movie } from "./movies"

export interface SearchProps {
	id: number
	poster_path: string
	title: string
	genre_ids?: Array<number>
	vote_average: string
}
export interface MoviesContextProps {
	featuredMovies?: Movie[]
	categories?: {
		id: number
		name: string
	}[]
	catalogueMovies?: Movie[]
	search?: string
	setSearch: React.Dispatch<string>
	searchResults: SearchProps[]
}
