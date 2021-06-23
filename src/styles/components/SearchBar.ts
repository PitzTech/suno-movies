import styled from "styled-components"

export const SearchBarElement = styled.div`
	position: fixed;
	z-index: 99;
	top: calc(5rem + 1.5px); /* Header Height */
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
`
