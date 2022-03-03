import React from 'react'
import './Massage.css'


function Massage({ massage, timestamp, user, userImg }) {
    return (
        <div className="massage">
            <img src={userImg} />
            <div className="massage__info">
                <h4> {user}  
                    <span className='massage__timestamp'>{new Date(timestamp?.toDate()).toUTCString()} </span>
                </h4>
                <p> {massage} </p>
            </div>
        </div>
    )
}

export default Massage