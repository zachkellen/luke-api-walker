import { useParams } from "react-router";
import React, { useEffect, useState } from 'react';
import axios from "axios";


const Films = (props) => {
    const{id} = useParams();
    const [response, setResponse] = useState({})


    useEffect(() =>{
        console.log("Running Axios", `https://swapi.dev/api/films/${id}/`);
        axios.get(`https://swapi.dev/api/films/${id}/`)
            .then(res => {
                console.log(res)
                setResponse(res.data)
            })
            .catch(err => console.log(err));
    }, [id])

    return (
        <div>
        { !response.title ?
        <div>
            <h1>These are not the droids you're looking for!</h1>
            <img src='https://starwarsblog.starwars.com/wp-content/uploads/sites/6/2017/05/ANH-Ben-identification.jpg' alt="Obi Wan"></img>
        </div>
        :
        <div>
            <h1>{response.title}</h1>
            <br/>
            <p><b>Episode: </b>{response.episode_id}</p>
            <p><b>Release Date: </b>{response.release_date}</p>
            <p><b>Director: </b>{response.director}</p>
            <p><b>Opening Crawl: </b>{response.opening_crawl}</p>
        </div>}
    </div>
    )
}

export default Films;