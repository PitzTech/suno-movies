import styled from "styled-components"

export const SearchBarElement = styled.div`
	position: fixed;
	z-index: 99;
	top: 5rem; /* Header Height */
	left: 0;

	width: 100%;
	height: 100%;

	background: rgba(27, 27, 31, 0.95);

	.searchContainer {
		//border-top: 3px solid var(--primary-background);
		box-shadow: 0px 4px 25px 4px rgba(0, 0, 0, 0.3);
		background-color: var(--secondary-background);

		padding: 1rem 0 1.5rem;

		input {
			width: 100%;
			//height: 3rem;

			color: var(--primary-text);
			font-size: 1.6rem;

			border: 0;
			padding: 1rem 1.3rem;
			border-bottom: 3px solid var(--primary-pink);
			background: transparent;
		}
	}
	.searchMovieList {
		display: grid;
		overflow-x: scroll;
		white-space: nowrap;

		grid-auto-flow: column;
		/* grid-template-columns: repeat(auto-fit, 15rem);
		grid-template-rows: none; */
		grid-gap: 1rem;
		margin-top: 2rem;

		padding-bottom: 1.5rem;

		&::-webkit-scrollbar {
			height: 0.2em;
		}

		&::-webkit-scrollbar-track {
			background: var(--primary-background);
			-webkit-box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.1);
		}

		&::-webkit-scrollbar-thumb {
			background: var(--primary-pink);
			outline: 1px solid slategrey;
			width: 0.2em;
		}
	}
`

export const MovieItem = styled.div`
	display: flex;
	overflow: hidden;

	background-color: var(--secondary-pink);
	padding: 1rem;
	border: 1px solid var(--secondary-pink-contrast);
	border-radius: 5px;

	height: 10rem;

	img {
		width: 5rem;
		object-fit: cover;

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
	}
`
