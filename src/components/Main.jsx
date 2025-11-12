import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Main() {
    const [actress, setactress] = useState([]);
    const [actor, setactor] = useState([])
    const actressList = 'https://lanciweb.github.io/demo/api/actresses/'
    const actorList = 'https://lanciweb.github.io/demo/api/actors/'
    function printPicsActress() {
        axios
            .get(actressList)
            .then(response => {
                console.log(response.data);
                setactress(response.data)
            }).catch(err => {
                console.error(err.message);
            })
    }

    useEffect(() => {
        printPicsActress()
    }, []);

    function printPicsActor() {
        axios
            .get(actorList)
            .then(response => {
                console.log(response.data);
                setactor(response.data)
            }).catch(err => {
                console.error(err.message);
            })
    }

    useEffect(() => {
        printPicsActor()
    }, []);
    const allActors = actress.concat(actor);

    return (
        <>
            <main>
                <h1>Attrici ed Attori</h1>
                <div className="container">
                    {
                        allActors.map(person => {
                            <div className="card mb-3" style="max-width: 540px;">
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={person.image} className="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{person.name}</h5>
                                            <p className="card-text"><small className="text-body-secondary">{person.birth_year}</small></p>
                                            <p className="card-text"><small className="text-body-secondary">{person.nationality}</small></p>
                                            <p className="card-text">{person.biography}</p>
                                            <p className="card-text"><small className="text-body-secondary">{person.awards}</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </main>
        </>
    )
}