import styled from "styled-components"
import { Link } from "react-router-dom"

export const HeaderElement = styled.header`
	z-index: 999;
	position: fixed;

	top: 0;
	left: 0;

	& + * {
		margin-top: 5rem; /* Header Height */
	}

	.menuIcon {
		font-size: 3rem;
		height: 100%;

		display: flex;
		align-items: center;
	}
`

export const Logo = styled(Link)`
	z-index: 999;
	font-size: 1.2rem;
	cursor: pointer;

	@media (max-width: 943px) {
		font-size: 2.3rem;
	}
`
