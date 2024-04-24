import {useEffect} from 'react';
import {useState} from 'react';
import '../styles/Card.css'

export default function Card({clickFunction,cardInfo}){
    const [image,setImage] = useState(null);

    useEffect(()=>{
        let id = cardInfo.id;
        fetch(`https://rickandmortyapi.com/api/character/${cardInfo.id}`,{
            mode:'cors'
        }).then(function(response){
            return response.json();
        }).then(function(response){
            setImage(response.image);
        });
    },[cardInfo]);

    return (
        <div id='Card'>
            <img  onClick={()=>clickFunction(cardInfo.id)} src={image} />
            <label>{cardInfo.Name}</label>
        </div>

    );
}