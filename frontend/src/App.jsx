import { Cadastro } from "./pages/cadastro";
import { Main } from "./pages/main";
import { Verificacao } from "./pages/verificacao";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/cadastro" element={<Cadastro/>}/>
          <Route path="/verificacao" element={<Verificacao/>}/>
          <Route path="/*" element={<h1> is not the page! </h1>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
