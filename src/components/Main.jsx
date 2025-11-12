import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Main() {
    const [actress, setactress] = useState([])
    const actressList = 'https://lanciweb.github.io/demo/api/actresses/'
    const actorList = 'https://lanciweb.github.io/demo/api/actors/'
    function printPics() {
        axios
            .get(actressList)
            .then(response => {
                console.log(response.data.results);
                setactress(response.data.results);
            }).catch(err => {
                console.error(err.message);
            })
    }
    return (
        <>
            <main>
                <div></div>
            </main>
        </>
    )
}