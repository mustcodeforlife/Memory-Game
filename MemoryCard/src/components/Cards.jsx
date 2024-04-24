import Card from './Card.jsx';
import {details,shuffle} from './data.js';
import {useState} from 'react';
import '../styles/Cards.css'


export default function Cards({scoreFunction}){

   let initialState = [...details];
    const [info,setInfo] = useState([...initialState]);
   const [clicked,setClicked] = useState(new Set());
   
   function handleClick(arg){
    if(clicked.has(arg)){
        setClicked(new Set());
        setInfo([...details]);
        scoreFunction(false);
    }
    else {
        let temp = new Set(clicked);
        temp.add(arg);
        if(temp.size == 6){
            scoreFunction(true);
            setClicked(new Set());
            setInfo([...details]);
        }
        else {
            shuffle(initialState);
            setClicked(temp);
            setInfo([...initialState]);
            scoreFunction(true);
        }
    }
    
   }

    return (
        <div id='container'>
            <Card clickFunction={handleClick} cardInfo={info[0]}/>
            <Card clickFunction={handleClick} cardInfo={info[1]}/>
            <Card clickFunction={handleClick} cardInfo={info[2]}/>
            <Card clickFunction={handleClick} cardInfo={info[3]}/>
            <Card clickFunction={handleClick} cardInfo={info[4]}/>
            <Card clickFunction={handleClick} cardInfo={info[5]}/>
            
        </div>
    );
}