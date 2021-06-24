import React, { useState, useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import MoviesContext from "../context/MoviesContext"

// Services

import { categoryList } from "../services/requests"

// Utils

import { shuffle, limitText, convertToArray } from "../utils/formatters"
import { solvePosterUrl } from "../utils/requestSolver"
import { getCategoriesName } from "../utils/movieInfo"
import useViewport from "../utils/useViewport"

// Visual

import {
	CatalogueHeader,
	CatalogueElement,
	Button,
	GridButton,
	CatalogueMovies,
	MovieItem
} from "../styles/sections/Catalogue"
import GlobalContainerStyle, { CentralDelimiter } from "../styles/containers"

import { FaCircle, FaStar } from "react-icons/fa"
import { BsGridFill } from "react-icons/bs"
import { TiThList } from "react-icons/ti"

function Catalogue(): JSX.Element {
	const [isGrid, setIsGrid] = useState(true)
	const { catalogueMovies } = useContext(MoviesContext)
	const { screenWidth, mobileBreakPoint } = useViewport()

	const [filteredCategory, setFilteredCategory] = useState<number>(0)
	const [isFilterActive, setIsFilterActive] = useState(false)
	const [isOrderingPopular, setIsOrderingPopular] = useState(false)

	useEffect(() => {
		if (screenWidth < mobileBreakPoint) setIsGrid(false)
	}, [])

	function handleFilterCategory(category: string): void {
		if (category == "all") return setIsFilterActive(false)

		setIsFilterActive(true)
		setFilteredCategory(Number(category))
	}

	function handleOrderPopular(): void {
		setIsOrderingPopular(!isOrderingPopular)
	}

	// Custom Select Button

	function getCatalogueMovies(): JSX.Element[] {
		let moviesList = catalogueMovies || []

		if (isFilterActive) {
			moviesList = moviesList.filter(movie => {
				return movie.genre_ids.includes(filteredCategory)
			})
		}
		if (isOrderingPopular) {
			moviesList = moviesList.sort((fisrt, second) => {
				return second.vote_average - fisrt.vote_average
			})
		} else {
			// shuffle
			moviesList = shuffle(moviesList)
		}

		return convertToArray(moviesList).map(
			movie =>
				movie.poster_path && (
					<Link to={`/filme/${movie.id}`} key={movie.id}>
						<MovieItem isGrid={isGrid}>
							{/* {<div className="cover">{movie.title}</div>} */}
							<img
								src={solvePosterUrl(movie.poster_path, "w400")}
								alt={movie.title}
							/>

							<div className="info">
								<h2 className="infoTitle">
									{isGrid ? limitText(movie.title, 25) : movie.title}
								</h2>
								<p className="categories pink">
									{getCategoriesName(movie.genre_ids, 2).join(", ")}
								</p>
								<div className="rating">
									<span className="starIcon pink">
										<FaStar />
									</span>
									<p>{movie.vote_average}</p>
								</div>
								<p className="description">
									{limitText(movie.overview, isGrid ? 180 : 400)}
								</p>
							</div>
						</MovieItem>
					</Link>
				)
		)
	}

	return (
		<>
			<CatalogueHeader className="heading" id="catalogue">
				<CentralDelimiter className="centralDelimiter">
					<h1>
						<FaCircle className="pink circle" />
						<b> CATÁLOGO</b> COMPLETO
					</h1>
				</CentralDelimiter>
			</CatalogueHeader>
			<CatalogueElement>
				<CentralDelimiter className="centralDelimiter">
					<nav className="filters">
						<div className="leftAlign">
							<select
								onChange={el => handleFilterCategory(el.target.value)}
								placeholder="por gênero"
								defaultValue="placeholder"
							>
								<option value="placeholder" disabled>
									▼ por gênero
								</option>
								<option value="all">Todos</option>
								{categoryList.map(category => (
									<option key={category.id} value={category.id}>
										{category.name}
									</option>
								))}
							</select>

							<Button onClick={handleOrderPopular} isClicked={isOrderingPopular}>
								Mais Populares
							</Button>
						</div>
						{screenWidth > mobileBreakPoint && (
							<GridButton onClick={() => setIsGrid(!isGrid)}>
								{isGrid ? (
									<>
										<BsGridFill className="icon" /> Grid
									</>
								) : (
									<>
										<TiThList className="icon" /> Lista
									</>
								)}
							</GridButton>
						)}
					</nav>

					<CatalogueMovies isGrid={isGrid}>{getCatalogueMovies()}</CatalogueMovies>
				</CentralDelimiter>
			</CatalogueElement>
			<GlobalContainerStyle />
		</>
	)
}

export default Catalogue
