import styled from "styled-components"
import { shade } from "polished"

export const CatalogueHeader = styled.div`
	position: relative;
	display: flex;

	.circle {
		font-size: 0.8rem;
	}
`

export const CatalogueElement = styled.section`
	padding: 3rem 0 6rem;

	.leftAlign * {
		display: inline-block;
		margin-right: 1rem;
	}
`

interface ButtonProps {
	clicked: boolean
}

export const Button = styled.button<ButtonProps>`
	cursor: pointer;

	border: 1px solid var(--primary-pink);
	padding: 5px 10px;
	border-radius: 4px;

	background-color: var(--primary-pink);
	box-shadow: 0px 0px 10px ${shade(0.2, "#FF559E")};
	border-color: transparent;

	color: var(--primary-text);
	font-weight: bolder;
	font-size: 1em;

	box-sizing: border-box;

	height: 2rem;
	width: 10rem;

	display: flex;
	justify-content: center;
	align-items: center;

	transition: background-color ease 0.6s;

	&.active {
		background: transparent !important;
	}

	&:hover {
		border: 2px solid var(--primary-pink);
		background: transparent;
	}
`
