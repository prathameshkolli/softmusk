import React, { useState } from 'react';
import '../component/LoginPage.css'; // Adjusting the path to the LoginPage.css file
import Footer from '../component/Footer'
import Navbar  from '../component/Navbar'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Logging in with:', email, password);
  };

  return (
    <>
      <Navbar />

      <div className="login-page">
        <div className="login-container">
          <h1 className="login-header">Welcome Back!</h1>
          <p className="login-subheader">Please log in to your account</p>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>

            <button type="submit" className="login-btn">Log In</button>
          </form>

          <p className="login-footer">
            Don't have an account? <a href="#">Sign Up</a>
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Login;
