import logo from './logo.svg';
import { writeData, testData, getData } from './FirebaseAPI';
import { useState, useEffect } from 'react';
import './App.css';
import { get } from 'firebase/database';
import Main_Feed from './Main_Feed';

function App() {
    let [dbTest, setDBVal] = useState('');
    let [insertInput, setInput] = useState('');
    let [entries, setEntries] = useState([]);

    useEffect(() => {
        testData(setDBVal);
    }, []);

    return (
        <div className="App">
            <h1>
                Hello UNC Nursing <br></br>
                Database has entries: {dbTest}
            </h1>
            Insert Testing <br></br>
            <textarea
                type="text"
                onInput={(val) => {
                    setInput(val.target.value);
                }}
            ></textarea>{' '}
            <br></br>
            <button
                type="button"
                onClick={() => {
                    let today = new Date();
                    let date =
                        today.getFullYear() +
                        '-' +
                        (today.getMonth() + 1) +
                        '-' +
                        today.getDate();
                    writeData('TeamJ_temp', insertInput, false, date, 'text');
                    console.log(insertInput);
                }}
            >
                {' '}
                Submit
            </button>{' '}
            <br></br>
            <button
                type="button"
                onClick={() => {
                    getData(setEntries);
                }}
            >
                {' '}
                Get all Entries
            </button>{' '}
            <br></br>
            {insertInput}
            <Main_Feed entries={entries} />
        </div>
    );

}

export default App;
