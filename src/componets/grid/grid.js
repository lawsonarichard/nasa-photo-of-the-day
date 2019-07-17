import React, { useState } from "react";
import axios from 'axios';

axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=1995-06-16
`)
.then( res => {
    console.log(res.data);
})
.catch (function (error) {

})
.finally(function () {

});




const Grid = () => {
    return (

        <div className="gridContainer">
        
        <div className="imageWrapper">
            <img src= "https://cdn.spacetelescope.org/archives/images/wallpaper2/heic1509a.jpg" alt="space"></img>
        </div>
        </div>
    );


};

export default Grid;