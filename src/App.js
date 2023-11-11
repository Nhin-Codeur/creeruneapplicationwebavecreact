import Nav from './components/nav.jsx'
import Footer from './components/footer.jsx'

import './App.scss';
import Accueil from './components/accueil.jsx';
import Apropos from './components/apropos.jsx';
import { Routes, Route } from "react-router-dom"
import ErrorPage from './components/errorpage.jsx';
import FicheLogement from './components/fiche-logement.jsx';

function App() {

  return <>
    <div className="App">
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Accueil />} />
        <Route path='fiche-logement/:locationId' element={<FicheLogement />} />
        <Route path="apropos" element={<Apropos />} />
        <Route path='*' element={<ErrorPage />} />

      </Routes>
    </div>
    <Footer></Footer>
  </>
}

export default App;
