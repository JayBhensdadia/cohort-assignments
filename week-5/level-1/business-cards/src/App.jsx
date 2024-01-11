import { useState } from 'react'
import Card from './components/Card/Card';
import CreateCard from './components/CreateCard/CreateCard';
import './App.css'

function App() {
  const [cards, setCards] = useState([
    {
      name:"Jay",
      description:"full stack develooper",
      interests:"coding, movies"
    }
  ]);
  
  return (
    <div className='app'>

      <CreateCard cards={cards} setCards={setCards}/>

      { cards.map((card)=>{
        return(
          <Card 
            name={card.name} 
            description={card.description}
            interests={card.interests}
          />);
      })}
    </div>
  );
}

export default App
