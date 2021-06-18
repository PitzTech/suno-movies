import React from "react"
import { Link } from "react-router-dom"
import { Link as ScrollLink } from "react-scroll"

// Visual

import { NavElement } from "../styles/components/NavMenu"
import { FiSearch } from "react-icons/fi"

function NavMenu(): JSX.Element {
	return (
		<NavElement>
			<div className="tabs">
				<Link className="headerLink" to="/">
					INÍCIO
				</Link>
				<ScrollLink
					className="headerLink"
					activeClass="on"
					to="catalogue"
					smooth={true}
					spy={true}
				>
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
