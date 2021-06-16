import React from "react"

// Visual

import { NavElement, ScrollLink } from "../styles/components/NavMenu"
import { FiSearch } from "react-icons/fi"

function NavMenu(): JSX.Element {
	return (
		<NavElement>
			<div className="tabs">
				<ScrollLink activeClass="on" to="/" smooth={true} spy={true}>
					INÍCIO
				</ScrollLink>
				<ScrollLink activeClass="on" to="catalog" smooth={true} spy={true}>
					CATÁLOGO
				</ScrollLink>
			</div>
			<div className="searchIcon">
				<FiSearch />
			</div>
		</NavElement>
	)
}

export default NavMenu
