import { Avatar } from '@material-ui/core'
import React from 'react'
import './Story.css'

function Story({image, profilesrc, title}) {
    return (
        <div className="story"
        style={{
            backgroundImage: `url(${image})`
          }}>
            <Avatar src={profilesrc}  className="story__avatar" />
            <h4>{title}</h4>
            
        </div>
    )
}

export default Story
