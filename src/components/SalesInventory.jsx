import React from 'react'
import {
  
    Search,
  } from "lucide-react";
import {dummyData} from './const'
 
const SalesInventory = () => {
  return (
    <div className="sales-inventory">
      <div>
        <div className="sales-header">
          <div className="sales-left">
            <h3>Product Sell</h3>
          </div>
          <div className="sales-right">
            <div className="sale-search">
              <Search size={18} strokeWidth={1} className="icon" />
              <input type="search" placeholder="search" />
            </div>
            <div className="sale-filter">
              
                <select name="days" id="day-select">
                  <option value="7">Last 7 days</option>
                  <option value="15">Last 15 days</option>
                  <option value="30">Last 30 days</option>
                </select>
        
            </div>
          </div>
        </div>
      </div>
      <div className="products-info">
      <table className="product-table">
      <thead>
        <tr>
          <th className="product-column">Product Name</th>
          <th className="product-column">Stock</th>
          <th className="product-column">Price</th>
          <th className="product-column">Total Sale</th>
        </tr>
      </thead>
      <tbody className="table-body">
        {dummyData.map((item) => (
          <tr key={item.id}>
            <td className="product-name">
            <img src={item.image} alt={item.productName} />
           <p> <span className="product-title">{item.productName} </span><br/>  <span className="product-tagline">{item.tagline}</span></p>
             
            </td>
            <td className="stock">{item.stock} in stock</td>
            <td className="price">${item.price.toFixed(2)}</td>
            <td className="stock">${(item.stock * item.price).toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
      </div>
      </div>
  )
}

export default SalesInventory
