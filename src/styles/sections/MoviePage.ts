import styled from "styled-components"
import { shade } from "polished"

import { Link } from "react-router-dom"

export const MovieItem = styled.section`
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

		h1.infoTitle {
			font-weight: bolder;
			font-size: 2.5rem;
		}

		.categories-rating-group {
			display: flex;
			justify-content: space-between;
			margin-bottom: 1.7rem;

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

export const MovieTrailerElement = styled.section`
	padding: 3rem 0;

	h1 {
		font-size: 1.3rem;
		font-weight: bold;

		padding-bottom: 0.7rem;
		border-bottom: 2.5px solid var(--primary-pink);

		margin-bottom: 2rem;
	}

	.iframe {
		width: 100%;
		position: relative;

		margin-bottom: 2rem;

		&:after {
			content: "";
			display: block;
			padding-bottom: 56.25%; // 9:16
		}
		iframe {
			position: absolute;
			height: 100%;
			width: 100%;
		}
	}
`

export const Button = styled(Link)`
	border: 1px solid var(--primary-pink);
	border-radius: 0.15rem;
	padding: 0.5rem 0.5rem;

	background-color: var(--primary-pink);
	box-shadow: 0px 0px 10px ${shade(0.2, "#FF559E")};
	border-color: transparent;

	color: var(--primary-text);
	font-weight: bolder;
	font-size: 0.9rem;
	letter-spacing: 0.7px;

	box-sizing: border-box;

	height: 2.3rem;
	width: 10rem;
	margin: 0 auto;

	display: flex;
	justify-content: center;
	align-items: center;

	transition: background-color ease 0.6s;

	&:hover {
		border: 2px solid var(--primary-pink);
		background: transparent;
	}
`
