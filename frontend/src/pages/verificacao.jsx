import { useEffect, useState } from "react"
import { Navbar } from "../components/Navbar"
import styles from "../pages/verificacao.module.css"
import axios from "axios"

export const Verificacao = () => {
    const [us, setUs] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3000/usuarios")
            .then(res => setUs(res.data))
            .catch(err => console.log(err))
    }, [])

    const Editar = (id) => {
        const novoNome = prompt("Digite o novo nome:")
        const novaidade = prompt("Digite a nova idade:")
        const novoemail = prompt("Digite o novo email:")
        const novacaracter = prompt("Digite as novas caracteristicas:")

        if (!novoNome || !novaidade || !novoemail || !novacaracter) return

        axios.put(`http://localhost:3000/usuarios/${id}`, {
            nome: novoNome,
            idade: novaidade,
            email: novoemail,
            caracteristicas: novacaracter

        })
            .then(() => {
                setUs(us.map(u =>
                    u.id === id ? {
                        ...u, nome: novoNome, idade: novaidade,
                        email: novoemail,
                        caracteristicas: novacaracter
                    } : u
                ))
            })
            .catch(err => console.log(err))
    }

    const Excluir = (id) => {
        if (!window.confirm("Deseja excluir este usuário?")) return

        axios.delete(`http://localhost:3000/usuarios/${id}`)
            .then(() => {
                setUs(us.filter(u => u.id !== id))
            })
            .catch(err => console.log(err))
    }

    return (
        <div className={styles.Verificacao}>
            <Navbar />

            {us.map((cad) => (
                <div key={cad.id} className={styles.info_ver}>
                    <div>
                        <p>Id: {cad.id}</p>
                        <p>Nome: {cad.nome}</p>
                        <p>Idade: {cad.idade}</p>
                        <p>Email: {cad.email}</p>
                        <p>Características: {cad.caracteristicas}</p>
                    </div>

                    <div className={styles.div_icons}>
                        <button onClick={() => Editar(cad.id)}>
                            <img src="/images/Lapis.svg" alt="editar" />
                        </button>

                        <button onClick={() => Excluir(cad.id)}>
                            <img src="/images/Lixeira.svg" alt="excluir" />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}
