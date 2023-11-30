import {  useEffect, useState } from 'react';
import { clases } from '../Assets/Videos';
import ReactPlayer from 'react-player';
import './App.css'

function App() {
  const [clasesArray, setClasesArray] = useState([]);
  
  useEffect(()=>{
    const cargarVideos = () => {
      setClasesArray(clases);
    }

    setTimeout(()=>{
      cargarVideos();
    },1000)

    clasesArray.map((clase)=>{
      console.log(clase.url)
    })
  },[clasesArray])

  return (
    <div className='layout'>

      <h1>Clases Diplomatura</h1>
      <div className="clasesContainer">
        {
          clasesArray === clases ? (
            clasesArray.map((clase) => {
              return (
                <ReactPlayer key={clase.url} url={clase.url} controls className='video'/>
              )
            })
          ) : (
            <h3 className='mensajeCargando'>Cargando Videos...</h3>
          )
        }
      </div>

      <div className="clasesContainer">
        {
          clasesArray.map((claseUrl)=> {
            return(
              <a href={claseUrl.url} target="_blank" rel="noopener noreferrer" key={claseUrl.url}>{claseUrl.url}</a>
            )
          })
        }
      </div>

    </div>
  )
}

export default App
