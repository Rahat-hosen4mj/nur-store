import React from 'react';
import categories1 from '../../../assets/images/category-1.jpg';
import categories2 from '../../../assets/images/category-2.jpg';
import categories3 from '../../../assets/images/category-3.jpg';
import './Categories'

const Categories = () => {
    return (
        <div class="categories">
        <div class="small-container">
            <div class="row">
                <div class="col-3">
                    <img src={categories1} width='100%' alt="" />
                </div>
                <div class="col-3">
                    <img src={categories2} width='100%' alt="" />
                </div>
                <div class="col-3">
                    <img src={categories3} width='100%' alt="" />
                </div>
            </div>
        </div>
        </div>
    );
};

export default Categories;