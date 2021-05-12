import { Avatar } from '@material-ui/core'
import React, { useState } from 'react'
import "./ChatScreen.css"

function ChatScreen() {
    const[input, setInput] = useState()
    const [messages, setMessages] = useState([
        {
            name: 'steve',
            image: '/avatars/steve.jpg',
            message: 'wtf has a pump'
        },
        {
            name: 'steve',
            image: "/avatars/steve.jpg",
            message: "thses fools are ruining my day"

        },
        {
            message: 'Nine-tails Barrage'
        }
    ])

    const handleSend = (e)=>{
        e.preventDefault()
        setMessages([...messages, {message: input}])
        setInput('')
    }

    return (
        <div className="chatScreen"  >
            <p className="chatScreen__timestamp" >You matched with STEVE on 10/10/10</p>
            {messages.map(message =>(
                message.name ? (
                    <div className="chatScreen__message" >
                    <Avatar 
                        className="chatScreen__image"
                        alt={message.name}
                        src={message.image}
                     />
                    <p className="chatScreen__text" >{message.message}</p>
                </div>
                ) : (
                    <div className="chatScreen__message">
                        <p className="chatScreen__textUser" >{message.message}</p>
                    </div>
                )
                
            ))}
            
                <form  className="chatScreen__input" >
                    <input
                    value={input}
                    onChange={(e)=> setInput(e.target.value)}
                     className="chatScreen__inputField"                  
                     type="text"/>
                    <button onClick={handleSend} type="submit" className="chatScreen__inputButton" >SEND</button>
                </form>
        
        </div>
    )
}

export default ChatScreen
