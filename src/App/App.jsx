import { useEffect, useState } from 'react';
import { clases } from '../Assets/Videos';
import ReactPlayer from 'react-player';
import './App.css'

function App() {
  const [clasesArray, setClasesArray] = useState([]);

  useEffect(()=>{
    
    const cargarClases = ()=>{
      setClasesArray(clases);
    }
    

    cargarClases();
  },[])
  const url = 'https://tyc.utn.centrodeelearning.com/videos.php?id=98808465138';
  const peticion = fetch(url)
  
  console.log(peticion);






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
