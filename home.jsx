// Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './Authentication'; 
import './home.css';

const Home = () => {
  const { currentUser, logout } = useAuth(); 
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await logout();
      navigate('/login'); 
    } catch (error) {
      console.error("Failed to log out", error);
    }
  }

  return (
    <div className="home-container">
      <header>
        <h1>Parth@Deakin</h1>
        <input type="text" placeholder="Search" className="search-bar" />
        <div className="button-container">
          <button className="post-button" onClick={() => navigate('/post')}>Post</button>
          <button className="plans-button" onClick={() => navigate('/pricing')}>Plans</button>
          {currentUser ? (
            <button className="logout-button" onClick={handleLogout}>Logout</button>
          ) : (
            <button className="login-button" onClick={() => navigate('/login')}>Login</button>
          )}
        </div>
      </header>
    </div>
  );
};

export default Home;
