import { useState } from 'react'
import Cards from './components/Cards.jsx'
import './styles/App.css'
import Modal from './components/Modal.jsx'


function App() {
  const [count, setCount] = useState(0);
  const [bestCount,setBestCount] = useState(0);
  const [modalIsOpen,setModalIsOpen] = useState(false);
  const [modalMessage,setModalMessage] = useState('');

  function score(pass){
    if(pass){
      if(count === 5){
        setCount(0);
        bestCount<6 ? setBestCount(bestCount+1):6;
        setModalIsOpen(true);
        setModalMessage("YOU WON!");
      }
      else if(count >= bestCount){
        setBestCount(bestCount+1);
        setCount(count+1);
      }
      else {
        setCount(count+1);
      } 
    }
    else{
      setModalIsOpen(true);
      setModalMessage("YOU LOST!TRY AGAIN?");
      setCount(0);
    }
    
  }

  return (
    <div className='main'>
      <div className='topBar'>
          <h1>Memory Card Game</h1>
          <div className='scoreBoard'>
            <span>Current Score : {count}</span>
            <span>Best Score : {bestCount}</span>
          </div>
      </div>
      <Modal modalIsOpen={modalIsOpen} modalMessage={modalMessage} setModalIsOpen={setModalIsOpen} />
      <Cards scoreFunction={score}/>
    </div>
  );
}

export default App
