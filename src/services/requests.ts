//import conn from "./connection"

import { solveParams } from "../utils/requestSolver"
import { MovieRequest } from "../types/requests"

export const indicator = {
	trending: {
		name: "Recomendados",
		url: solveParams("/trending/movie/week?"),
		movies: []
	},
	topRated: {
		name: "Em Alta",
		url: solveParams("/movie/top_rated?"),
		movies: []
	}
	// catalogue: {
	// 	name: "Filmes em Catálogo",
	// 	url: solveParams("/discover/movie?page")
	// }
}

export const categoryList: MovieRequest[] = [
	{
		id: 12,
		name: "Aventura",
		url: solveParams("/discover/movie?with_genres=12")
	},
	{
		id: 14,
		name: "Fantasia",
		url: solveParams("/discover/movie?with_genres=14")
	},
	{
		id: 16,
		name: "Animação",
		url: solveParams("/discover/movie?with_genres=16")
	},
	{
		id: 18,
		name: "Drama",
		url: solveParams("/discover/movie?with_genres=18")
	},
	{
		id: 27,
		name: "Terror",
		url: solveParams("/discover/movie?with_genres=27")
	},
	{
		id: 28,
		name: "Ação",
		url: solveParams(`/discover/movie?with_genres=28`)
	},

	{
		id: 35,
		name: "Comédia",
		url: solveParams("/discover/movie?with_genres=35")
	},
	{
		id: 36,
		name: "História",
		url: solveParams("/discover/movie?with_genres=36")
	},
	{
		id: 37,
		name: "Faroeste",
		url: solveParams("/discover/movie?with_genres=37")
	},
	{
		id: 53,
		name: "Thriller",
		url: solveParams("/discover/movie?with_genres=53")
	},
	{
		id: 80,
		name: "Crime",
		url: solveParams("/discover/movie?with_genres=80")
	},
	{
		id: 99,
		name: "Documentários",
		url: solveParams("/discover/movie?with_genres=99")
	},
	{
		id: 878,
		name: "Ficção científica",
		url: solveParams("/discover/movie?with_genres=878")
	},
	{
		id: 9648,
		name: "Mistério",
		url: solveParams("/discover/movie?with_genres=9648")
	},
	{
		id: 10402,
		name: "Música",
		url: solveParams("/discover/movie?with_genres=10402")
	},
	{
		id: 10749,
		name: "Romance",
		url: solveParams("/discover/movie?with_genres=10749")
	},
	{
		id: 10751,
		name: "Família",
		url: solveParams("/discover/movie?with_genres=10751")
	},
	{
		id: 10752,
		name: "Guerra",
		url: solveParams("/discover/movie?with_genres=10752")
	},
	{
		id: 10770,
		name: "Cinema TV",
		url: solveParams("/discover/movie?with_genres=10770")
	}
]
