import React from "react";
import "./styles.css";
import Header from "./Header";
export const App = () => {
  return (
    <>
      <header>
        <div class="header">
          <p>YOBIWAVE</p>
        </div>
      </header>

      <div class="container">
        <h1>YOBIWAVE</h1>
        <h3>Check the Environmental Impact</h3>
      </div>

      <div class="input-area">
        <input placeholder="商品を入力" />
        <button>検索</button>
      </div>
    </>
  );
};

export default App;
