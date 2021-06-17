import React from "react"

// Visual

import { CatalogueHeader } from "../styles/components/Catalogue"
import { CentralDelimiter } from "../styles/containers"
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
		</>
	)
}

export default Catalogue
