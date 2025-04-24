import React, { useState } from "react";
import "toolcool-range-slider";

const Pass = () => {
  const [sliderValue, setSliderValue] = useState(10); // Initialize slider
  let [password, setPassword] = useState(""); // Initialize password state

  let UC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let LC = "abcdefghijklmnopqrstuvwxyz";
  let NUM = "0123456789";
  let SYM = "!@#$%^&*()_+[]{}|;:,.<>?";

  let createPass = () => {
    let finalPass = ""; // Initialize final password
    let charSet = "";
    if (upperCase || lowerCase || symbols || numbers) {
      if (upperCase) {
        charSet += UC;
      }
      if (lowerCase) {
        charSet += LC;
      }
      if (symbols) {
        charSet += SYM;
      }
      if (numbers) {
        charSet += NUM;
      }
      for (let i = 0; i < sliderValue; i++) {
        finalPass += charSet.charAt(Math.floor(Math.random() * charSet.length));
        setPassword(finalPass);
      }
    } else {
      alert("Please select at least one option to generate a password.");
    }
  };

  let [upperCase, setUpperCase] = useState(false);
  let [lowerCase, setLowerCase] = useState(false);
  let [symbols, setSymbols] = useState(false);
  let [numbers, setNumbers] = useState(false);

  const handleChange = (event) => {
    setSliderValue(event.target.value); // Update slider value dynamically
  };

  return (
    // <div className="flex justify-center item-center">
    <div className="flex-col items-center border border-white h-10rem w-10rem text-white m-20 ">
      <h1 className="text-center text-4xl font-bold">
        <span className="text-violet-600">&lt;</span>
        Pass
        <span className="text-violet-600">Gen/&gt;</span>
      </h1>
      <p className="text-lg text-center">Your own Password Generator</p>
      <div className="text-white flex flex-col items-center m-6 p-4 gap-8">
        <input
          value={password}
          placeholder="Generated password here...!"
          className="rounded-full border border-violet-700 w-full p-4 py-1"
          type="text"
          name="password"
          id="password"
        />
        <label className="flex justify-around items-center w-full text-xl font-bold">
          Password length (4-20)
          <input
            type="range"
            min="4"
            max="20"
            value={sliderValue}
            onChange={handleChange} // Update slider value on change
            className="w-62 h-2  bg-violet-200 rounded-lg appearance-none cursor-pointer accent-violet-600"
          />
          {/* <toolcool-range-slider
              min="4"
              max="20"
              value="8"
              oninput={handleChange}
              slider-width="200px"
              slider-height="0.5rem"
              pointer-width="25px"
              pointer-height="25px"
              slider-bg-fill="#7E22CE"
              generate-labels="true"
              round="0"
            ></toolcool-range-slider> 
           </input> */}
        </label>
        <p>Selected Password Length: {sliderValue}</p>
        <div className="flex items-center justify-around w-full">
          <label className="text-xl font-bold">Include UpperCase</label>
          <input
            type="checkbox"
            checked={upperCase}
            onChange={() => setUpperCase(!upperCase)} // Toggle upperCase state
            className="ml-2 w-5 h-5 appearance-none border border-white rounded bg-gray-800 checked:bg-violet-500 focus:outline-none focus:ring-3 focus:ring-blue-300"
          />
        </div>
        <div className="flex items-center justify-around w-full">
          <label className="text-xl font-bold">Include LowerCase</label>
          <input
            type="checkbox"
            checked={lowerCase}
            onChange={() => setLowerCase(!lowerCase)}
            className="ml-2 w-5 h-5 appearance-none border border-white rounded bg-gray-800 checked:bg-violet-500 focus:outline-none focus:ring-3 focus:ring-blue-300"
          />
        </div>
        <div className="flex items-center justify-around w-full">
          <label className="text-xl font-bold">Include Symbols</label>
          <input
            type="checkbox"
            checked={symbols}
            onChange={() => setSymbols(!symbols)}
            className="ml-2 w-5 h-5 appearance-none border border-white rounded bg-gray-800 checked:bg-violet-500 focus:outline-none focus:ring-3 focus:ring-blue-300"
          />
        </div>
        <div className="flex items-center justify-around w-full">
          <label className="text-xl font-bold">Include Numbers</label>
          <input
            type="checkbox"
            checked={numbers}
            onChange={() => setNumbers(!numbers)}
            className="ml-2 w-5 h-5 appearance-none border border-white rounded bg-gray-800 checked:bg-violet-500 focus:outline-none focus:ring-3 focus:ring-blue-300"
          />
        </div>
        <button
          onClick={createPass} // Call createPass function on button click
          className="w-full text-white font-bold py-2 px-4 rounded-full bg-violet-700 hover:bg-violet-900 transition duration-300 ease-in-out"
        >
          Generate Password
        </button>
      </div>
    </div>
  );
};

export default Pass;
