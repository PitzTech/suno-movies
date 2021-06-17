import React, { createContext, useState, useEffect, useCallback } from "react"

// Utils

import { solveParams } from "../utils/requestSolver"

// Services

import conn from "../services/connection"
import { indicator } from "../services/requests"

// Types

import { Movie } from "../types/movies"
import { MoviesContextProps } from "../types/context"

const MoviesContext = createContext<MoviesContextProps>({})

export const MoviesContextProvider: React.FC = ({ children }) => {
	const [featuredMovies, setFeaturedMovies] = useState<Movie[]>([])
	const [catalogueMovies, setCatalogueMovies] = useState<Movie[]>([])
	const [cataloguePage, setCataloguePage] = useState(1)

	const FetchMovies = useCallback(() => {
		// Featured
		conn.get(indicator.trending.url).then(response => {
			setFeaturedMovies(response.data.results)
		})
		// Catalogue
		conn.get(solveParams(`/discover/movie?page=${cataloguePage}`)).then(response => {
			setCatalogueMovies(response.data.results)
		})
	}, [])

	useEffect(() => {
		FetchMovies()
	}, [FetchMovies])

	return (
		<MoviesContext.Provider value={{ featuredMovies, catalogueMovies }}>
			{children}
		</MoviesContext.Provider>
	)
}

export default MoviesContext
