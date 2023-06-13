import objeto from './App.module.css'
import Chat from './Chat'
import Footer from './Footer'
import Header from './Header'


function App() {


  return (
    <>
    <div className={objeto.principal} >
      <Header/>
      
        <Chat/>
      
      <Footer/>
    </div>
    </>
  )
}

export default App
