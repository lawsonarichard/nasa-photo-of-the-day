import React from "react";
import "./App.css";

// Modules 
import Header from "./componets/header/header";
import Main from "./componets/main/main";
import Footer from "./componets/footer/footer";

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
