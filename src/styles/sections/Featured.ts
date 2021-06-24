import styled from "styled-components"

export const Carousel = styled.div`
	overflow-x: hidden;
	box-sizing: content-box;

	padding: 0 10px;
	margin-left: -10px;

	div.movieRow-List {
		white-space: nowrap;

		transition: margin-left ease 0.3s;

		width: 100%;
	}
`

export const MovieItem = styled.div`
	align-items: center;

	display: inline-block;
	width: 12rem;

	//margin-left: -30px;
	margin: 0 0.3rem;

	a {
		display: block;
	}

	img {
		margin: 0 auto;

		width: 100%;
		transform: scale(0.9);

		user-select: none;

		transition: transform ease 0.35s;
		&:hover {
			transform: scale(1);
			cursor: pointer;
		}
	}

	.info {
		width: 90%;
		margin: 0 auto;
		//white-space: normal;

		h2.infoTitle {
			font-weight: normal;
		}

		p.categories {
			margin-top: -1px;
			margin-bottom: 0.3rem;

			font-size: 0.8rem;
			font-weight: 200; // extra-light
		}

		div.rating {
			margin-top: -5px;

			display: flex;
			align-items: center;

			* {
				display: flex;
				align-items: center;
			}

			p {
				font-size: 0.8rem;
				font-weight: 300; // light
				margin-left: 10px;
			}
		}
	}

	@media (max-width: 1080px) {
		width: 12.55rem;
	}
	@media (max-width: 943px) {
		width: 15.5rem;
	}
	@media (max-width: 743px) {
		width: 21.5rem;
	}
`
