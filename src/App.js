import 'bootstrap/dist/css/bootstrap.css'; // or include from a CDN
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import './App.css';
import '@flaticon/flaticon-uicons/css/bold/all.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './components/layouts/home/HomeLayout';
import AboutLayout from './components/layouts/about/AboutLayout';
import GoodsLayout from './components/layouts/goods/goods';

function App() {
  return (
  <BrowserRouter>
    <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}> </Route>
          <Route path='about' element={<AboutLayout />}> </Route>
          <Route path='products' element={<GoodsLayout/>}></Route>
        </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
