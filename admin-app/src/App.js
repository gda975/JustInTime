import logo from './logo.svg';
import { writeData, testData, getData } from './FirebaseAPI';
import { useState, useEffect } from 'react';
import './App.css';
import { get } from 'firebase/database';
import Main_Feed from './Feed/Main_Feed';
import InsertAtom from './Insert/InsertAtom';
import Feed from './Feed/Feed';

function App() {
    let [globalCategory, setCategory] = useState("ALL");
    let [globalEntries, setEntries] = useState([]);

    return (
        <div className="App">
            <h1>
                Hello UNC Nursing
            </h1>
           <InsertAtom category = {globalCategory} setEntries = {setEntries}/>
            <br></br>
            <Feed setCategory = {setCategory} globalEntries = {globalEntries} setEntries = {setEntries}/>
        </div>
    );
}

export default App;
