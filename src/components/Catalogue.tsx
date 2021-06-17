import React, { useState } from "react"

import { categoryList } from "../services/requests"

// Visual

import {
	CatalogueHeader,
	CatalogueElement,
	Button,
	GridButton,
	CatalogueMovies
} from "../styles/components/Catalogue"
import GlobalContainerStyle, { CentralDelimiter } from "../styles/containers"
import { FaCircle, FaChevronDown } from "react-icons/fa"
import { BsGridFill } from "react-icons/bs"

function Catalogue(): JSX.Element {
	const [isGrid, setIsGrid] = useState(false)

	const getCatalogueMovies = (): string => {
		return ""
	}

	return (
		<>
			<CatalogueHeader className="heading" id="catalogue">
				<CentralDelimiter className="centralDelimiter">
					<h1>
						<FaCircle className="pink circle" />
						<b> CATÁLOGO</b> COMPLETO
					</h1>
				</CentralDelimiter>
			</CatalogueHeader>
			<CatalogueElement>
				<CentralDelimiter className="centralDelimiter">
					<nav className="filters">
						<div className="leftAlign">
							<select placeholder="por gênero" defaultValue="placeholder">
								<option value="placeholder" disabled>
									▼ por gênero
								</option>
								{categoryList.map(category => (
									<option key={category.id} value={category.id}>
										{category.name}
									</option>
								))}
							</select>

							<Button clicked={false}>Mais Populares</Button>
						</div>
						<GridButton onClick={() => setIsGrid(!isGrid)}>
							{isGrid ? (
								<>
									<BsGridFill className="icon" /> Grid
								</>
							) : (
								<>
									<FaChevronDown className="icon" /> Lista
								</>
							)}
						</GridButton>
					</nav>

					<CatalogueMovies>{getCatalogueMovies()}</CatalogueMovies>
				</CentralDelimiter>
			</CatalogueElement>
			<GlobalContainerStyle />
		</>
	)
}

export default Catalogue
