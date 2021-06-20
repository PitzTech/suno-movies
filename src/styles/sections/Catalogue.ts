import styled from "styled-components"
import { shade } from "polished"

export const CatalogueHeader = styled.div`
	position: relative;
	display: flex;

	border-top: 2.5px solid var(--primary-pink);

	.circle {
		font-size: 0.8rem;
	}
`

export const CatalogueElement = styled.section`
	display: flex;
	padding: 3rem 0 6rem;

	.filters {
		display: flex;
		justify-content: space-between;
		width: 100%;
	}

	.leftAlign > * {
		display: inline-block;
		margin-right: 1rem;

		cursor: pointer;

		font-weight: bolder;
		font-size: 0.8em;

		border-radius: 0.15rem;
	}

	select {
		color: var(--primary-text);
		background: linear-gradient(
				180deg,
				var(--secondary-background) 0%,
				var(--secondary-background-contrast) 100%
			),
			var(--secondary-background);

		border: 2px solid var(--secondary-background-light-contrast);

		height: 2.3rem;
		padding: 0.5rem 1rem;

		appearance: none;
		&::-ms-expand {
			display: none;
		}

		text-align-last: center;

		option {
			background: var(--secondary-background);
			color: var(--primary-text);

			font-size: 1rem;
		}
	}

	@media (max-width: 943px) {
		.leftAlign {
			width: 100%;
			display: flex;
			justify-content: space-between;

			& > * {
				font-size: 1em;
			}
		}
		select {
			height: 2.5rem;
		}
	}
`

interface ButtonProps {
	isClicked: boolean
}

export const Button = styled.button<ButtonProps>`
	border: 1px solid var(--primary-pink);
	padding: 0.5rem 0.5rem;

	background-color: ${props =>
		props.isClicked ? `transparent` : `var(--primary-pink)`};
	box-shadow: 0px 0px 10px ${shade(0.2, "#FF559E")};
	border-color: transparent;

	color: var(--primary-text);
	font-weight: bolder;

	box-sizing: border-box;

	height: 2.3rem;
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

	@media (max-width: 943px) {
		height: 2.5rem;
	}
`

export const GridButton = styled.button`
	color: var(--primary-text);
	background: linear-gradient(
			180deg,
			var(--secondary-background) 0%,
			var(--secondary-background-contrast) 100%
		),
		var(--secondary-background);

	border: 2px solid var(--secondary-background-light-contrast);

	height: 2.3rem;
	width: 5.5rem;
	padding: 0.5rem 1rem;

	font-weight: bolder;
	display: flex;
	justify-content: space-between;
	align-items: center;
`

interface CatalogueMoviesProps {
	isGrid: boolean
}

export const CatalogueMovies = styled.div<CatalogueMoviesProps>`
	margin-top: 3rem;

	display: grid;
	grid-template-columns: ${props => (props.isGrid ? `1fr 1fr` : `1fr`)};
	grid-gap: 1.5rem;
`

export const MovieItem = styled.div`
	display: flex;
	overflow: hidden;

	img {
		width: 35%;
		margin-right: 1rem;

		user-select: none;
		cursor: pointer;
	}

	.info {
		flex: 1;
		//white-space: normal;

		h2.infoTitle {
			font-weight: normal;
			font-size: 1rem;
		}

		p.categories {
			margin-top: -1px;
			margin-bottom: 0.3rem;

			font-size: 0.8rem;
			font-weight: 200; // extra-light
		}

		div.rating {
			margin: 0.3rem 0;

			display: flex;
			align-items: center;

			font-size: 0.8rem;

			* {
				display: flex;
				align-items: center;
			}

			p {
				font-size: 0.8rem;
				font-weight: 300; // light
				margin-left: 10px;
				margin-top: 0.07rem;
			}
		}

		p.description {
			font-size: 0.75rem;
			color: var(--secondary-text);

			text-align: justify;
			text-align-last: left;
		}
	}
`
