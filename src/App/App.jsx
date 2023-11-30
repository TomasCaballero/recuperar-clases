import {  useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import './App.css'
import { clases } from '../../public/Assets/Videos';

function App() {
  const [clasesArray, setClasesArray] = useState([]);

  const ruta = "https:zoom-fepp.s3.amazonaws.com/98808465138/98808465138"


  useEffect(()=>{
    const cargarVideos = () => {
      setClasesArray(clases);
    }

    setTimeout(()=>{
      cargarVideos();
    },1000)

  },[clasesArray])

  return (
    <div className='layout'>

      <h1>Clases Diplomatura</h1>
      <div className="clasesContainer">
        {
          clasesArray === clases ? (
            clasesArray.map((clase) => {
              return (
                <ReactPlayer key={clase.url} url={ruta+clase.url} controls className='video' />
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
              <a href={ruta+claseUrl.url} target="_blank" rel="noopener noreferrer" key={ruta+claseUrl.url}>{ruta+claseUrl.url}</a>
            )
          })
        }
      </div>

    </div>
  )
}

export default App