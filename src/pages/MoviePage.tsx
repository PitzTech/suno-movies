import React, { useState, useEffect } from "react"
import { useRouteMatch } from "react-router-dom"

import conn from "../services/connection"
import { Movie, MovieTrailer } from "../types/movies"

// Utils

import { solvePosterUrl, solveParams } from "../utils/requestSolver"

// Components

import Header from "../components/Header"

// Visual

import { MovieItem, MovieTrailerElement, Button } from "../styles/sections/MoviePage"
import { CentralDelimiter, BackgroundContainer } from "../styles/containers"

import { FaStar } from "react-icons/fa"

interface MovieParams {
	id: string
}

function MoviePage(): JSX.Element {
	const [movie, setMovie] = useState<Movie | null>(null)
	const [movieTrailer, setMovieTrailer] = useState<MovieTrailer[]>([])

	const { params } = useRouteMatch<MovieParams>()

	const categories: string[] = []

	const TRAILER_BASE_URL = "https://www.youtube.com/embed/"

	Object.entries(movie?.genres || {}).map(item => {
		const itemArray = item[1]
		categories.push(itemArray.name)
	})

	useEffect(() => {
		conn.get(solveParams(`/movie/${params.id}?`)).then(response => {
			setMovie(response.data)
			//console.log(response.data)
		})
		//Get Video
		conn.get(solveParams(`/movie/${params.id}/videos?`)).then(response => {
			//console.log(response.data.results)
			setMovieTrailer(response.data.results)
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
							<h1 className="infoTitle">{movie?.title}</h1>
							<div className="categories-rating-group">
								<p className="categories pink">{categories.join(", ")}</p>
								<div className="rating">
									<span className="starIcon pink">
										<FaStar />
									</span>
									<p>{movie?.vote_average}</p>
								</div>
							</div>
							<div className="description">
								<h2>Sinopse</h2>
								<p>{movie?.overview}</p>
							</div>
						</div>
					</MovieItem>
				</CentralDelimiter>
			</BackgroundContainer>
			<CentralDelimiter>
				<MovieTrailerElement>
					<h1>Trailer</h1>
					<div className="iframe">
						<iframe
							src={
								TRAILER_BASE_URL +
								(movieTrailer.length ? movieTrailer[0].key : "")
							}
							frameBorder="0"
							title={movieTrailer.length ? movieTrailer[0].title : ""}
						></iframe>
					</div>

					<Button to="/">Voltar</Button>
				</MovieTrailerElement>
			</CentralDelimiter>
		</>
	)
}

export default MoviePage
