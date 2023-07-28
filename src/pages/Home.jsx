import Header from "../components/Header"
import Title from "../components/Title"
import menino from "../assets/menino.jpg"
import styles from "../styles/pages/home.module.css"
import { Book, BracketsCurly, AddressBook } from "@phosphor-icons/react"

const Home = () => {
  return (
    <>
      <Header
        title="Educação Libertária"
        image={menino}
      />
      <main>
        <div className={styles.homeContainer}>
          <div className={styles.cardContainer}>
            <Book size={150} color="red" weight="thin" />
            <Title className={styles.cardTitle} content="Educação - Ubuntu" />
            <p className={styles.cardDescription}> Eu Sou Porque Nós Somos  </p>
          </div>


          <div className={styles.cardContainer}>
            <BracketsCurly size={150} color="red" weight="thin"/>
            <Title className={styles.cardTitle} content="Cursinho populares" />
            <p className={styles.cardDescription}>Saiba o endereço do cursinho popular mais próximo de sua casa ou de seu emprego.</p>
          </div>

          <div className={styles.cardContainer}>
            <AddressBook size={150} color="red" weight="thin" />
            <Title classname={styles.cardTitle} content="Contato" />
            <p className={styles.cardDescription}>Os cursinhos que gostaria de ter seu projeto divulgado entre em contato, por favor .</p>
          </div>
        </div>
      </main >
    </>
  )
}

export default Home
