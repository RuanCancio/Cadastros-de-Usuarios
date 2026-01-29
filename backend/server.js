import express from "express"
import cors from "cors"
import fs from "fs"
import path from "path"

const app = express()
app.use(cors())
app.use(express.json())

//Cria uma const para criar um path com o nome db.json
const DB_PATH = path.resolve("db.json")

// Inicializa o arquivo se não existir
if (!fs.existsSync(DB_PATH)) {
  fs.writeFileSync(DB_PATH, JSON.stringify([]))
}

// Const para ler a db
const readDB = () =>
  JSON.parse(fs.readFileSync(DB_PATH, "utf-8"))


//const que escreve na db.json
const writeDB = (data) =>
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2))

//CREATE
app.post("/usuarios", (req, res) => {
  const users = readDB()

  const novoUsuario = {
    id: Date.now().toString(),
    ...req.body
  }

  users.push(novoUsuario)
  writeDB(users)

  res.status(201).json(novoUsuario)
})

//READ
app.get("/usuarios", (req, res) => {
  res.json(readDB())
})

// UPDATE
app.put("/usuarios/:id", (req, res) => {
  const users = readDB()
  const index = users.findIndex(u => u.id === req.params.id)

  if (index === -1)
    return res.status(404).json({ message: "Usuário não encontrado" })

  users[index] = { ...users[index], ...req.body }
  writeDB(users)

  res.json(users[index])
})

//DELETE
app.delete("/usuarios/:id", (req, res) => {
  const users = readDB()
  const filtrados = users.filter(u => u.id !== req.params.id)

  writeDB(filtrados)
  res.json({ message: "Usuário removido" })
})

//server
app.listen(3000, () =>
  console.log("Server rodando em http://localhost:3000")
)
