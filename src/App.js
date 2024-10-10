import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ControlledCarousel from './components/carousel';
import BasicNavbar from './components/navbar';

function App() {
  return (
  <BrowserRouter>
    <div className="App">
      <header className="App-header">
       <BasicNavbar />
      </header>
      <body>
        <Routes>
          <Route path="/" element={<ControlledCarousel />}> </Route>
          <Route path='about' element={<h1>about</h1>}> </Route>
        </Routes>
      </body>
    </div>
  </BrowserRouter>
  );
}

export default App;
