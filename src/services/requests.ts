//import conn from "./connection"

import { solveParams } from "../utils/requestSolver"

export const indicator = {
	trending: {
		title: "Recomendados",
		url: solveParams("/trending/movie/week?"),
		movies: []
	},
	topRated: {
		title: "Em Alta",
		url: solveParams("/movie/top_rated?"),
		movies: []
	}
}

export const categoryList = [
	{
		id: 28,
		title: "Ação",
		url: solveParams("/discover/movie?with_genres=28")
	},
	{
		id: 35,
		title: "Comédia",
		url: solveParams("/discover/movie?with_genres=35")
	},
	{
		id: 27,
		title: "Terror",
		url: solveParams("/discover/movie?with_genres=27")
	},
	{
		id: 10749,
		title: "Romance",
		url: solveParams("/discover/movie?with_genres=10749")
	},
	{
		id: 99,
		title: "Documentários",
		url: solveParams("/discover/movie?with_genres=99")
	}
]
