import { useEffect, useState } from "react"
import { Navbar } from "../components/Navbar"
import styles from "../pages/verificacao.module.css"
import axios from "axios"
import { Editar } from "../components/editar"
import { Excluir } from "../components/excluir"

export const Verificacao = () => {
    const [us, setUs] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3000/usuarios").then(res => setUs(res.data))
    }, [])

    return (
        <div className={styles.Verificacao}>
            <Navbar />
            {us.map((cad)=> {
                return (
                    <div className={styles.info_ver}>
                        <div>
                            <p>Id: {cad.id}</p>
                            <p>Nome: {cad.nome}</p>
                            <p>Idade: {cad.idade}</p>
                            <p>Email: {cad.email}</p>
                            <p>Características: {cad.caracteristicas}</p>
                        </div>
                        <div className={styles.div_icons}>
                            <div>
                            <Editar/>
                            </div>
                            <div>
                            <Excluir/>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}