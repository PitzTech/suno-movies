import styled from "styled-components"

import featuredBackground from "../../images/featured-background.svg"

export const FeaturedElement = styled.section`
	margin-top: 5rem; /* Header Height */

	background-image: url(${featuredBackground});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: bottom;

	height: 70vh; /* REMOVE THIS LINE */
	width: 100%;

	display: flex;
	flex-direction: column;
	justify-content: center;

	font-size: 0.7rem;

	.circle {
		font-size: 0.8rem;
	}

	.centralLimiter {
		box-sizing: content-box;
		width: 820px;
		display: flex;
		flex-direction: column;
	}

	.leftArrow,
	.rightArrow {
		position: absolute;

		font-size: 4rem;
		width: 1.4rem;

		margin-top: 2.4rem;
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
		left: -2.5rem;
	}

	.rightArrow {
		right: -2.5rem;
	}
`

export const Carousel = styled.div`
	overflow-x: hidden;
	box-sizing: content-box;

	padding: 0 10px;
	margin-left: -10px;

	div.movieRow-List {
		white-space: nowrap;
		transition: margin-left ease 0.3s;

		box-sizing: content-box;
		padding: 0 2rem;
		margin-left: -2rem;

		width: 100%;

		.item {
			align-items: center;

			display: inline-block;
			width: 12rem;

			margin-right: 17px;

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
		}

		.item:last-child {
			margin-right: 0;
		}
	}
`
