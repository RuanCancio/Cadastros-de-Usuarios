import { Cadastro } from "./pages/cadastro";
import { Main } from "./pages/main";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/cadastro" element={<Cadastro/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
