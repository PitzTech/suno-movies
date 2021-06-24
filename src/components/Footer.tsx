import React from "react"

import { FooterElement } from "../styles/components/Footer"

function Footer(): JSX.Element {
	return (
		<FooterElement>
			© {new Date().getFullYear()} Suno Movies {"&"} Victor Laurentino do Nascimento.
			All rights reserved.
		</FooterElement>
	)
}

export default Footer
