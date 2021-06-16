import React, { useContext, useState, useRef, useLayoutEffect } from "react"

import MoviesContext from "../context/MoviesContext"
import { solvePosterUrl } from "../utils/requestSolver"

// Visual

import { FeaturedElement, Carousel } from "../styles/components/Featured"
import { CentralDelimiter } from "../styles/containers"
import { FaCircle, FaChevronLeft, FaChevronRight } from "react-icons/fa"

function Featured(): JSX.Element {
	const { featuredMovies } = useContext(MoviesContext)
	const [scrollSpeed, setScrollSpeed] = useState(0)

	useLayoutEffect(() => {
		setScrollSpeed(MOVIE_ROW.current?.clientWidth || 0)
	}, [])
	// Horizontal Scroll
	const MOVIE_ROW = useRef<HTMLDivElement>(null)
	const MOVIE_SIZE = 192
	const SCROLL_SPEED = Math.round(MOVIE_ROW.current?.clientWidth || 0) //250
	const DEFAULT_SHIFT = 0

	const [scroll, setScroll] = useState(DEFAULT_SHIFT)

	function handleHorizontalMenu(side: "left" | "right"): void {
		const LIST_LENGTH = (featuredMovies?.length || 0) * MOVIE_SIZE
		const ADITIONAL_BORDER = MOVIE_SIZE * 0.5

		if (side == "left" && scroll < 0) {
			setScroll(Math.min(0, scroll + SCROLL_SPEED))
			return
		}
		if (side == "right" && scroll > window.innerWidth - LIST_LENGTH) {
			setScroll(
				Math.max(
					window.innerWidth - (LIST_LENGTH + ADITIONAL_BORDER),
					scroll - SCROLL_SPEED
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
						{featuredMovies?.map((movie, key) => (
							<div key={key} className="item">
								<img
									src={solvePosterUrl(movie.poster_path, "w300")}
									alt={movie.title}
								/>
							</div>
						))}
					</div>
				</Carousel>
			</CentralDelimiter>
		</FeaturedElement>
	)
}

export default Featured
