import React, { useEffect, useState } from 'react'
import './Chat.css';
import { useParams } from 'react-router-dom';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import db from '../firebase';
import Massage from './Massage';
import ChatInput from './ChatInput';

function Chat() {

    const { roomId } = useParams();

    const [roomDetails, setRoomDetails] = useState(null);

    const [roomMassage, setRoomMassage] = useState([])

    useEffect(() => {
        if (roomId) {
            db.collection('room').doc(roomId).onSnapshot(snapshot => {
                setRoomDetails(snapshot.data().room);
            })
        }
        db.collection("room").doc(roomId).collection("massage").orderBy("timestamp", 'asc').onSnapshot(snapshot =>
            setRoomMassage(
                snapshot.docs.map(doc => doc.data())
            )
        )
    }, [roomId])

    console.log("roomMassage>>>>>>",roomMassage);

    return (
        <div className='main__massage-container'>

            <div className="chat__header">
                <div className="chat__headerLeft">
                    <h4 className="chat__channelName">
                        <strong># {roomDetails}</strong>
                        <StarBorderOutlinedIcon />
                    </h4>
                </div>
                <div className="chat__headerRight">
                    <p>
                        <InfoOutlinedIcon className='chat__info' /> Details
                    </p>
                </div>
            </div>

            <div className="chat__massages">
                {roomMassage.map((mas) => (
                  <Massage
                        massage={mas.massage}
                        timestamp={mas.timestamp}
                        user={mas.user}
                        userImg={mas.userImg}
                        key={2}
                  />
                ))}
            </div>
            <ChatInput channelName={roomDetails} id={roomId} />
        </div>
    )
}

export default Chat