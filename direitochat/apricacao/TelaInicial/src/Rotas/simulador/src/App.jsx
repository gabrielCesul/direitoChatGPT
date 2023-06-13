import objeto from './App.module.css';
import Chat from './Chat';
import Footer from './Footer';
import Header from './Header';
import { useState, useEffect } from 'react'; 
import GridLoader from "react-spinners/GridLoader";


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
    <div className={objeto.loader} >
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

            <Header/>
            
            <Chat/>
            
            <Footer/>

          </div>
        )
      }

    </div>
    </>
  )
}

export default App
