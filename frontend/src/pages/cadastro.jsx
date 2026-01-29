import styles from "./cadastro.module.css"
import { Navbar } from "../components/Navbar"
import axios from "axios"
import { useState } from "react"

export const Cadastro = () => {

    const [form, setForm] = useState({
        nome: "",
        idade: "",
        email: "",
        caracteristicas: ""
    })

    const InputValue = (e) => {
        setForm({
            ...form, [e.target.name]: e.target.value
        })
    }

    const CadastrarUsuario = (e) => {
        e.preventDefault()
        if (!form.nome || !form.idade || !form.email || !form.caracteristicas) {
            alert("Insira todos os campos!")
            return
        }
        else {
            setForm({
                nome: "",
                idade: "",
                email: "",
                caracteristicas: ""
            })
            axios.post("http://localhost:3000/usuarios", form)
                .then(() => alert("Usuário Cadastrado!"))
                .catch(err => console.log(err))
        }


    }

    return (
        <>
            <Navbar />
            <div className={styles.insert_Data}>
                <form onSubmit={CadastrarUsuario} className={styles.form_style}>
                    <h1>Insira os dados:</h1>
                    <div><input name="nome" value={form.nome} onChange={InputValue} type="text" placeholder=" Nome..." required /></div>
                    <div><input name="idade" value={form.idade} onChange={InputValue} type="number" placeholder=" Idade..." required /></div>
                    <div><input name="email" value={form.email} onChange={InputValue} type="text" placeholder=" Email..." required /></div>
                    <div><input name="caracteristicas" value={form.caracteristicas} onChange={InputValue} type="text" placeholder=" Características..." required /></div>
                    <button type="submit" >Envie seus dados</button>
                </form>
            </div>
        </>
    )
}