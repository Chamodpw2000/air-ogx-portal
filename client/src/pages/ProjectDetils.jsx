import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ProjectDetailsHero from '../compornants/ProjectDetailsHero';
import ProjectDetailsIntro from '../compornants/ProjectDetailsIntro';


const ProjectDetils = () => {
    const [values, setValues] = useState({
        name: '',
        country: '',
        town: '',
        provider: '',
        description: '',
        duration: '',
        fee: '',
        _id: ''

    })
    const { id } = useParams()

    useEffect(() => {


        axios.get("http://127.0.0.1:3000/aiesecdb/getproject/" + id, {
            headers: {
                Authorization: `Berear ${localStorage.getItem("token")}`
            }
        })
            .then((res) => {
                if (res.data.success) {
                    setValues({
                        name: res.data.name,
                        country: res.data.country,
                        town: res.data.town,
                        provider: res.data.provider,
                        description: res.data.description,
                        duration: res.data.duration,
                        fee: res.data.fee,
                        _id: res.data._id
                    })
                }
            })
            .catch((err) => {
                console.log(err);

            });
    }, [])
    return (
        <div >

            <ProjectDetailsHero values={values}/>
            <ProjectDetailsIntro values={values}/>
           

  
        </div>
    )
}

export default ProjectDetils