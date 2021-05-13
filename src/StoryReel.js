import React from 'react';
import './StoryReel.css';
import Story from './Story.js';

function StoryReel() {
    return (
        <div className="storyReel">
            <Story 
                image="https://emailtuna.com/images/preview/156/156506-outdoor-voices-new-colors-in.jpg"
                profilesrc="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2020/09/09/924101-fotojet-2020-09-09t194840.665.jpg"
                title="Raftaar" />
            
            <Story 
                image="https://i.pinimg.com/originals/0f/fe/db/0ffedb8bbad3126f2f7ffb144a357a53.jpg"
                profilesrc="https://yt3.ggpht.com/a/AATXAJyVne9IHKW7JsD4nR9A48UF_4PvlLfxVFtSDElJ_w=s900-c-k-c0x00ffffff-no-rj"
                title="Bali" />

            <Story 
                image="https://pbs.twimg.com/media/C9MsCjIWsAAO_zZ.jpg"
                profilesrc="https://pbs.twimg.com/profile_images/1295444316320661504/EM-_E5U2.jpg"
                title="Fotty Seven" />

            <Story image="https://i.pinimg.com/originals/b0/1e/65/b01e65a17edd8b38c8f850fb2a851c56.jpg"
                profilesrc="https://1.bp.blogspot.com/-ECD032V8Jzs/X28gIODj5OI/AAAAAAAADu8/cDiX4lLB9nU-kq3jdy70xXFZ33Lci9u0wCLcBGAsYHQ/s1168/Krsna.webp"
                title="Krsna" />

                <Story 
                image="https://i.pinimg.com/originals/0f/fe/db/0ffedb8bbad3126f2f7ffb144a357a53.jpg"
                profilesrc="https://yt3.ggpht.com/a/AATXAJyVne9IHKW7JsD4nR9A48UF_4PvlLfxVFtSDElJ_w=s900-c-k-c0x00ffffff-no-rj"
                title="Bali" />

        </div>
    )
}

export default StoryReel;
