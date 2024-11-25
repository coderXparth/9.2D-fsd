// PricingPlanPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PricingPlanPage.css';

const PricingPlanPage = () => {
    const navigate = useNavigate();

    const handleSelectPlan = (plan) => {
        if (plan === 'premium' || plan === 'gold') {
            navigate('/payment');
        } else {
            alert("You have selected the Free Plan. Enjoy basic access!");
        }
    };

    return (
        <div className="pricing-page">
            <h1 className="pricing-title">Choose Your Plan</h1>
            <div className="plan-card-container">
                <div className="plan-card">
                    <h2>Free Plan</h2>
                    <p>Basic access with limited features.</p>
                    <button 
                        className="select-button"
                        onClick={() => handleSelectPlan('free')}
                    >
                        Select Free Plan
                    </button>
                </div>
                <div className="plan-card">
                    <h2>Premium Plan ($1000/month)</h2>
                    <p>Get premium access to features like :Themes etc.</p>
                    <button 
                        className="select-button premium-button"
                        onClick={() => handleSelectPlan('premium')}
                    >
                        Select Premium Plan
                    </button>
                </div>
                <div className="plan-card">
                    <h2>Gold Plan ($2500/month)</h2>
                    <p>Get Premium access to Themes and AI assistant.</p>
                    <button 
                        className="select-button gold-button"
                        onClick={() => handleSelectPlan('gold')}
                    >
                        Select Gold Plan
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PricingPlanPage;
