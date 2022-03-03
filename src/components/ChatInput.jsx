import React, { useState } from 'react'
import './ChatInput.css';
import { Button } from '@material-ui/core';
import db from '../firebase';
import firebase from 'firebase';
import { useStateValue } from '../StateProvider';
import AttachFileIcon from '@mui/icons-material/AttachFile';
function ChatInput({ channelName, id }) {

    const [input,setInput] = useState('');

    const [{user}] = useStateValue();

    const sendMassage = (e) => {
        e.preventDefault()

        if(id){
         db.collection("room").doc(id).collection("massage").add({
             massage: input,
             timestamp: firebase.firestore.FieldValue.serverTimestamp(),
             user: user.displayName,
             userImg: user.photoURL,
         })
         setTimeout(() => {
             setInput("");
         }, 1000);
        }
    }
    console.log(input);
    return (
        <div className="chat__input">
            <form>
                <input
                    value={input}
                    onChange={e => setInput(e.target.value)} 
                    type="text"
                    placeholder={`# Enter Massage of ${channelName}`}
                    className='chat__input-item'
                />
                <Button
                    className="form__btn"
                    type="submit"
                    onClick={sendMassage}
                >
                    Send Massage
                </Button>
                <AttachFileIcon
                className="file__icon"
                />
            </form>
        </div>
    )
}

export default ChatInput