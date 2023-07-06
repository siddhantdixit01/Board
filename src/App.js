import './App.css';
import Menu from './components/Menu.js';
import { useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SigninBox from './components/SigninBox.js';
import Dashboard from './components/Dashboard.js'  

function App() {  
  const [login,setLogin]=useState(false);
  // setLogin(true);
  return (
    <div className="app">
      <div id="spa-layout">
        <Menu isLogin={login}/>
        <div onClick={()=>{if(window.location.pathname==='/dashboard')setLogin(true);}}>
          <BrowserRouter>
            <Routes>
              <Route index element={<SigninBox />} />
              <Route path="Dashboard" element={<Dashboard />} />
            </Routes>
          </BrowserRouter>
        </div>          
      </div>
    </div>
  );
}

export default App;
