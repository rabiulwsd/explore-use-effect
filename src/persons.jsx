import Person from "./person"
import { useEffect, useState } from "react"
import './person.css'
export default function Persons(){
    const [persons, setPersons] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setPersons(data))
    },[])
    return(
        <div className="box">
            {
                persons.map(person => <Person data={person}></Person>)
            }
        </div>
    )
}
