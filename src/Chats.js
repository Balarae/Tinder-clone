import React from 'react'
import Chat from './Chat'
import './Chats.css'

function Chats() {
    return (
        <div className="chats" >
            <Chat
                name="Sarah"
                message="wtf is the Pump"
                timestamp="35 minutes ago"
                profilePic="/avatars/dali.jpg"
            />
            <Chat
                name="Pitches"
                message="Fools feeling sweet with their pumps"
                timestamp="55 minutes ago"
                profilePic="/avatars/karl.jpg"
            />
             <Chat
                name="Pears"
                message="i don't even know whats so special with em"
                timestamp="55 minutes ago"
                profilePic="/avatars/orwell.jpg"
            />
            <Chat
                name="Steve"
                message="i don't even know whats so special with em"
                timestamp="55 months ago"
                profilePic="/avatars/steve.jpg"
            />

            
            
        </div>
    )
}

export default Chats
