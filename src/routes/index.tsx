import React from "react"
import { Switch, Route } from "react-router-dom"

import { MoviesContextProvider } from "../context/MoviesContext"

import Home from "../pages/Home"
import MoviePage from "../pages/MoviePage"

const Routes: React.FC = () => (
	<Switch>
		<MoviesContextProvider>
			<Route path="/" exact component={Home} />
			<Route path="/filme/:id" component={MoviePage} />
		</MoviesContextProvider>
	</Switch>
)

export default Routes
