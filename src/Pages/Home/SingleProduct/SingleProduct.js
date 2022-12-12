import React from 'react';
import gallery1 from '../../../assets/images/gallery-1.jpg'
import gallery2 from '../../../assets/images/gallery-2.jpg'
import gallery3 from '../../../assets/images/gallery-3.jpg'
import gallery4 from '../../../assets/images/gallery-4.jpg'
import './ProductDetail.css'

const SingleProduct = () => {
    return (
        <div>
              <div class="small-container single-product">
        <div class="row">
            <div class="col-2">
                <img src={gallery1} width="100%" id="productImg" alt='' />
                <div class="small-img-row">
                    <div class="small-img-col">
                        <img src={gallery1} class="small-img" alt="" />
                    </div>
                    <div class="small-img-col">
                        <img src={gallery2}  class="small-img" alt="" />
                    </div>
                    <div class="small-img-col">
                        <img src={gallery3} class="small-img" alt="" />
                    </div>
                    <div class="small-img-col">
                        <img src={gallery4} class="small-img" alt="" />
                    </div>
                </div>
            </div>
            <div class="col-2">
                <p>Home / T-Shirt</p>
                <h2>Red Printed T-Shirt by HRX</h2>
                <h4>$50.00</h4>
                <select >
                    <option>Select By Size</option>
                    <option>Samll</option>
                    <option>Medium</option>
                    <option>Large</option>
                    <option>Xl</option>
                    <option>XXl</option>
                </select>
                <input type="number" value="1" />
                <a href="" class="btn">Add To Cart</a>
                <h3>Product Details <i class="fa fa-indent"></i></h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium suscipit dolore laborum voluptas at vitae in, quia tempora reiciendis veniam explicabo, aut dolorem doloremque possimus?</p>
            </div>
        </div>
    </div>
        </div>
    );
};

export default SingleProduct;