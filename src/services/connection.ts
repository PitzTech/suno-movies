import axios from "axios"

const API_BASE = "https://api.themoviedb.org/3/"

const connection = axios.create({
   baseURL: API_BASE
})  

export default connection