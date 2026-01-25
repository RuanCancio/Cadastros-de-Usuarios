import { Navbar } from "../components/Navbar"
import styles from "../pages/main.module.css"

export const Main = () => {
    return <div className={styles.Main}>
        <Navbar />
        <h1>Sistema de Cadastro de Usuários</h1>
        <p>Bem-Vindos!, esta aplicação foi desenvolvida com o objetivo de facilitar o gerenciamento de usuários de forma simples, rápida e organizada.
        Aqui é possível cadastrar, visualizar, editar e remover informações dos cadastros, garantindo maior controle e praticidade no dia a dia.</p>
        <p>O sistema foi pensado para ser intuitivo, acessível e eficiente, simulando um cenário real de uso em instituições.
        A aplicação foi desenvolvida para praticar conceitos de desenvolvimento web, incluindo organização de dados, operações CRUD e construção de interfaces intuitivas.</p>
    </div>
}