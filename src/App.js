import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Components
import Navbar from './components/Navbar';
//Pages
import Home from './pages/Home';
import SobreNosotros from './pages/SobreNosotros';
import Educacion from './pages/Educacion';
import Productos from './pages/Productos';
import Servicios from './pages/Servicios';
import Contacto from './pages/Contacto';
import Footer from './components/Footer';
import InfusionesTe from './pages/InfusionesTe';
import AceitesMantecas from './pages/AceitesMantecas';

function App() {
  return (
    <div className="">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/sobrenosotros' element={<SobreNosotros/>}/>
          <Route path='/educacion' element={<Educacion/>}/>
          <Route path='/productos' element={<Productos/>}/>
          <Route path='/servicios' element={<Servicios/>}/>
          <Route path='/contacto' element={<Contacto/>}/>
          {/* other pages not in nav */}
          <Route path='/infusiones' element={<InfusionesTe/>}/>
          <Route path='/aceites' element={<AceitesMantecas/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
