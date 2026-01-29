import styles from "./cadastro.module.css"
import { Navbar } from "../components/Navbar"
import { useState } from "react"
import { getUsuarios, salvarUsuarios } from "../utils/localStorage"

export const Cadastro = () => {
  const [form, setForm] = useState({
    nome: "",
    idade: "",
    email: "",
    caracteristicas: ""
  })

  const InputValue = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const CadastrarUsuario = (e) => {
    e.preventDefault()

    if (!form.nome || !form.email) {
      alert("Preencha todos os campos")
      return
    }

    const usuarios = getUsuarios()

    const novoUsuario = {
      id: Date.now(),
      ...form
    }

    salvarUsuarios([...usuarios, novoUsuario])

    alert("Usuário cadastrado!")

    setForm({
      nome: "",
      idade: "",
      email: "",
      caracteristicas: ""
    })
  }

  return (
    <>
      <Navbar />
      <div className={styles.insert_Data}>
        <form className={styles.form_style} onSubmit={CadastrarUsuario}>
          <h1>Insira os dados:</h1>

          <input name="nome" value={form.nome} onChange={InputValue} placeholder="Nome" />
          <input name="idade" value={form.idade} onChange={InputValue} placeholder="Idade" />
          <input name="email" value={form.email} onChange={InputValue} placeholder="Email" />
          <input name="caracteristicas" value={form.caracteristicas} onChange={InputValue} placeholder="Características" />

          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </>
  )
}
