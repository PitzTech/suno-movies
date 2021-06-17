import React from "react"

// Components

import NavMenu from "./NavMenu"

// Visual

import { HeaderElement, Logo } from "../styles/components/Header"
import GlobalContainerStyle, { CentralDelimiter } from "../styles/containers"

function Header(): JSX.Element {
	return (
		<>
			<HeaderElement className="/ heading">
				{/* Set Home Menu Active Position*/}
				<CentralDelimiter className="centralDelimiter">
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
