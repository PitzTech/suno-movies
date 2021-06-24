import React from "react"

// Components

import Header from "../components/Header"
import Featured from "../components/Featured"
import Catalogue from "../components/Catalogue"
import Footer from "../components/Footer"

const Home: React.FC = () => {
	return (
		<>
			<Header />

			<Featured />

			<Catalogue />

			<Footer />
		</>
	)
}

export default Home
