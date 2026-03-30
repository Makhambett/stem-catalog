import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FirstPage from './pages/FirstPage'
import SecondPage from './pages/SecondPage'
import ThirdPage from './pages/ThirdPage'
import DecorPage from './pages/DecorPage'
import EquipmentPage from './pages/EquipmentPage'
import Divany from './pages/categories/Divany'
import Kreslo from './pages/categories/Kreslo'
import Pufy from './pages/categories/Pufy'
import Stellazhi from './pages/categories/Stellazhi'
import Tumby from './pages/categories/Tumby'
import Stulya from './pages/categories/Stulya'
import Shkolnye from './pages/categories/Shkolnye'
import Myagkie from './pages/categories/Myagkie'
import Barnye from './pages/categories/Barnye'
import Shkafy from './pages/categories/Shkafy'
import Vstroenye from './pages/categories/Vstroenye'
import Standartnye from './pages/categories/Standartnye'
import Ulab from './pages/equipment/Ulab'
import Labdisc from './pages/equipment/Labdisc'
import Contacts from "./pages/Contacts";
import Gos from './pages/decor/Gos'
import Panels3D from './pages/decor/Panels3D'
import Lighting from './pages/decor/Lighting'
import Peregorodki from './pages/decor/Peregorodki'
import Shtory from './pages/decor/Shtory'
import Rasteniya from './pages/decor/Rasteniya'
import Doski from './pages/decor/Doski'
import InteractivePanels from './pages/electro/InteractivePanels'
import Computers from './pages/electro/Computers'
import InfoKiosk from './pages/electro/InfoKiosk'
import Stanki from './pages/electro/Stanki'
import Bytovaya from './pages/electro/Bytovaya'
import Printers3D from './pages/electro/Printers3D'
import DigitalPage from './pages/digital/DigitalPage'























export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/secondpage" element={<SecondPage />} />
        <Route path="/electro" element={<ThirdPage />} />
        <Route path="/decor" element={<DecorPage />} />
        <Route path="/equipment" element={<EquipmentPage />} />
        <Route path="/secondpage/divany" element={<Divany />} />
        <Route path="/secondpage/kreslo" element={<Kreslo />} />
        <Route path="/secondpage/pufy" element={<Pufy />} />
        <Route path="/secondpage/stellazhi" element={<Stellazhi />} />
        <Route path="/secondpage/tumby" element={<Tumby />} />
        <Route path="/secondpage/stulya" element={<Stulya />} />
        <Route path="/secondpage/stulya/shkolnye" element={<Shkolnye />} />
        <Route path="/secondpage/stulya/myagkie" element={<Myagkie />} />
        <Route path="/secondpage/stulya/barnye" element={<Barnye />} />
        <Route path="/secondpage/shkafy" element={<Shkafy />} />
        <Route path="/secondpage/shkafy/vstroenye" element={<Vstroenye />} />
        <Route path="/secondpage/shkafy/standartnye" element={<Standartnye />} /> 
        <Route path="/equipment/ulab" element={<Ulab />} />
        <Route path="/equipment" element={<EquipmentPage />} />
        <Route path="/equipment/labdisc" element={<Labdisc />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/decor/gos" element={<Gos />} />
        <Route path="/decor/3dpanels" element={<Panels3D />} />
        <Route path="/decor/lighting" element={<Lighting />} />
        <Route path="/decor/peregorodki" element={<Peregorodki />} />
        <Route path="/decor/shtory" element={<Shtory />} />
        <Route path="/decor/rasteniya" element={<Rasteniya />} />
        <Route path="/decor/doski" element={<Doski />} />
        <Route path="/electro/interactive" element={<InteractivePanels />} />
        <Route path="/electro/computers" element={<Computers />} />
        <Route path="/electro/infokiosk" element={<InfoKiosk />} />
        <Route path="/electro/stanki" element={<Stanki />} />
        <Route path="/electro/bytovaya" element={<Bytovaya />} />
        <Route path="/electro/printers3d" element={<Printers3D />} />
        <Route path="/digital" element={<DigitalPage />} />
      </Routes>
      <Footer />
    </>
  )
}
