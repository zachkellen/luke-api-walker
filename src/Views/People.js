import { useParams } from "react-router";
import React, { useEffect, useState } from 'react';
import axios from "axios";
import {Link} from 'react-router-dom';


const People = (props) => {
    const{id} = useParams();
    const [response, setResponse] = useState({})
    const [homeWorld, setHomeWorld] = useState('')
    const [homeLink, setHomeLink] = useState('')


    useEffect(() =>{
        console.log("Running Axios", `https://swapi.dev/api/people/${id}/`);
        axios.get(`https://swapi.dev/api/people/${id}/`)
            .then(res => {
                console.log(res)
                setResponse(res.data)
            })
            .catch(err => console.log(err));
    }, [id])

    useEffect(() => {
        // console.log(homeLink)
        axios.get(response.homeworld)
            .then(res =>{
                setHomeWorld(res.data)
            })
            .catch(err => console.log(err))
    }, [response])

    return (
        <div>
            { !response.name ?
                <h1>Loading...</h1>
            :
            <div>
                <h1>{response.name}</h1>
                <br/>
                <p><b>Home World: </b><Link to={homeLink} >{homeWorld.name}</Link></p>
                <p><b>Height: </b>{response.height}</p>
                <p><b>Mass: </b>{response.mass}</p>
                <p><b>Hair Color: </b>{response.hair_color}</p>
                <p><b>Skin Color: </b>{response.skin_color}</p>
            </div>}
        </div>
    )
}

export default People;