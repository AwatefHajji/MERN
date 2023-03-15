import React, { useState, useEffect } from 'react'
import axios from "axios"
import { useParams, useNavigate } from 'react-router-dom'
const Display = () => {
    const [choix, setChoix] = useState([])
    const { id, choose } = useParams()
    const Navigate = useNavigate()
    useEffect(() => {
        const url = `https://swapi.dev/api/${choose}/${id}/`;
        axios.get(url)
            .then(res => {
                console.log(res)
                setChoix(res.data)
            })
            .catch(err => console.log(err))
            Navigate("/error", {replace: true})

    }, [choose, id])
    return (
        <div>
            {choix ?
                <div>

                    {(choose === "people") ?
                        (<div>
                            <h1>{choix.name}</h1>
                            <h4>Height:</h4>{choix.height}
                            <h4>Mass:</h4>{choix.mass}
                            <h4>Hair color:</h4>{choix.hair_color}
                            <h4>Skin color:</h4>{choix.skin_color}
                        </div>)
                        : <div>
                            <h1>{choix.name}</h1>
                            <h4>Climat:</h4>{choix.climate}
                            <h4>Terrain:</h4>{choix.terrain}
                            <h4>Surface Water:</h4>{choix.surface_water}
                            <h4>Population:</h4>{choix.population}

                        </div>}



                </div> : <p>loading...</p>
            }


        </div>
    )
        }

    export default Display