import React, { useEffect, useState } from 'react'
import TinderCard from 'react-tinder-card';
import './TinderCards.css'
import database from './firebase'

function TinderCards() {
    const[people, setPeople] = useState([
        {
            name: 'Steve Jobs',
            url: '/avatars/steve.jpg'
        },
        {
            name: 'Raph',
            url: "/avatars/raphael.jpg"
        },
    ]);

    useEffect(() => {
        // setPeople using Firebase
        const unsubscribe = database.collection('people').onSnapshot((snapshot)=>{
            setPeople(snapshot.docs.map(doc => doc.data()))
        });

        return ()=>{
            // This is the cleanUp function it cleansUp the listener above 
            unsubscribe()
        }
       
        
    }, [])

    
    return (
        <div>
            <h1>Tinder cards</h1>
            <div className="tinderCards__cardContainer">
                {
                people && 
                    people.map(person =>(
                        <TinderCard
                            className="swipe"
                            key={person.name}
                            preventSwipe = {['up', 'down']}
                        >
                            <div className="card" style={{backgroundImage: `url(${person.url})`}}  >
                                <h3>{person.name}</h3>

                            </div>
                        </TinderCard>
                    ))
                 }
            </div>
            

        </div>
    )
}

export default TinderCards
