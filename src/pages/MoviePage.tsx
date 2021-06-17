import React, { useState, useEffect } from "react"

import conn from "../services/connection"

// Components

import Header from "../components/Header"

function MoviePage(): JSX.Element {
	useEffect(() => {}, [])

	return (
		<>
			<Header />
			<div>
				<h1>Movie Page</h1>
			</div>
		</>
	)
}

export default MoviePage
