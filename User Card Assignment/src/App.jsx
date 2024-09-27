import { useState } from 'react';
import './App.css'
import data from './assignmentData.json';
import CardList from './components/CardList/CardList';


// Need to grab the name, avatar, and email
function App() {

  const [userData, setCardData] = useState(data);

  return (
    <div>      
      <h1>Assignment 1 - Aiden Wu</h1>

      <CardList cardData={userData} />
    </div>
  )
}

export default App