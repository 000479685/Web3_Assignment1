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

      {console.log("Using this data : ", userData)}
      {console.log(typeof(userData), userData[0])}
      {console.log(userData[0].data)}
      <CardList userData={userData[0].data} />
    </div>
  )
}

export default App