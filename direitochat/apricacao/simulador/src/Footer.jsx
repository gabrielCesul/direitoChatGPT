import objeto from './Footer.module.css'

function Footer () { 

return (
    <>
        <footer className={objeto.footer}>
          <h1 className={objeto.direito2}>© Direito</h1>
          <h1 className={objeto.gpt2}>GPT</h1>
          <p className={objeto.txtfooter}>Todos os direitos reservados</p>
        </footer>
    </>
  )
}


export default Footer;