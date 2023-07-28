import { useState, useEffect } from "react"
import Header from "../components/Header"
import styles from "../styles/pages/cursinho.module.css"
import Title from "../components/Title"
import { ArrowSquareOut, GithubLogo, Sparkle } from "@phosphor-icons/react"
import { Book, BracketsCurly, AddressBook } from "@phosphor-icons/react"
import cursinho from "../assets/menino.jpg"
import cursos from "../data/projects"


const Cursinho = () => {

  return (
    <>
      <Header
        title="Cursinhos populares"
        image={cursinho}
      />
      <main className={styles.container}>
        <Title content="Cursinhos populares" />
        <div className={styles.projectsContainer}>
          {cursos.map(curso => (
            <div key={curso.id} className={styles.cardContainer}>
              <h1 className={styles.cardTitle}>
                <span> Nome do cursinho: </span>
                {curso.nome}
              </h1>
              <p className={styles.cardDescription}>
                <span>Descrição: </span>
                {curso.descrição}
              </p>

              <p className={styles.card}>
                <span>Tipo de pagamento: </span>
                {curso.pagamento.tipo}
              </p>
              {!curso.gratuito &&
                <p className={styles.card}>
                  <span> Valor: </span>
                  R${curso.pagamento.valor}
                </p>}
              {curso.contato.site !== "" &&
                <p className={styles.card}>
                  <span>Site: </span>
                  {curso.contato.site}
                </p>}
              {curso.contato.facebook !== "" &&
                <p className={styles.card}>
                  <span>Facebook: </span>
                  {curso.contato.facebook}
                </p>}
              {curso.contato.email !== "" &&
                <p className={styles.card}>
                  <span>Email: </span>
                  {curso.contato.email}
                </p>}
              {curso.contato.endereço !== "" &&
                <p className={styles.card}>
                  <span>Endereço: </span>
                  {curso.endereço}
                </p>}
              <span className={styles.cardContent}>
                <Book size={100} color="red" weight="thin" />
                <p className={styles.cardDescription}>{curso.description}</p>
              </span>
            </div>
          ))}
        </div>

      </main>
    </>
  )
}

export default Cursinho
