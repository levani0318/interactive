import { useState } from "react";
import "./App.css";
import "./index.css";
import Star from "./components/star";
import Header from "./components/header-title";
import Paragraph from "./components/paragraph";
import Burtula from "./components/button";
import Submit from "./components/submit";

function App() {
  return (
    <div className="w-[380px] h-[416px] rounded-2xl p-8 bg-gradient-to-b from-[#232A34] to-[#181e27]">
      <Star />
      <Header />
      <Paragraph />
      <Burtula />
      <Submit />
    </div>
  );
}

export default App;
