import React from 'react';
import './Order.css'

const Order = () => {
    return (
        <div className="small-container cart-page">
        <table>
            <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Subtotal</th>
            </tr>
            <tr>
                <td>
                    <div className="cart-info">
                        <img src="images/buy-1.jpg" alt="" />
                    </div>
                    <div>
                        <p>Red Printed T-shirt</p>
                        <small>Price:$50.00</small>
                        <a href="www">Remove</a>
                    </div>
                </td>
                <td><input type="number" value="1" /></td>
                <td>$50.00</td>
            </tr>
            <tr>
                <td>
                    <div className="cart-info">
                        <img src="images/buy-3.jpg" alt="" />
                    </div>
                    <div>
                        <p>Black paijama</p>
                        <small>Price:$50.00</small>
                        <a href="www">Remove</a>
                    </div>
                </td>
                <td><input type="number" value="1" /></td>
                <td>$50.00</td>
            </tr>
            <tr>
                <td>
                    <div className="cart-info">
                        <img src="images/buy-2.jpg" alt="" />
                    </div>
                    <div>
                        <p>Puma Chuta</p>
                        <small>Price:$50.00</small>
                        <a href="www">Remove</a>
                    </div>
                </td>
                <td><input type="number" value="1" /></td>
                <td>$50.00</td>
            </tr>
        </table>
        <div className="total-price">
            <table>
                <tr>
                    <td>Subtotal</td>
                    <td>$50.00</td>
                </tr>
                <tr>
                    <td>Tax</td>
                    <td>$5.00</td>
                </tr>
                <tr>
                    <td>Total</td>
                    <td>$55.00</td>
                </tr>
            </table>
        </div>
    </div>
    );
};

export default Order;