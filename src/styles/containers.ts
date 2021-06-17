import styled, { createGlobalStyle } from "styled-components"

export const CentralDelimiter = styled.div`
	width: 800px;

	position: relative;
	margin: 0 auto;
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
`
