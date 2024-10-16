import "./PricingCardStyles.css";
import React from 'react'

const PricingCard = () => {
  return (
    <div className="pricing">
        <div className="card-container">
            <div className="card">
                <h3>- Basic -</h3>
                <span className="bar"></span>
                <p className="btc">$50</p>
                <p>- 3 Days -</p>
                <p>- 3 Pages -</p>
                <p>- Responsive Design -</p>
                <a href="#footer" className="btn">Buy Now</a>
            </div>
            <div className="card">
                <h3>- Premium -</h3>
                <span className="bar"></span>
                <p className="btc">$500</p>
                <p>- 1-3 Weeks -</p>
                <p>- Basic Web App -</p>
                <p>- CRUD operations, simple UI/UX -</p>
                <a href="#footer" className="btn">Buy Now</a>
            </div>
            <div className="card">
                <h3>- Hourly Rate -</h3>
                <span className="bar"></span>
                <p className="btc">$20</p>
                <p>- Varies -</p>
                <p>- Minor Updates -</p>
                <p>- Bug fixing, Minor features -</p>
                <a href="#footer" className="btn">Buy Now</a>
            </div>
        </div>

    </div>
  )
}

export default PricingCard;