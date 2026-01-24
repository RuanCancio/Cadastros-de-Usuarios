import styles from "../pages/main.module.css"
import { Link } from "react-router-dom"

export const Main = ()=> {
    return <div className={styles.Main}><h1>Is the main page</h1>
    <Link to="/cadastro">Cadastro</Link>
    </div>
}