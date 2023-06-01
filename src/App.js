// import logo from './logo.svg';
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Registration from './Registration';
import  Login  from './Login.jsx';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const App =()=> {

const [currentform,setCurrentForm]=useState('login');
const [showPassword, setShowPassword] = useState(false);
const root = createRoot(document.getElementById("root"));

const togglePasswordVisibility = () => {
  setShowPassword(!showPassword);
};

  return (
    <div className="App">
      <Login>login</Login>
    </div>
  );
}

 export default App;
