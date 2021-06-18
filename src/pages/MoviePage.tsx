import React, { useState, useEffect } from "react"
import { useRouteMatch } from "react-router-dom"

import conn from "../services/connection"
import { Movie } from "../types/movies"

// Utils

import { solvePosterUrl, solveParams } from "../utils/requestSolver"

// Components

import Header from "../components/Header"

// Visual

import { MovieItem } from "../styles/sections/MoviePage"
import { CentralDelimiter, BackgroundContainer } from "../styles/containers"

import { FaStar } from "react-icons/fa"

interface MovieParams {
	id: string
}

function MoviePage(): JSX.Element {
	const [movie, setMovie] = useState<Movie | null>(null)

	const { params } = useRouteMatch<MovieParams>()

	const categories: string[] = []

	Object.entries(movie?.genres || {}).map(item => {
		const itemArray = item[1]
		categories.push(itemArray.name)
	})

	useEffect(() => {
		conn.get(solveParams(`/movie/${params.id}?`)).then(response => {
			setMovie(response.data)
			console.log(response.data)
		})
	}, [params.id])

	return (
		<>
			<Header />
			<BackgroundContainer>
				<CentralDelimiter>
					<MovieItem>
						{/* {<div className="cover">{movie.title}</div>} */}
						<img
							src={solvePosterUrl(movie?.poster_path || "", "w400")}
							alt={movie?.title || ""}
						/>

						<div className="info">
							<h2 className="infoTitle">{movie?.title}</h2>
							<p className="categories pink">{categories.join(", ")}</p>
							<div className="rating">
								<span className="starIcon pink">
									<FaStar />
								</span>
								<p>{movie?.vote_average}</p>
							</div>
							<p className="description">{movie?.overview}</p>
						</div>
					</MovieItem>
				</CentralDelimiter>
			</BackgroundContainer>
		</>
	)
}

export default MoviePage
