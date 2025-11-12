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
                    <div className="card"></div>
                </div>
            </main>
        </>
    )
}