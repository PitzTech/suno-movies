import React, { createContext, useState, useEffect, useCallback } from "react"

// Services

import conn from "../services/connection"
import { indicator } from "../services/requests"

// Types

import { Movie } from "../types/movies"
import { MoviesContextProps } from "../types/context"

const MoviesContext = createContext<MoviesContextProps>({})

export const MoviesContextProvider: React.FC = ({ children }) => {
	const [featuredMovies, setFeaturedMovies] = useState<Movie[]>([])

	const FetchFeaturedMovies = useCallback(() => {
		conn.get(indicator.trending.url).then(response => {
			setFeaturedMovies(response.data.results)
		})
	}, [])

	useEffect(() => {
		FetchFeaturedMovies()
		console.log(featuredMovies)
	}, [FetchFeaturedMovies])

	return (
		<MoviesContext.Provider value={{ featuredMovies }}>
			{children}
		</MoviesContext.Provider>
	)
}

export default MoviesContext
