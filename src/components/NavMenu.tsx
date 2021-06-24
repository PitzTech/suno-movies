import React, { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Link as ScrollLink } from "react-scroll"

// Visual

import SearchBar from "./SearchBar"
import { NavElement } from "../styles/components/NavMenu"
import { FiSearch } from "react-icons/fi"

import useViewport from "../utils/useViewport"

function NavMenu(): JSX.Element {
	const { pathname } = useLocation()
	const [isSearching, setIsSearching] = useState(false)
	const { screenWidth, mobileBreakPoint } = useViewport()

	function scrollToTop(): void {
		window.scrollTo(0, 0)
	}
	function handleSearchButton(): void {
		setIsSearching(!isSearching)
	}

	function renderTabs(): JSX.Element {
		return (
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
		)
	}
	useEffect(() => {
		scrollToTop()
	}, [])

	return (
		<>
			<NavElement>
				{screenWidth > mobileBreakPoint && renderTabs()}
				<div
					onClick={handleSearchButton}
					className={`searchIcon ${isSearching && "on"}`}
				>
					<FiSearch />
				</div>
			</NavElement>
			{isSearching && <SearchBar />}
		</>
	)
}

export default NavMenu
