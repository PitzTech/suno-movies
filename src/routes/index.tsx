import React from "react"
import { Switch, Route } from "react-router-dom"

import { MoviesContextProvider } from "../context/MoviesContext"

import Home from "../pages/Home"

const Routes: React.FC = () => (
	<Switch>
		<MoviesContextProvider>
			<Route path="/" exact component={Home} />
		</MoviesContextProvider>
	</Switch>
)

export default Routes
