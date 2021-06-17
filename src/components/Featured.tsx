import React, { useContext, useState, useRef, useLayoutEffect } from "react"
import { Link } from "react-router-dom"

import MoviesContext from "../context/MoviesContext"

// Utils

import { solvePosterUrl } from "../utils/requestSolver"
import { getCategoriesName } from "../utils/movieInfo"
import { limitText, shuffle } from "../utils/formatters"

// Visual

import { FeaturedElement, Carousel, MovieItem } from "../styles/components/Featured"
import { CentralDelimiter } from "../styles/containers"
import { FaCircle, FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa"
import { useEffect } from "react"

function Featured(): JSX.Element {
	const { featuredMovies } = useContext(MoviesContext)
	const [scrollSpeed, setScrollSpeed] = useState(0)

	// Horizontal Scroll Params

	useLayoutEffect(() => {
		setScrollSpeed(MOVIE_ROW.current?.clientWidth || 0)
	}, [])

	// REMOVE THIS LINE
	useEffect(() => console.log(featuredMovies))

	const MOVIE_ROW = useRef<HTMLDivElement>(null)
	const MOVIE_SIZE = 192
	//const SCROLL_SPEED = Math.round(MOVIE_ROW.current?.clientWidth || 0) //250
	const DEFAULT_SHIFT = 0

	const [scroll, setScroll] = useState(DEFAULT_SHIFT)

	// End Horizontal Scroll Params

	function handleHorizontalMenu(side: "left" | "right"): void {
		const LIST_LENGTH = (featuredMovies?.length || 0) * MOVIE_SIZE
		const ADITIONAL_BORDER = MOVIE_SIZE * 0.5

		if (side == "left" && scroll < 0) {
			setScroll(Math.min(0, scroll + scrollSpeed))
			return
		}
		if (side == "right" && scroll > window.innerWidth - LIST_LENGTH) {
			setScroll(
				Math.max(
					window.innerWidth - (LIST_LENGTH + ADITIONAL_BORDER),
					scroll - scrollSpeed
				)
			)
		}
	}

	return (
		<FeaturedElement>
			<CentralDelimiter className="centralLimiter">
				<h1>
					<FaCircle className="pink circle" />
					<b> LANÇAMENTOS</b> DA SEMANA
				</h1>
				<div className="leftArrow" onClick={() => handleHorizontalMenu("left")}>
					<FaChevronLeft />
				</div>
				<div className="rightArrow" onClick={() => handleHorizontalMenu("right")}>
					<FaChevronRight />
				</div>
				<Carousel>
					<div
						className="movieRow-List"
						ref={MOVIE_ROW}
						style={{ marginLeft: scroll }}
					>
						{shuffle(featuredMovies || []).map((movie, key) => (
							<MovieItem key={key}>
								<Link to={`/filme/${movie.id}`}>
									{/* {<div className="cover">{movie.title}</div>} */}
									<img
										src={solvePosterUrl(movie.poster_path, "w400")}
										alt={movie.title}
									/>
								</Link>
								<div className="info">
									<h2 className="infoTitle">{limitText(movie.title, 17)}</h2>
									<p className="categories pink">
										{getCategoriesName(movie.genre_ids, 2).join(", ")}
									</p>
									<div className="rating">
										<span className="starIcon pink">
											<FaStar />
										</span>
										<p>{movie.vote_average}</p>
									</div>
								</div>
							</MovieItem>
						))}
					</div>
				</Carousel>
			</CentralDelimiter>
		</FeaturedElement>
	)
}

export default Featured
