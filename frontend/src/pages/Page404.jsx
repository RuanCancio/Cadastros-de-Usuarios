import styles from "../pages/main.module.css"
import { Navbar } from "../components/Navbar"

export const PageNotFound = ()=> {
    return (
        <div>
            <Navbar/>
        <div className={styles.PageNotFound}>
            
            <h1>404</h1>
            <h2>Página não existe!</h2>
        </div>
        </div>
    )
}