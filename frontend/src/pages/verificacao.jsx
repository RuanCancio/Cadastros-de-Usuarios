import { useEffect, useState } from "react"
import { Navbar } from "../components/Navbar"
import styles from "../pages/verificacao.module.css"
import { getUsuarios, salvarUsuarios } from "../utils/localStorage.js"

export const Verificacao = () => {
  const [us, setUs] = useState([])

  useEffect(() => {
    setUs(getUsuarios())
  }, [])

  const Editar = (id) => {

    const ally = us.filter(u =>
      u.id === id
    )[0]

    let novoNome = prompt("Novo nome:")
    if (novoNome === null) novoNome = ally.nome;

    let novaIdade = prompt("Nova Idade:")
    if (novaIdade === null) novaIdade = ally.idade;

    let novoEmail = prompt("Novo Email:")
    if (novoEmail === null) novoEmail = ally.email;

    let novaCarac = prompt("Novas Caracteristicas:")
    if (novaCarac === null) novaCarac = ally.caracteristicas;

    const atualizados = us.map(u =>
      u.id === id ? { ...u, nome: novoNome, idade: novaIdade, email: novoEmail, caracteristicas: novaCarac } : u
    )

    salvarUsuarios(atualizados)
    setUs(atualizados)
  }

  const Excluir = (id) => {
    if (!window.confirm("Deseja excluir este usuário?")) return

    const filtrados = us.filter(u => u.id !== id)

    salvarUsuarios(filtrados)
    setUs(filtrados)
  }

  return (
    <div className={styles.Verificacao}>
      <Navbar />

      {us.length === 0 && <p>Nenhum usuário cadastrado</p>}

      {us.map(cad => (
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
              ✏️
            </button>

            <button onClick={() => Excluir(cad.id)}>
              🗑️
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
