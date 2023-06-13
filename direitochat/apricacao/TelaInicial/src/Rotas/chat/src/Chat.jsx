import objeto from './Chat.module.css'
import envioImagem from './envio.png'

const Chat = () =>  {

return (
    <>
    <div className={objeto.conversa}>
        <p className={objeto.letra}>DÚVIDAS</p>
    </div>
   
    <div className={objeto.mensagem2} >
        <input className={objeto.mensagem} type="text" placeholder='Escreva sua dúvida'/>
        <button className={objeto.seubotao}>
        <img className={objeto.envio} src={envioImagem} alt=""/>
        </button>
    </div>     
    
    </>
  )
}


export default Chat;
