import Header from "../components/Header"
import image from "../assets/image.png"
import sobre from '../assets/lapis.png'
import styles from "../styles/pages/sobre.module.css"

const Sobre = () => {
  return (
    <>
      <Header 
        title="A educação transforma" 
        image={sobre} 
      />
      <h1 className={styles.titulo}>SOBRE</h1>
      <div id = "foto" className={styles.foto}>
      <img src={image} alt="" />
      <p>Olá, pessoal! Este projeto tem como objetivo divulgar os cursinhos pré-vestibulares gratuitos, os famosos cursinhos populares, da Região de Campinas.  O projeto surgiu com a ideia de tentar levar ao máximo de pessoas uma educação voltada para quem deseja prestar vestibulares, mas não tem condições de arcar com os cursinhos comerciais -Etapa, Objetivo, Oficina, Anglo, Poliedro, etc- devido ao alto custo de suas mensalidades. Este projeto foi pensado, pois entende que a educação não pode se tornar uma mercadoria e assim ficar concentrada nas mãos de grandes instituições educacionais. Assim os cursinhos populares são organizações coletivas de múltiplos profissionais da educação que se predispõem de maneira voluntária a democratizar o acesso ao ensino superior para jovens de baixa renda. Os cursinhos populares funcionam a noite ou durante ao sábado, e costumam estarem localizados no Centro da cidade ou em regiões periféricas. Tal organização foi pensada para contemplar o estudante trabalhador, que cumpre longas jornadas trabalho durante o dia.</p>
      </div>
    </>
  )
}

export default Sobre
