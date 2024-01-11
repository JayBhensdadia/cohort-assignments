import './Card.css';


function Card({name, description, interests}){
    return(
        <div className="card">
            <h1>{name}</h1>
            <p>{description}</p>
            <h3>Interests:</h3>
            <p>{interests}</p>
            <div className="buttons">
                <button>LinkedIn</button>
                <button>Twitter</button>
            </div>
        </div>
    );
}


export default Card;