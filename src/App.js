import React from "react";
import "./App.css";

// Modules 
import Header from "./componets/header/header";
import Main from "./componets/main/main";
import Cards from "./componets/card/cards";
import NavExample from "./componets/menu/menu";




function App() {
  return (
    <div className="App">

      <Header />
      <Main />
      <Cards />
    </div>
  );
}

export default App;
