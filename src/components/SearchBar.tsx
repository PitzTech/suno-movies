import React from "react"

import { SearchBarElement } from "../styles/components/SearchBar"
import { CentralDelimiter } from "../styles/containers"

function SearchBar(): JSX.Element {
	return (
		<SearchBarElement>
			<div className="searchContainer">
				<CentralDelimiter>
					<input />
				</CentralDelimiter>
			</div>
		</SearchBarElement>
	)
}

export default SearchBar
