import {  useEffect, useState } from 'react';
import { clases } from '../Assets/Videos';
import ReactPlayer from 'react-player';
import './App.css'

function App() {
  const [clasesArray, setClasesArray] = useState([]);

    
  const cargarVideos = async () => {
    await setClasesArray(clases);
    await console.log(clasesArray);
  }
  
  useEffect(()=>{
    cargarVideos();
  },[clasesArray])


  return (
    <div className='layout'>
      <h1>Clases Diplomatura</h1>
      <div className="clasesContainer">
        
        {
          clasesArray.map((clase) => {
            return (
              <ReactPlayer key={clase} url={clase} controls className='video'/>
            )
          })
        }
      </div>

    </div>
  )
}

export default App
