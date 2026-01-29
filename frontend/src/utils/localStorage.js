export const getUsuarios = () => {
  return JSON.parse(localStorage.getItem("usuarios")) || []
}

export const salvarUsuarios = (usuarios) => {
  localStorage.setItem("usuarios", JSON.stringify(usuarios))
}
