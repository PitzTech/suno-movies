import styled from "styled-components"

export const NavElement = styled.nav`
	display: flex;
	height: 100%;

	& * {
		height: 100%;
		display: flex;
	}

	.searchIcon {
		font-size: 1.5rem;
		margin-top: -0.1rem;

		align-items: center;
		padding-left: 1.5rem;

		cursor: pointer;

		transition: color ease 0.45s;

		&.on,
		&:hover {
			color: var(--primary-pink);
		}
	}

	.headerLink {
		font-size: 0.9rem;

		display: flex;
		align-items: center;
		padding: 0 1.5rem;

		cursor: pointer;

		transition: color ease 0.45s, border-color ease 0.3s;
		border-bottom: 3px solid transparent;

		&.on,
		&:hover {
			color: var(--primary-pink);
			border-color: var(--primary-pink);
		}
	}
`
