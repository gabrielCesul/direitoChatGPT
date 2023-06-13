import objeto from './Telas.module.css'
import img from './Cima.png'
import img2 from './Logo.png'
import img3 from './Meio.png'
import img4 from './Fim.png'

function Telas() {

  return (
    <div>
        <section className={objeto.section1}> 
          <header >
            <div className={objeto.header}>
            <img className={objeto.logo} src={img2} />
            <h1 className={objeto.direito}>Direito</h1>
            <h1 className={objeto.gpt}>GPT</h1>
            <div className={objeto.inicio}>
              <a href="">
              <p className={objeto.login}>Inicio</p>
              </a>
              <a href="">
              <p className={objeto.login}>Login</p>
              </a>
              <button className={objeto.cadastro}>Cadastro</button>
              </div>
            </div>
          </header>

          <section className={objeto.section4}>
            <div className={objeto.texto}> 
                  <p className={objeto.txt}>Seja Bem-vindo ao</p>
                  <h1 className={objeto.txt2}>DireitoGPT</h1>
                  <p className={objeto.txt3}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. (AQUI SERIA UMA EXPLICAÇÃO GERAL)</p>
                  <div className={objeto.botoes}>
                  <a href="#duvida">
                    <button className={objeto.botao}>Dúvidas</button> 
                  </a>
                  <a href="#juri">
                    <button className={objeto.botao}>Juri</button>
                  </a>
                  </div>
            </div>  

            <div> 
              <img className={objeto.img} src={img} />
            </div>

          </section>

          </section>

        <section className={objeto.section2} id='duvida'> 

            <section className={objeto.section5}>
            <div> 
              <img className={objeto.img2} src={img3} />
            </div>

            <div className={objeto.texto2}> 
                  <h1 className={objeto.txt2}>Dúvidas</h1>
                  <p className={objeto.txt3}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. (AQUI SERIA UMA EXPLICAÇÃO GERAL)</p>
                  <div className={objeto.botoes}>
                    <button className={objeto.botao}>Dúvidas</button> 
                  </div>
            </div>  

            </section>


        </section>
        
        <section className={objeto.section3} id='juri'> 

        <section className={objeto.section5}>
          <div className={objeto.texto}> 
                    <h1 className={objeto.txt6}>Simule um debate online</h1>
                    <p className={objeto.txt3}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. (AQUI SERIA UMA EXPLICAÇÃO GERAL)</p>
                    <div className={objeto.botoes}>
                      <button className={objeto.botao}>Juri</button>
                    </div>
              </div>  

            <div> 
              <img className={objeto.img3} src={img4} />
            </div>
            </section>
       
        </section>

        <footer className={objeto.footer}>
          <h1 className={objeto.direito2}>© Direito</h1>
          <h1 className={objeto.gpt2}>GPT</h1>
          <p className={objeto.txtfooter}>Todos os direitos reservados</p>

        </footer>

    </div>
    
 
  )
}

export default Telas