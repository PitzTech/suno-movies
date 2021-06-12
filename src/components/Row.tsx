import React, { useState, useEffect } from "react"

import conn from "../services/connection"

const Row = ({ movieData }: any) => {

   const { title, url } = movieData

   const [movies, setMovies] = useState([])

   useEffect(() => {
      conn.get(url).then(response => {
         setMovies(response.data.results)
      })
   },[]) 

   return (
      <div className="row">
         {movies.map( (movie, key )=> (
            <p key={key}>{movie["name"]}</p>
         ))}
      </div>
   )
}

export default Row

