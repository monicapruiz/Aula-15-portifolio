import Header from "../components/Header"
import Title from "../components/Title"
import home from "../assets/home.svg"
import styles from "../styles/pages/home.module.css"
import { Alien, BracketsCurly, AddressBook } from "@phosphor-icons/react"

const Home = () => {
  return (
    <>
      <Header
        title="Site da Mônica"
        image={home}
      />
      <main>
        <div className={styles.homeContainer}>
          <div className={styles.cardContainer}>
            <Alien size={150} color="#686AAC" weight="thin" />
            <Title className={styles.cardTitle} content="Vida" />
            <p className={styles.cardDescription}> Eu conto um pouquinho sobre mim, minha formação,
              a história da minha migração de carreira, gostos e curiosidades. </p>
          </div>


          <div className={styles.cardContainer}>
            <BracketsCurly size={150} color="#686AAC" weight="thin" />
            <Title className={styles.cardTitle} content="Código" />
            <p className={styles.cardDescription}>Mostro meu portfólio.
              Tudo o que aprendi até o momento dando destaque para alguns dos projetos que criei enquanto estudo programação.</p>
          </div>

          <div className={styles.cardContainer}>
            <AddressBook size={150} color="#686AAC" weight="thin" />
            <Title classname={styles.cardTitle} content="Contatos" />
            <p className={styles.cardDescription}>Entre em contato comigo.
              Seja para entrevistas de emprego como deva ou para trocarmos ideias sobre os estudos.</p>
          </div>
        </div>
      </main >
    </>
  )
}

export default Home
