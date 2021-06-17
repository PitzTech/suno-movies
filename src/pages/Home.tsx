import React from "react"

// Components

import Header from "../components/Header"
import Featured from "../components/Featured"
import Catalogue from "../components/Catalogue"

const Home: React.FC = () => {
	return (
		<>
			<Header />

			<Featured />

			<Catalogue />
		</>
	)
}

export default Home
