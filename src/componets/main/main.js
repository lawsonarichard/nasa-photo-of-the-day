import React, { useState } from "react";
import LeftColumn from "../columns/leftcolumn";
import RightColumn from "../columns/rightcolumn";
import CenterColumn from "../columns/centercolumn";

//imports

const Main = () => {
    return (
        <div className="maincontainer">
            
            <CenterColumn />
            <RightColumn />
            
        </div>
    );
        


};

export default Main