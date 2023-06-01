import React, {useState} from "react";
import './App.css';


function Registration() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      //   you can write the code to submit the user's information to the server or API
      console.log(`Username: ${username}, Password: ${password}`);
    };
  
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1>Registration (Home) Page</h1>
        <div style={{ width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <p>This is the centered column. You can add any content you want here, such as more text, images, or forms.</p>
        </div>
      </div>
    );
  };
  
  
  export default Registration;