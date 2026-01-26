import { Cadastro } from "./pages/cadastro";
import { Main } from "./pages/main";
import { PageNotFound } from "./pages/Page404";
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
          <Route path="/*" element={<PageNotFound/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
