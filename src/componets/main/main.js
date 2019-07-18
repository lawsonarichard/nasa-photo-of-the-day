import React, { useState } from "react";
import LeftColumn from "../columns/leftcolumn";
import RightColumn from "../columns/rightcolumn";
import CenterColumn from "../columns/centercolumn";
import Footer from "../footer/footer";

//imports

const Main = () => {
    return (
        <div className="maincontainer">
            
            <CenterColumn />
            <RightColumn />
            <Footer />
        </div>
    );
        


};

export default Main