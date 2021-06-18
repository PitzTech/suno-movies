import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
   :root {
      --primary-background: #1B1B1F;
		--secondary-background: #212125;
		--secondary-background-light-contrast: #2e2d31;
		--secondary-background-contrast: #2e2e35;

      --primary-text: #EAEAEA;
		--secondary-text: #9F9FA0;

		--primary-pink: #FF559E;
   }

	::-webkit-scrollbar {
		width: .3rem;
	}

	::-webkit-scrollbar-track {
		background: var(--primary-background);
		-webkit-box-shadow: inset 0 0 6px rgba(255,255,255,0.1);
	}

	::-webkit-scrollbar-thumb {
		background: var(--primary-pink);
		outline: 1px solid slategrey;
		height: 1rem;
	}

   * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
   }

	h1 {
		font-weight: normal;
	}

   a {
   	text-decoration: none;
		color: var(---primary-text);
   }

	// Custom Classes

	.pink {
		color: var(--primary-pink);
	}

   /* user-agent font-size is 16px */

   @media(max-width: 1080px) {
      :root {
         font-size: 93.75%; /* 15px */
      }
   }

   @media(max-width: 970px) {
      :root {
         font-size: 87.5%; /* 14px */
      }
   }

   @media(max-width:700px) {
      :root {
         font-size: 75%; /* 12px */
      }
   }

   @media(max-width: 590px) {
      :root {
         font-size: 62.25%; /* 10px */
      }
   }

   body {
      background-color: var(--primary-background);
      color: var(--primary-text);
      font-family: Poppins, sans-serif;
   }
`
