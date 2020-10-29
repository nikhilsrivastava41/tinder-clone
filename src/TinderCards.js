import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css'; 
import axios from './axios';
const TinderCards = () => {
    const [people, setPeople] = useState([]);
    useEffect(() => {
       async function fetchData(){
            const req = await axios.get('/tinder/cards');
            setPeople(req.data);
       }
       fetchData();
    }, [])
    console.log(people);
    const swiped=(direction, nameToDelete)=>{
        console.log(nameToDelete + " got deleted");
    }
    const outOfFrame=(name)=>{
        console.log(name + " out of the screen");
    }
    return (
        <div className="tindercards">
            <div className="tinderCards__cardContainer">
                {people.map((person)=>{
                    return (
                        <TinderCard className="swipe"
                        key={person.name}
                        preventSwipe={["up","down"]}
                        onSwipe={(dir)=>swiped(dir,person.name)}
                        onCardLeftScreen={()=>outOfFrame(person.name)}
                        >
                        <div style={{backgroundImage: `url(${person.imgUrl})`}}
                        className="card">
                            <h3 style={{color: "white"}}>{person.name}</h3>
                        </div>
                        </TinderCard>
                    )
                })}
            </div>
        </div>
    );
}

export default TinderCards;
