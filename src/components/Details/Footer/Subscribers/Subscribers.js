import React, { useEffect, useState} from 'react'
import Auxiliary from '../../../../hoc/Auxiliary'
import './Subscribers.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const Subscribers = () => {

    const [subscribers, setSubscribers] = useState([]);

    useEffect(() => {
        fetch("http://localhost/reactphp/getemail.php")
        .then(res => res.json())
        .then(
            (result) => {
                setSubscribers(result);
            }
        )
    }, [])

    return (
        <Auxiliary>
            <div className="emailDiv">
            {
                subscribers.map((email, index) => (
                    <div className="card" key={index}>
                    <p id="icon">
                        <FontAwesomeIcon icon={faUser} />
                    </p>
                    <h4 style={{padding: "5px 8px"}}><b>{email.email}</b></h4>
                    <p style={{padding: "5px 8px"}}>{email.date}</p>
                    </div>
                ))
            }
            </div>    
        </Auxiliary>
    )
}

export default Subscribers;
