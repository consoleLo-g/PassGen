import React from "react";
import Pass from "./Components/Pass";
import Nav from "./Components/Nav";

function App() {
  return (
    <>
      <div className=" overflow-hidden relative h-screen w-screen bg-slate-950">
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        <Nav />

        <Pass />
      </div>
    </>
  );
}

export default App;
