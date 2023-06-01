import logo from './logo.png';
import image from './bg-landing.png';
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Registration from './Registration';
import  Login  from './Login.jsx';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const App =()=> {
const [currentform,setCurrentForm]=useState('login');
const [showPassword, setShowPassword] = useState(false);
  const root = createRoot(document.getElementById("root"));

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

// root.render(
//   <BrowserRouter>
//     {}
//   </BrowserRouter>
// );

return (
  <div className="App">
      <div className="left-panel">
        <img src={logo} alt="Logo" className="logo" />
        <form>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
          <label htmlFor="password">Password:</label>
          <div className="password-input-container">
            <input type={showPassword ? "text" : "password"} id="password" name="password" />
            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className="password-toggle" onClick={togglePasswordVisibility} />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
      <div className="right-panel">
        <img src={image}alt="Picture" className="picture" />
      </div>
    </div>
);

}

 export default App;
