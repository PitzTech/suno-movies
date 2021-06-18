import styled from "styled-components"

export const MovieItem = styled.div`
	display: flex;
	overflow: hidden;

	img {
		width: 35%;
		margin-right: 2.5rem;

		user-select: none;
		cursor: pointer;
	}

	.info {
		flex: 1;
		white-space: normal;

		h1.infoTitle {
			font-weight: bolder;
			font-size: 2.5rem;
		}

		p.categories {
			margin-bottom: 0.3rem;

			font-size: 1.2rem;
			font-weight: 200; // light
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
