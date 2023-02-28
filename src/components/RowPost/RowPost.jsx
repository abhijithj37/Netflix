
import React from 'react'
import './RowPost.css'
import { useState,useEffect } from 'react'
import axios from "../../axios"
import {imageUrl,API_KEY } from '../../constants/constants'
import Youtube from 'react-youtube'
function RowPost(props) {
    const [movies,setMovies]=useState([])
    const [urlId,setId]=useState("")
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
    
          autoplay: 1,
        },
      };
    useEffect(()=>{
        axios.get(props.url).then((res)=>{
            setMovies(res.data.results)
        })
    })
    const handleId=(id)=>{
     axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((res)=>{
        
        if(res.data.results.length!==0){
            setId(res.data.results[0])

        }
      })
    }
    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
                { 
                movies.map((obj)=>{
                    return( 
                <div style={{position: 'relative'}}>
               <img onClick={()=>handleId(obj.id)} className={props.isSmall?"smallPoster":"poster"} alt='poster' src={`${imageUrl+obj.backdrop_path}`}  />
               <div className='movie-name'>{obj.name||obj.title}</div>
                </div>
                    )
                 } )
                }
                 
                 
            </div>
            {urlId&&<Youtube opts={opts} videoId={urlId.key}/>}
            </div>
    )
}

export default RowPost