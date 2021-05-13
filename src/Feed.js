import React, { useEffect, useState } from 'react';
import './Feed.css';
import StoryReel from './StoryReel.js';
import MessageSender from './MessageSender';
import Post from './Post.js';
import db from './firebase.js';


function Feed() {
    const[ posts, setPosts ] = useState([]);

    useEffect(() => {
        db.collection("posts").orderBy("timestamp", "desc").onSnapshot((snapshot) => setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))));
    }, []);
    console.log(posts);
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />

            {posts.map((post) => (
                <Post
                    key = {post.id}
                    profilePic={post.data.profilePic}
                    message={post.data.message}
                    timestamp=''
                    userName={post.data.userName}
                    image={post.data.image} 
                    />
            ))}

            <Post 
            profilePic = 'https://cdn.dnaindia.com/sites/default/files/styles/full/public/2020/09/09/924101-fotojet-2020-09-09t194840.665.jpg'
            message = 'this is cool mohit'
            timestamp = '26-03-21  03:17AM'
            userName = 'kalamkaarraftaar'
            image = 'https://225508-687545-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/05/Badshah-image.jpg' 
            />
            

            <Post 
            profilePic = 'https://225508-687545-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/05/Badshah-image.jpg'
            message = 'this is cool simran'
            timestamp = '26-03-21  03:17AM'
            userName = 'Badboyshah'
            image = '' 
            />
        </div>
    )
}

export default Feed;
