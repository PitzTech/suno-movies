import styled, { createGlobalStyle } from "styled-components"
import featuredBackground from "../images/featured-background.svg"

export const CentralDelimiter = styled.div`
	max-width: 820px;

	position: relative;
	margin: 0 auto;

	@media (max-width: 943px) {
		max-width: 90%;
	}
`

export default createGlobalStyle`
	.heading {
		z-index: 999;

		width: 100%;
		height: 5rem;

		background-color: var(--secondary-background);
		box-shadow: 0px 4px 25px 4px rgba(0, 0, 0, 0.3);

		h1 {
			font-size: 1.05rem;
		}

		.centralDelimiter {
			display: flex;
			justify-content: space-between;
			align-items: center;

			height: 100%;
		}
	}

	@media (max-width: 943px) {
		.heading h1 {
			text-align: center;
			font-size: 1.2rem;

			.circle {
				font-size: 1rem;
				margin-right: 10px;
				margin-bottom: -0.05rem;
			}
		}
	}
`

export const BackgroundContainer = styled.section`
	//margin-top: 5rem; /* Header Height */

	background-image: url(${featuredBackground});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: bottom;

	//height: 60vh; /* REMOVE THIS LINE */
	padding: 3rem 0 6rem;
	width: 100%;

	display: flex;
	flex-direction: column;
	justify-content: center;

	font-size: 0.7rem;

	h1 {
		.circle {
			font-size: 0.8rem;
		}

		font-size: 1.05rem;

		margin-bottom: 0.8rem;
	}

	.centralLimiter {
		box-sizing: content-box;
		display: flex;
		flex-direction: column;
	}

	.leftArrow,
	.rightArrow {
		position: absolute;

		font-size: 4rem;
		width: 1.4rem;

		margin-top: 3.2rem;
		height: 16.3rem; // 12rem * 1.5 * 0.9
		padding: 0 1rem;
		box-sizing: content-box;

		cursor: pointer;

		display: flex;
		align-items: center;
		justify-content: center;

		transition: background-color ease 0.5s;

		&:hover {
			background-color: rgba(0, 0, 0, 0.75);
		}
	}

	.leftArrow {
		left: -3.4rem;
	}

	.rightArrow {
		right: -2.5rem;
	}

	@media (max-width: 943px) {
		background-image: none;

		h1 {
			text-align: center;
			font-size: 1.2rem;

			.circle {
				font-size: 1rem;
				margin-right: 10px;
				margin-bottom: -0.05rem;
			}
		}

		.centralLimiter {
			box-sizing: content-box;
		}
	}
`
