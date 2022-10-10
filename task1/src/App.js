
import './App.css';
import Navbar from './components/Navbar.js'
import Delivered from './components/Delivered.js'
import Return from './components/Return.js'
import Subs from './components/subs.js'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <>
    <Router>

    <div className="container">

    
    <Navbar/>
      <Routes>

        <Route path="components/Delivered.js" 
        element={<Delivered/>} />

        <Route path="components/Return.js" 
        element={<Return/>} />

        <Route path="/components/subs.js" 
        element={<Subs/>} />

      </Routes>
    </div>
    </Router> 
    </>
  );
}

export default App;
