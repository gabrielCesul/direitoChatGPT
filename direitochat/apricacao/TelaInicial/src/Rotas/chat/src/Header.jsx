import objeto from './Header.module.css'
import img2 from './Logo.png'
import {Link } from 'react-router-dom';

function Header () { 


return (
    <>
          <header >
            <div className={objeto.header}>
            <img className={objeto.logo} src={img2} />
            <h1 className={objeto.direito}>Direito</h1>
            <h1 className={objeto.gpt}>GPT</h1>
            <div className={objeto.inicio}>
              
              <a>
                <Link to='/Duvida'>
                  <p className={objeto.duvidas}>Dúvidas</p>
                </Link>
              </a>

              <a>
                <Link to='/Simulador'>
                  <p className={objeto.simulador}>Simulador</p>
                </Link>
              </a>

              <a>
                <Link to='/'>
                  <p className={objeto.usuario}>Início</p>
                </Link>
              </a>

              <Link to='/'>
                <button className={objeto.logout}>Logout</button>
              </Link>

              </div>
            </div>
          </header>
    </>
  )
}


export default Header;