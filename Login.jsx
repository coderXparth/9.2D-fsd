import React, { useRef, useState } from 'react';
import { useAuth } from './Authentication';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { login, currentUser } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleCheck(e) {
    e.preventDefault();
    try {
      setError('');
      setLoading(true);
      await login(email.current.value, password.current.value);
      navigate('/home'); // Redirect to Home page after login
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  }

  return (
    <div className="body1">
      <div className="login">
        <h1>Log In</h1>
        {error && <div className="alert">{error}</div>}
        
        <form onSubmit={handleCheck}>
          <label>Email:
            <input className="Harsh" type="email" ref={email} required />
          </label>
          <label>Password:
            <input className="Harsh" type="password" ref={password} required />
          </label>
          <button disabled={loading} className="button" type="submit">LOGIN</button>
          
          {!currentUser && (
            <div className="account">
              <p>Not registered? <Link to="/signup">Create an account</Link></p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
