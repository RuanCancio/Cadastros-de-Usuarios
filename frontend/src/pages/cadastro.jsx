import styles from "./cadastro.module.css"
import { Link } from "react-router-dom"

export const Cadastro = () => {
    return (
    <>
        <header className={styles.header_nav}>
            <ul>
                <li>
                    <Link to="/" className={styles.Link}>Main</Link>
                </li>
                <li>
                    <Link to="/cadastro" className={styles.Link}>Cadastro</Link>
                </li>
                <li>
                    <Link to="/" className={styles.Link}>Verificação</Link>
                </li>
            </ul>
        </header>
        <div className={styles.insert_Data}>
            <form className={styles.form_style}>
                <h1>Insira os dados:</h1>
                <div><input type="text" placeholder=" Nome..." /></div>
                <div><input type="number" placeholder=" Idade..." /></div>
                <div><input type="text" placeholder=" Email..." /></div>
                <div><input type="text" placeholder=" Características..." /></div>
                <button>Envie seus dados</button>
            </form>
        </div>
    </>
    )
}