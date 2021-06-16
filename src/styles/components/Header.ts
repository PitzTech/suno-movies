import styled from "styled-components"
import { Link } from "react-scroll"

export const HeaderElement = styled.header`
	position: fixed;
	z-index: 999;

	top: 0;
	left: 0;

	width: 100%;
	height: 5rem;

	background-color: var(--secondary-background);
	box-shadow: 0px 4px 25px 4px rgba(0, 0, 0, 0.3);

	.centralDelimiter {
		display: flex;
		justify-content: space-between;
		align-items: center;

		height: 100%;
	}
`

export const Logo = styled(Link)`
	font-size: 1.2rem;
	cursor: pointer;
`
