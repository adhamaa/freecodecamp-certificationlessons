import React from "react";
// import { Counter } from "./features/counter/Counter";
import "./App.css";
import RandomQuotesGenerator from "./features/RandomQuotesGenerator";
import { RandomQuranVerse } from "./features/RandomQuranVerse";
import ShopeeData from "./features/ShopeeData";

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <RandomQuotesGenerator /> */}
      {/* <RandomQuranVerse /> */}
      <ShopeeData />
    </div>
  );
}

export default App;
