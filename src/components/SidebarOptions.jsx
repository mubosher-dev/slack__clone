import React from 'react';
import './SidebarOptions.css';
import { useHistory } from "react-router-dom";
import db from '../firebase'

function SidebarOptions({ Icon, Title, id, addChannelOption }) {
    const history = useHistory();

    const selectChannel = () => {
        if (id) {
            history.push(`/room/${id}`);
        } else {
            history.push("/title/");
        }
    };


    const addChannel = () => { 
        const channelName = prompt("Please enter channel name");

        if (channelName){
            db.collection("room").add({
                room: channelName
            })
        }
    }

    return (
        <div 
            className={Icon ? "sidebar__options big" : "sidebar__options small"}
            onClick={addChannelOption ? addChannel : selectChannel}
        >
            {Icon && <Icon className="sidebarOption__icon" />}
            {Icon ? (<h3>{Title}</h3>) : (<h3 className='sidebarOption__channelName'> <span className="sidebarOptions__hashtag">#</span>   {Title} </h3>)}
        </div>
    )
}

export default SidebarOptions