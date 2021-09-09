import { useParams } from "react-router";
import React, { useEffect, useState } from 'react';
import axios from "axios";


const Planets = (props) => {
    const{id} = useParams();
    const [response, setResponse] = useState({})


    useEffect(() =>{
        console.log("Running Axios", `https://swapi.dev/api/planets/${id}/`);
        axios.get(`https://swapi.dev/api/planets/${id}/`)
            .then(res => {
                console.log(res)
                setResponse(res.data)
            })
            .catch(err => console.log(err));
    }, [id])

    return (
        <div>
        { !response.name ?
        <div>
            <h1>These are not the droids you're looking for!</h1>
            <img src='https://starwarsblog.starwars.com/wp-content/uploads/sites/6/2017/05/ANH-Ben-identification.jpg' alt="Obi Wan"></img>
        </div>
        :
        <div>
            <h1>{response.name}</h1>
            <br/>
            <p><b>Climate: </b>{response.climate}</p>
            <p><b>Terrain: </b>{response.terrain}</p>
            <p><b>Surface Water: </b>{response.surface_water ? 'True' : "False"}</p>
            <p><b>Population: </b>{response.population}</p>
        </div>}
    </div>
    )
}

export default Planets;