import React, { createContext, useState, useEffect, useCallback } from "react"

// Utils

import { solveParams } from "../utils/requestSolver"

// Services

import conn from "../services/connection"
import { indicator } from "../services/requests"

// Types

import { Movie } from "../types/movies"
import { MoviesContextProps, SearchProps } from "../types/context"

const MoviesContext = createContext({} as MoviesContextProps)

export const MoviesContextProvider: React.FC = ({ children }) => {
	const [featuredMovies, setFeaturedMovies] = useState<Movie[]>([])
	const [catalogueMovies, setCatalogueMovies] = useState<Movie[]>([])
	const [cataloguePage, setCataloguePage] = useState(1)
	const [search, setSearch] = useState("")
	const [searchResults, setSearchResults] = useState<SearchProps[]>([])

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

	function nextPage(): void {
		setCataloguePage(oldValue => oldValue + 1)
	}

	const handleNextPage = useCallback(page => {
		conn.get(solveParams(`/discover/movie?page=${page}`)).then(response => {
			setCatalogueMovies(oldValue => [...oldValue, ...response.data.results])
		})
	}, [])

	useEffect(() => {
		FetchMovies()
	}, [FetchMovies])

	useEffect(() => {
		conn.get(solveParams(`/search/movie?query=${search}&page=1`)).then(response => {
			setSearchResults(response.data.results)
		})
	}, [search])

	useEffect(() => handleNextPage(cataloguePage), [cataloguePage, handleNextPage])

	return (
		<MoviesContext.Provider
			value={{
				featuredMovies,
				catalogueMovies,
				search,
				setSearch,
				searchResults,
				nextPage
			}}
		>
			{children}
		</MoviesContext.Provider>
	)
}

export default MoviesContext
