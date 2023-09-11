import React, { useState } from 'react';
import './LoginForm.css';

const LoginForm = () => {
  // State to store form input values
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation (you can add more validation as needed)
    if (!email || !password) {
      alert('Please fill in all fields');
      return;
    }

    // Log the entered email and password (replace with your authentication logic)
    console.log('Email:', email);
    console.log('Password:', password);
    

    // Reset the form
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <header>
        <a className='Home-link' href='/'>
          <img
            src="https://sherise.vercel.app/static/media/logo.de65ad16d0c1c7071226bec80fbe99a4.svg"
            alt="SheRise Logo"
            style={{ height: '60px', marginRight: '10px',  margin: '2%'}}
          />
        </a>
      </header>
      <div>
        <div className='login'>
          <h1>Login</h1>
          <div className='login-form-container'>
            <form className='login-main-form' onSubmit={handleSubmit}>
              <input
                type='email'
                placeholder='Email*'
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required> 
              </input><br />

              <input
                type='password'
                placeholder='Password*'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required> 
              </input><br />

              <button type="submit" className='login-button'>Log In</button>

            </form>

            <div className='login-desc'>
              <p>Not registered yet?</p>
              <a className='create-account' href='/register'><p>Create account*</p></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
