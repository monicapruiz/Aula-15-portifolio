import { useState, useEffect } from "react"
import Header from "../components/Header"
import styles from '../styles/pages/portfolio.module.css'
import Title from "../components/Title"
import api from "../infrastructure/api"
import { ArrowSquareOut, GithubLogo, Sparkle } from 'phosphor-react'

import portfolio from '../assets/portfolio.svg'

const Portfolio = () => {
  const [projetosFavoritos, setProjetosFavoritos] = useState([])
  const [projetos, setProjetos] = useState([])

  function buscaProjetos() {
    api.get("").then(response => {
      setProjetos(response.data)
      setProjetosFavoritos(projetos.slice(0, 3))
    })
  }

  useEffect(() => {
    buscaProjetos()
  }, [])

  return (
    <>
      <Header
        title="Projetinhos da Mônica"
        image={portfolio}
      />
      <main className={styles.container}>
        <Title content="Favoritos" />
        <div className={styles.projectsContainer}>
          {projetosFavoritos.map(projeto => (
            <div className={styles.cardContainer}>
              <h1 className={styles.cardTitle}>
                {projeto.name}
              </h1>
              <span className={styles.cardContent}>
                <Sparkle size={150} color="#fff" weight="thin" />
                <p className={styles.cardDescription}>{projeto.description}</p>
              </span>
              <a className={styles.cardButton} target="_blank" href={projeto.html_url}>Acessar</a>
            </div>
          ))}
        </div>

        <Title content="Meus Repositórios" />
        <div className={styles.projectsContainer}>
          {projetos.map(projeto => (
            <div className={styles.cardContainer}>
              <h1 className={styles.cardTitle}>
                {projeto.name}
              </h1>
              <span className={styles.cardContent}>
                <GithubLogo size={150} color="#fff" weight="thin" />
                <p className={styles.cardDescription}>{projeto.description}</p>
              </span>
              <a className={styles.cardButton} target="_blank" href={projeto.html_url}><ArrowSquareOut size={30} color="#fff" weight="thin" /></a>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}

export default Portfolio
