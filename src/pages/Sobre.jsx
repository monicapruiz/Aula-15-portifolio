import Header from "../components/Header"
import monica from "../assets/monica.jpg"
import sobre from '../assets/sobre.svg'
import styles from "../styles/pages/sobre.module.css"

const Sobre = () => {
  return (
    <>
      <Header 
        title="Descubra mais sobre a Mônica" 
        image={sobre} 
      />
      <h1 className={styles.titulo}>SOBRE</h1>
      <div id = "foto" className={styles.foto}>
      <img src={monica} alt="Foto da Mônica" />
      <p>Olá, pessoal! Me chamo Mônica, tenho 27 anos e atualmente sou aluna da turma de Front  end do Reprograma. A tecnologia apareceu para mim como uma oportunidade de mudar de carreira profissional. Por fim, estou curtindo muito este momento! Abraços!</p>
      </div>
    </>
  )
}

export default Sobre
