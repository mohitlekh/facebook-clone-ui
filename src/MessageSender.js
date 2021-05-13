import React,{ useState } from 'react';
import { Avatar } from '@material-ui/core';
import './MessageSender.css';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from './StateProvider.js';
import db from "./firebase.js";
import firebase from 'firebase'
function MessageSender() {
    const [{ user }, dispatch] = useStateValue();

    const[input, setInput] = useState('');
    const[imgUrl, setImageUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

///some stuff of db
db.collection('posts').add({
    message: input,
    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    profilePic: user.photoURL,
    userName: user.displayName,
    image: imgUrl,
});        

        setInput("");
        setImageUrl("");
    };

    return (
        <div className="messagesender">
            <div className="messagesender__top">
                <Avatar src={user.photoURL} />
                <form>
                    <input 
                    value = {input}
                    onChange={(e) => setInput(e.target.value)}
                    className="messagesender__input"
                    placeholder={`What's on your mind  ${user.displayName}?`} />

                    <input 
                    value = {imgUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    placeholder={`Image Url is optional`} />
                    <button onClick={handleSubmit} type="submit">
                        Hidden submit
                    </button>
                </form>
            </div>
            <div className="messagesender__bottom">
                <div className="messagesender__option">
                    <VideocamIcon style={{color: 'red'}} />
                    <h3>Live Video</h3>
                </div>

                <div className="messagesender__option">
                    <PhotoLibraryIcon style={{color: 'green'}} />
                    <h3>Photo/Video</h3>
                </div>

                <div className="messagesender__option">
                    <InsertEmoticonIcon style={{color: 'yellow'}} />
                    <h3>Feeling</h3>
                </div>
            </div>
            
        </div>
    )
}

export default MessageSender
