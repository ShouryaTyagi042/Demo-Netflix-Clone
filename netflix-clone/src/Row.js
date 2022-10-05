import React, {useEffect, useState} from 'react'
import axios from './axios' 

const base_URL = "https://image.tmdb.org/t/p/original/"
function Row({title , fetchUrl}) {
    const [movies,setMovies] = useState([]) ;
    //a snippet of code that runs on a specific condition 
    useEffect(()=>{
        // if we leave [] then we mean run it once and then dont run it again
        async function fetchData() {
            const request = await axios.get(fetchUrl) ;
            setMovies(request.data.results) ;
            return request ;
        }
        fetchData();
    },[fetchUrl]) ;
    console.table(movies)
  return (
    <div className='row' >
        <h2>{title}</h2>

        <div className='row_posters'>
             {/* several row_posters */}
             {movies.map(movie => (
                <img src={base_URL + movie.poster_path} alt={movie.name}/> 
             )) }

            
        </div> 


    </div>
  )
}

export default Row