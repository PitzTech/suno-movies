import styled from "styled-components"
import { Link } from "react-router-dom"

export const HeaderElement = styled.header`
	position: fixed;

	top: 0;
	left: 0;

	& + * {
		margin-top: 5rem; /* Header Height */
	}
`

export const Logo = styled(Link)`
	font-size: 1.2rem;
	cursor: pointer;
`
