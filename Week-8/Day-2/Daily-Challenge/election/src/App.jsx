import { useState } from 'react'
import './App.css'

function App() {

  const [languages, setLanguages] = useState([
      {name: "Php", votes: 0},
      {name: "Python", votes: 0},
      {name: "JavaSript", votes: 0},
      {name: "Java", votes: 0}
    ])
  
  

  const handleVote = (i) => {
    const updatedLanguages = [...languages]; // 1. Copy the array
    updatedLanguages[i] = {
      ...updatedLanguages[i],            // 2. Copy the object
      votes: updatedLanguages[i].votes + 1 // 3. Modify the field
    };
    setLanguages(updatedLanguages);          // 4. Set new state
  };

  const langVote = languages.map((lang, i) => (
    <div key={lang.name} className='language'>
    <div className='voteCount'>
      {lang.votes}
    </div>
    <div className='languageName'>
      {lang.name}
    </div>
      <button onClick={() => handleVote(i)}>Click Here</button>
    </div>
  ));

    return(
      <>
        <h1>Vote your language!</h1>
        {langVote}
      </>
    )
}

export default App

