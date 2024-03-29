import React from "react"

// Routes

import { BrowserRouter } from "react-router-dom"
import Routes from "./routes"

// Visual

import GlobalStyle from "./styles/global"

const App: React.FC = () => {
	return (
		<>
			<BrowserRouter>
				<Routes />
			</BrowserRouter>
			<GlobalStyle />
		</>
	)
}

export default App
