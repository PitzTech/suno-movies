import axios from "axios"

import { auth } from "./preferences"

const connection = axios.create({
	baseURL: auth.BASE_URL,
	headers: {
		Authorization: `Bearer ${auth.ACCESS_TOKEN}`,
		"Content-Type": "application/json;charset=utf-8"
	}
})

export default connection
