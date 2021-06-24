import React, { useContext } from "react"
import { Link } from "react-router-dom"

import MoviesContext from "../context/MoviesContext"

import { solvePosterUrl } from "../utils/requestSolver"
import { getCategoriesName } from "../utils/movieInfo"
import { limitText } from "../utils/formatters"

import { SearchBarElement, MovieItem } from "../styles/components/SearchBar"
import { CentralDelimiter } from "../styles/containers"

import { FaStar } from "react-icons/fa"

function SearchBar(): JSX.Element {
	const { search, setSearch, searchResults } = useContext(MoviesContext)

	return (
		<SearchBarElement>
			<div className="searchContainer">
				<CentralDelimiter>
					<input
						value={search}
						type="text"
						placeholder="Ex.: Cruella"
						onChange={el => setSearch(el.target.value)}
					/>
					<div className="searchMovieList">
						{searchResults.length > 0 &&
							search &&
							searchResults.slice(0, 5).map(
								movie =>
									movie.poster_path && (
										<Link to={`/filme/${movie.id}`} key={movie.id}>
											<MovieItem>
												{/* {<div className="cover">{movie.title}</div>} */}
												<img
													src={solvePosterUrl(movie.poster_path, "w400")}
													alt={movie.title}
												/>

												<div className="info">
													<h2 className="infoTitle">
														{limitText(movie.title, 12)}
													</h2>
													<p className="categories pink">
														{getCategoriesName(
															movie?.genre_ids || [],
															2
														).join(", ")}
													</p>
													<div className="rating">
														<span className="starIcon pink">
															<FaStar />
														</span>
														<p>{movie.vote_average}</p>
													</div>
												</div>
											</MovieItem>
										</Link>
									)
							)}
					</div>
				</CentralDelimiter>
			</div>
		</SearchBarElement>
	)
}

export default SearchBar
