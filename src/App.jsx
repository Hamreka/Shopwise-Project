import logo from './logo.svg';
import './App.css';
import Nav from "./Components/Nav"
import Home from "./Components/Home"
import Pages from "./Components/Pages"
import Product from "./Components/Product"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"


import { Route,Routes } from 'react-router-dom';

function App() {

  return (
    <div className="App">
        <Nav/>
        
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Pages' element={<Pages/>}/>
          <Route path='/Product' element={<Product/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          
        </Routes>











        <Footer/>
    </div>
       
  );
}

export default App;
