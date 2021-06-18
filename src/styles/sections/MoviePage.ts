import styled from "styled-components"

export const MovieItem = styled.div`
	display: flex;
	overflow: hidden;

	img {
		width: 30%;
		margin-right: 2.5rem;

		user-select: none;
		cursor: pointer;
	}

	.info {
		flex: 1;
		white-space: normal;

		display: flex;
		justify-content: space-between;
		flex-direction: column;

		h1.infoTitle {
			font-weight: bolder;
			font-size: 2.5rem;
		}

		.categories-rating-group {
			display: flex;
			justify-content: space-between;
			margin-bottom: 1rem;

			p.categories {
				font-size: 1.2rem;
				font-weight: 200; // light
			}

			div.rating {
				display: flex;
				align-items: center;

				margin-top: -0.2rem;

				font-size: 1.2rem;

				* {
					display: flex;
					align-items: center;
				}

				p {
					font-size: 1.2rem;
					font-weight: 300; // light
					margin-left: 10px;
					margin-top: 0.07rem;
				}
			}
		}

		.description {
			h2 {
				margin-bottom: 1rem;
			}

			p {
				font-size: 0.9rem;
				color: var(--secondary-text);

				text-align: justify;
				text-align-last: left;
			}
		}
	}
`
