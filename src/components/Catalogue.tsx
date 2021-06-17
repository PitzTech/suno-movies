import React from "react"

import { categoryList } from "../services/requests"

// Visual

import { CatalogueHeader, CatalogueElement, Button } from "../styles/components/Catalogue"
import GlobalContainerStyle, { CentralDelimiter } from "../styles/containers"
import { FaCircle } from "react-icons/fa"

function Catalogue(): JSX.Element {
	return (
		<>
			<CatalogueHeader className="heading">
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
									por gênero
								</option>
								{categoryList.map(category => (
									<option key={category.id} value={category.id}>
										{category.name}
									</option>
								))}
							</select>

							<Button clicked={false}>Mais Populares</Button>
						</div>
					</nav>
				</CentralDelimiter>
			</CatalogueElement>
			<GlobalContainerStyle />
		</>
	)
}

export default Catalogue
