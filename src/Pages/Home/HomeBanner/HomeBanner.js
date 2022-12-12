import React from 'react';
import image1 from"../../../assets/images/image1.png";


const HomeBanner = () => {
    return (
        <div className="row">
        <div className="col-2">
            <h1>Give Your Workout <br /> A New Style.!</h1>
            <p>Success is't always about greatness. it's about consistency. Consistent <br />hard work gain
                success. Greatness will come </p>
            <a href="www" className="btn">Explore Now &#8594;</a>
        </div>
        <div className="col-2">
            <img src={image1} alt="" />
        </div>
    </div>
    );
};

export default HomeBanner;