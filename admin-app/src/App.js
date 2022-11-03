import logo from './logo.svg';
import { writeData, testData, getData } from './FirebaseAPI';
import { useState, useEffect } from 'react';
import './App.css';
import { get } from 'firebase/database';
import Main_Feed from './Main_Feed';
import InsertAtom from './InsertAtom';

function App() {
    let [dbTest, setDBVal] = useState('');
    let [entries, setEntries] = useState([]);

    useEffect(() => {
        getData(setEntries);
    }, []);

    return (
        <div className="App">
            <h1>
                Hello UNC Nursing <br></br>
            </h1>
            <InsertAtom />
            <br></br>
            <Main_Feed entries={entries} />
        </div>
    );
}

export default App;
