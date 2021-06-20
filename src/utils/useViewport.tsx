import React, { useState, useEffect } from "react"

interface ViewportParameter {
	screenWidth: number
	mobileBreakPoint: number
}

function useViewport(): ViewportParameter {
	const [screenWidth, setScreenWidth] = useState(window.innerWidth)
	const mobileBreakPoint = 943
	// Update width variable on screen resize
	useEffect(() => {
		const handleWindowResize = (): void => setScreenWidth(window.innerWidth)
		window.addEventListener("resize", handleWindowResize)

		return () => window.removeEventListener("resize", handleWindowResize)
	}, [])

	return { screenWidth, mobileBreakPoint }
}

export default useViewport
