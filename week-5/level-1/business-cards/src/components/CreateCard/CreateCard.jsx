import { useState } from "react";
import './CreateCard.css';

function CreateCard(props){
    const [name ,setName] = useState("");
    const [description, setDescription] = useState("");
    const [interests, setInterests] = useState("");


    return(
        <div className="create-card">
            <input 
                type="text" 
                placeholder="name" 
                onChange={(e)=>{
                    setName(e.target.value);
                }}/>

            <input 
                type="text" 
                placeholder="description" 
                onChange={(e)=>{
                    setDescription(e.target.value);
                }}/>
            <input 
                type="text" 
                placeholder="interests" 
                onChange={(e)=>{
                    setInterests(e.target.value);
                }}/>

            <button onClick={()=>{

                const cards = props.cards;
                const newCard = {
                    name,
                    description,
                    interests
                }
                props.setCards([...cards,newCard]);

            }}>Add</button>
        </div>
    );
}


export default CreateCard;