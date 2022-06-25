import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Services from './Pages/Services';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Pages/Footer';
function App() {
  return (
    <>
      {/* <div>
        <div className="btn btn-outline-primary border-end border-0 m-3"> click me </div>
      </div> */}
      <Navbar />
      {/* <ul>
        <li><NavLink to='/'> Home </NavLink></li>
        <li> <NavLink to='/about'> About </NavLink></li>
        <li><NavLink to='/services'> Services </NavLink></li>
        <li><NavLink to='/contact'> Contact Us </NavLink></li>
      </ul> */}


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Services' element={<Services />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path="*" element= {<Navigate to="/" replace />}/>
      </Routes>
      <Footer />

    </>
  );
}

export default App;
