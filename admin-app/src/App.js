import logo from './logo.svg';
import { writeData, testData, getData } from './FirebaseAPI'
import { useState, useEffect } from 'react';
import './App.css';
import { get } from 'firebase/database';



function App() {
  let [dbTest, setDBVal] = useState("");
  let [insertInput, setInput] = useState("");
  let [entries, setEntries] = useState([]);

  useEffect(() => {
    testData(setDBVal);
  }, [])

  return (
    <div className="App">
      <h1>
        Hello UNC Nursing <br></br>
        Database has entries: {dbTest}
      </h1>

      Insert Testing <br></br>
      <input type="text" onInput={(val) => {
        setInput(val.target.value)
      }}></input> <br></br>

      <button type='button' onClick={() => {
        writeData("TeamJ_temp", insertInput);
        console.log(insertInput)
      }}> Submit</button> <br></br>

      <button type='button' onClick={() => {
          getData(setEntries);
      }}> Get all Entries</button> <br></br>
      {insertInput}
      {entries.map((val, index) => {
        return (
          <div key = {index + ""}>
            Text : {val[1] == undefined ? ""  : val[1].body}

          </div>
        )
      })}
    </div>
  );
}

export default App;
