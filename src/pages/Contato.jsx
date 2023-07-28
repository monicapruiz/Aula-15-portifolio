import Header from "../components/Header"
import lapis  from '../assets/lapis.png'
import styles from "../styles/pages/contato.module.css"
import { useState } from "react"

const Contato = () => {
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [mensagem, setMensagem] = useState("")

  function handleInputNome(e) {
    setNome(e.target.value)
  }

  function handleInputEmail(e) {
    setEmail(e.target.value)
  }

  function handleInputMensagem(e) {
    setMensagem(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(nome, email, mensagem)
  }

  return (
    <>
      <Header
        title="Entre em contato com a página para que seu cursinho popular seja divulgado"
        image={lapis}
      />
      <main>
        <form className={styles.form} onSubmit={() => { }}>
          <input
            className={styles.formInput}
            type="text"
            placeholder="Digite  o nome da instituição"
            onChange={handleInputNome}
            value={nome}
          />
          <input
            className={styles.formInput}
            type="email"
            placeholder="Digite o email da instituição ou pessoal"
            onChange={handleInputEmail}
            value={email}
          />
          <textarea
            className={styles.formInput}
            placeholder="Digite sua mensagem juntamente com as informações do seu cursinho"
            onChange={handleInputMensagem}
            value={mensagem}
          />
          <button
            className={styles.formButton}
            type="submit">Enviar Mensagem
          </button>
        </form>
      </main>
    </>
  )
}

export default Contato
