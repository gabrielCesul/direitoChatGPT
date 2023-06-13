import objeto from './Header.module.css'
import img2 from './Logo.png'



function Header () { 

return (
    <>
          <header >
            <div className={objeto.header}>
            <img className={objeto.logo} src={img2} />
            <h1 className={objeto.direito}>Direito</h1>
            <h1 className={objeto.gpt}>GPT</h1>
            <div className={objeto.inicio}>
              <a href="">
              <p className={objeto.duvidas}>Dúvidas</p>
              </a>
              <a href="">
              <p className={objeto.simulador}>Simulador</p>
              </a>
              <a href="">
              <p className={objeto.usuario}>Usuário</p>
              </a>
              <button className={objeto.logout}>Logout</button>
              </div>
            </div>
          </header>
    </>
  )
}


export default Header;