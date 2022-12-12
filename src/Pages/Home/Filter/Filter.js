import React from 'react';

const Filter = () => {
    return (
        <section id='filter'>
            <div className="row mx-auto">
        <div className="col-lg-12 col-md-12 col-12">
            <div className="filter-header">
                <h2 className="display-6 text-center text-primary">Feature Product</h2>
            </div>
            <div className="filter-part text-center text-info mb-3 pb-2">
                <p style={{border: 'none'}}>All</p>
                <p>Men</p>
                <p>Woman</p>
                <p>Children</p>
                <p>Accessories</p>
            </div>
        </div>
        </div>
        </section>
    );
};

export default Filter;