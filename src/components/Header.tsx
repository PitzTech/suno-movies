import React, { useEffect } from "react"

// Components

import NavMenu from "./NavMenu"

// Visual

import { HeaderElement, Logo } from "../styles/components/Header"
import GlobalContainerStyle, { CentralDelimiter } from "../styles/containers"

import { GiHamburgerMenu } from "react-icons/gi"

import useViewport from "../utils/useViewport"

function Header(): JSX.Element {
	const { screenWidth, mobileBreakPoint } = useViewport()

	return (
		<>
			<HeaderElement className="/ heading">
				{/* Set Home Menu Active Position*/}
				<CentralDelimiter className="centralDelimiter">
					{screenWidth < mobileBreakPoint && (
						<div className="menuIcon">
							<GiHamburgerMenu />
						</div>
					)}

					<Logo to="/">
						SUNO <b className="pink">MOVIES</b>
					</Logo>

					<NavMenu />
				</CentralDelimiter>
			</HeaderElement>
			<GlobalContainerStyle />
		</>
	)
}

export default Header
