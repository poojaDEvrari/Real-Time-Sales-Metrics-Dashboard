import React from 'react'
import {
    BadgeDollarSign,
    ArrowUp,
    Tablet,
    Wallet,
    Briefcase,
    MoveDown,} from 'lucide-react'
const SalesCard = () => {
  return (
    <div className="main-cards">
        <div className="card">
          <div className="card-inner card-icon">
            <BadgeDollarSign
              strokeWidth={1}
              className="card_icon inner-badge-one"
              size={40}
            />
          </div>
          <div className="card-content">
            <div className="card-info">
              <p>Earnings</p>
              <p>$198K</p>
            </div>

            <div className="profit-container">
              <ArrowUp size={12} strokeWidth={1} className="profit-arrow" />
              <span className="profit-percent">37.08%</span>
              <span className="extra-text"> this month </span>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-inner card-icon two">
            <Tablet
              size={40}
              strokeWidth={1}
              className="card_icon inner-badge-two"
            />
          </div>
          <div className="card-content">
            <div className="card-info">
              <p>Orders</p>
              <p>$2.4K</p>
            </div>

            <div className="profit-container">
              <MoveDown size={12} strokeWidth={1} className="loss-arrow" />
              <span className="loss-percent">2%</span>
              <span className="extra-text"> this month </span>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-inner card-icon three">
            <Wallet
              size={40}
              strokeWidth={1}
              className="card_icon inner-badge-three"
            />
          </div>
          <div className="card-content">
            <div className="card-info">
              <p>Balance</p>
              <p>$2.4K</p>
            </div>

            <div className="profit-container">
              <MoveDown size={12} strokeWidth={1} className="loss-arrow" />
              <span className="loss-percent">2%</span>
              <span className="extra-text"> this month </span>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-inner card-icon four">
            <Briefcase
              size={40}
              strokeWidth={1}
              className="card_icon inner-badge-four"
            />
          </div>
          <div className="card-content">
            <div className="card-info">
              <p>Total Sales</p>
              <p>$89K</p>
            </div>

            <div className="profit-container">
              <ArrowUp size={12} strokeWidth={1} className="profit-arrow" />
              <span className="profit-percent">11%</span>
              <span className="extra-text"> this month </span>
            </div>
          </div>
        </div>
      </div>
  )
}

export default SalesCard
