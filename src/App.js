import './App.css';
import {Routes, Route} from "react-router-dom"
import Home from './Componente/Home';
import Login from "./Componente/Login";
import Registro from './Componente/Registro';
import ProtecterRouter from './Componente/ProtecterRouter';
import {AuthProvider} from "./context/authContect";

function App() {
  return (
    <div className="App">
      <AuthProvider>
     <Routes>
      {/* para poner rutas protegidas */}
      <Route path='/' element={<ProtecterRouter><Home /></ProtecterRouter>} />
    
      <Route path='/login' element={<Login />} />
      <Route path='/registro' element={<Registro />} />
     </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
