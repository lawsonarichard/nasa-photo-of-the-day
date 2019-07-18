import React, { useState } from "react";
import NavPillsExample from "../menu/menu";

// Imports 
import headerImage from "../header/headerImage";

const Header = () => {

return (
    <div className="headerContainer"> 
    <div className="logo">Daily Meower
    <i class="fas fa-cat"></i>
    </div>
    
        <NavPillsExample />

    </div>
);
};

export default Header