import React, { useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Link as ScrollLink } from "react-scroll"

// Visual

import { NavElement } from "../styles/components/NavMenu"
import { FiSearch } from "react-icons/fi"

function NavMenu(): JSX.Element {
	const { pathname } = useLocation()

	function scrollToTop(): void {
		window.scrollTo(0, 0)
	}

	useEffect(() => {
		scrollToTop()
	}, [])

	return (
		<NavElement>
			<div className="tabs">
				<Link
					onClick={scrollToTop}
					className={`headerLink ${pathname == "/" && "on"}`}
					to="/"
				>
					INÍCIO
				</Link>

				{pathname == "/" ? (
					<ScrollLink
						className="headerLink"
						activeClass="on"
						to="catalogue"
						smooth={true}
						spy={true}
					>
						CATÁLOGO
					</ScrollLink>
				) : (
					<Link className="headerLink on" to={pathname}>
						CATÁLOGO
					</Link>
				)}
			</div>
			<div className="searchIcon">
				<FiSearch />
			</div>
		</NavElement>
	)
}

export default NavMenu
