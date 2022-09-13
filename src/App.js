import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Components
import Header from './components/Header';
//Pages
import Home from './pages/Home';
import SobreNosotros from './pages/SobreNosotros';
import Educacion from './pages/Educacion';
import Productos from './pages/Productos';
import Servicios from './pages/Servicios';
import Contacto from './pages/Contacto';

function App() {
  return (
    <div className="">
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/servicios' element={<SobreNosotros/>}/>
          <Route path='/educacion' element={<Educacion/>}/>
          <Route path='/productos' element={<Productos/>}/>
          <Route path='/servicios' element={<Servicios/>}/>
          <Route path='/servicios' element={<Servicios/>}/>
          <Route path='/contacto' element={<Contacto/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
