// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home';
import Login from './Login';
import SignUp from './Signup';
import PricingPlanPage from "./PricingPlanPage"; 
import PaymentPage from "./PaymentPage"; 
import PostFeature from "./PostFeature";
import { AuthProvider } from './Authentication';

const App = () => (
  <AuthProvider> 
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/pricing" element={<PricingPlanPage />} />
        <Route path="/payment" element={<PaymentPage />} /> 
        <Route path="/post" element={<PostFeature />} />   
      </Routes>
    </Router>
  </AuthProvider>
);

export default App;
