import Footer from "./Components/Footer/Footer"
import Navbar from "./Components/Navbar/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Cadastro from "./Routes/Cadastro";
import Login from "./Routes/Login";
import DetalhesProd from "./Routes/DetalhesProd";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

function App() {

  return (
    <div className="App">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <BrowserRouter>
        <div className="container">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/login" element={<Login />} />
              <Route path="/detalhes/:id" element={<DetalhesProd />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
      </LocalizationProvider>
    </div>
  )
}

export default App
