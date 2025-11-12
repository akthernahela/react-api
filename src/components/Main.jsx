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
    return (
        <>
            <main>
                <h1>Attrici ed Attori</h1>
                <div className="container">
                    <div class="card mb-3" style="max-width: 540px;">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="..." class="img-fluid rounded-start" alt="..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}