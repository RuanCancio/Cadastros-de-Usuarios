import { db } from "./db.js";
import  express  from "express"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())

app.post("/usuarios", (req, res)=> {
    const {nome, idade, email, caracteristicas} = req.body

    db.query("INSERT INTO usuarios (nome, idade, email, caracteristicas) VALUES( ?, ?, ?, ? )",
        [nome, idade, email, caracteristicas],
        (err, result)=> {
            if(err) {
                res.status(400).json(err)
            } else {
                if(result.affectedRows === 0) {
                    res.status(404).json("Usuário não criado!")
                }
                else {
                    res.status(201).json("Usuário criado com sucesso!")
                }
            }
        }
    )
})

app.get("/usuarios", (req, res)=> {
    db.query("SELECT * FROM usuarios", 
        (err, result)=> {
            if(err) {
                res.status(500).json(err)
            } else {
                res.status(200).json(result)
            }
        }
    )
})

app.get("/usuarios/:id", (req, res)=> {
    const {id} = req.params

    db.query("SELECT * FROM usuarios WHERE id = ?", 
        [id],
        (err, result)=> {
            if(err) {
                res.status(500).json(err)
            }
            else {
                if(result.length === 0) {
                    res.status(404).json("Usuário não encontrado!")
                } else {
                    res.status(200).json(result)
                }
            }
        }
    )
})

app.put("/usuarios/:id", (req, res)=> {
    const {nome, idade, email, caracteristicas} = req.body
    const {id} = req.params

    db.query("UPDATE usuarios Set nome = ?, idade = ?, email = ?, caracteristicas = ? WHERE ID = ?",
        [nome, idade, email, caracteristicas, id],
        
        (err, result)=> {
            if(err) {
                res.status(500).json(err)
            } else {
                if(result.affectedRows === 0) {
                    res.status(404).json("Usuário não atualizado!")
                } else {
                    res.status(200).json("Usuario atualizado com sucesso!")
                }
            }
        }
    )
})

app.delete("/usuarios/:id", (req, res)=> {
    const {id} = req.params

    db.query("DELETE FROM USUARIOS WHERE id = ?",
        [id],
        (err, result)=> {
            if(err) {
                res.status(500).json(err)
            } else {
                if(result.affectedRows === 0) {
                    res.status(404).json("Usuário não foi deletado!")
                } else {
                    res.status(200).json("Usuário deletado com sucesso!")
                }
            }
        }
    )
})

app.listen(3000, console.log("Server rodando em http://localhost:3000/usuarios"))