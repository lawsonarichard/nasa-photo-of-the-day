import React, { useState } from "react";
import NasaCard from "../grid/grid";

//imports

const CenterColumn = ()  => {
    return (
        <div className="centerColumnWrapper">
            
            <div className="gridContainer"><NasaCard /></div>
            
        </div>
    );
};

export default CenterColumn