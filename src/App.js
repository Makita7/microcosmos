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
import InfusionesTe from './pages/subpages/InfusionesTe';
import AceitesMantecas from './pages/subpages/AceitesMantecas';
import Biocosmetica from './pages/subpages/Biocosmetica';
import Jabones from './pages/subpages/BiocosmeticaElem/Jabones';
import PastaDental from './pages/subpages/BiocosmeticaElem/PastaDental';
import Arcilla from './pages/subpages/BiocosmeticaElem/Arcilla';
import TonicosFaciales from './pages/subpages/BiocosmeticaElem/TonicosFaciales';
import Capilar from './pages/subpages/BiocosmeticaElem//Capilar';
import SalesdeBaño from './pages/subpages/BiocosmeticaElem/SalesdeBaño';
import Mantecas from './pages/subpages/BiocosmeticaElem/Mantecas';

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
          {/* Biocosmetica */}
          <Route path='/biocosmetica' element={<Biocosmetica/>}>
            <Route path='jabones' element={<Jabones/>}/>
            <Route path='pastadental' element={<PastaDental/>}/>
            <Route path='arcillas' element={<Arcilla/>}/>
            <Route path='tonicosfaciales' element={<TonicosFaciales/>}/>
            <Route path='capilar' element={<Capilar/>}/>
            <Route path='sales' element={<SalesdeBaño/>}/>
            <Route path='mantecas' element={<Mantecas/>}/>
          </Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
