import React, { useEffect, useState } from 'react';
// import axios from "axios";
import { useHistory } from "react-router-dom";

const DropDown = (props) => {
    const [topic, setTopic] = useState('people')
    const [id, setID] = useState('1')
    // const [response, setResponse] = ([])
    const history = useHistory();

    // useEffect(() =>{
    //     console.log("Running Axios");
    //     axios.get(`https://swapi.dev/api/${topic}/${id}/`)
    //         .then(res => {
    //             console.log(res)
    //             setResponse(res.data)
    //         })
    //         .catch(err => console.log(err));
    // }, [topic, id])

    const submitHandler = (event) => {
        event.preventDefault();
        history.push(`/${topic}/${id}`);
    }

    return (
        <div>
            <form className='flexed' onSubmit={submitHandler}>
                <p>Search For: </p>
                <select name='topic' onChange={(event) => setTopic(event.target.value)}>
                    <option value='people'>People</option>
                    <option value='planets'>Planets</option>
                    <option value='films'>Films</option>
                </select>
                <p>ID: </p>
                <input type='number' onChange={(event) => setID(event.target.value)}/>
                <input type='submit' value='Search'></input>
            </form>
        </div>
    )
}

export default DropDown;