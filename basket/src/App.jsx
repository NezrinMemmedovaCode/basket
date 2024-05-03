
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Basket from './pages/Basket';
import Home from './pages/Home';
import MainLayout from './layout/MainLayout';
import MainProvider from './context/MainProvider';

function App() {


  return (
    <>
    <MainProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="basket" element={<Basket />} />
       
        </Route>
      </Routes>
    </BrowserRouter>
    </MainProvider>
    </>
  )
}

export default App
