import Telas from "./Telas.jsx";
import { useState, useEffect } from 'react'; 
import GridLoader from "react-spinners/GridLoader";
import objeto from './App.module.css';

function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() =>{
      setLoading(false)
    }, 800)
  }, [])


  return (
    <>
    <div className={objeto.loader}>
    {
        loading ?(

        <GridLoader
        color={'#2C7DA0'}
        loading={loading}
        size={30}
      />
      )
        :
        (
          <div className={objeto.principal}>

            <Telas/>

          </div>
        )
      }


    </div>
 
    </>
  )
}

export default App
