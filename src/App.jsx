import { useState, useCallback, useEffect } from "react";
import "./App.css";

function App() {

  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = 
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
     
    if (numberAllowed) str += "0123456789";
    
    if (characterAllowed) str += "~!@#$%^&*()_+={}[]`";

    for (let i = 0; i < length; i++) 
    {
      pass += str.charAt(Math.floor(Math.random() * str.length + 1));
    }

    setPassword(pass);

  }, [length, numberAllowed, characterAllowed]);


 useEffect(() =>{

  passwordGenerator();
  
 },[length, numberAllowed, characterAllowed])




  return (
    <>
      <div id="container">
        <input type="text" id="pass" value={password} className="box" readOnly />
        <div className="items">
          <div>
          <input
            type="range"
            min={8}
            max={100}
            id="range"
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label> Length: {length}</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="number"
              value={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => 
                  !prev);
              }}
            />
            <label htmlFor="number">Number</label>
          </div>
          <div>
            <input
              type="checkbox"
              value={characterAllowed}
              id="character"
              onChange={() => {
                setCharacterAllowed((prev) => 
                  !prev);
              }}
            />
            <label htmlFor="character">Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
