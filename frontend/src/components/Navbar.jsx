import { Link } from "react-router-dom";
import styles from "./Navbar.module.css"

export const Navbar = ()=> {
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
                    <Link to="/verificacao" className={styles.Link}>Verificação</Link>
                </li>
            </ul>
        </header>
        </>
    )
}