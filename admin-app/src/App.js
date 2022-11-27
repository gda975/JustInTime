import logo from './logo.svg';
import { writeData, testData, getData } from './FirebaseAPI';
import { useState, useEffect } from 'react';
import './App.css';
import { get, set } from 'firebase/database';
import Main_Feed from './Feed/Main_Feed';
import InsertAtom from './Insert/InsertAtom';
import Feed from './Feed/Feed';
import HandleEntries from './Utilities/HandleEntries';

function App() {
    let [globalCategory, setCategory] = useState("ALL");
    let [globalEntries, setEntries] = useState([]);
    let [data, setData] = useState([]);
    let [feed, setFeed] = useState([]);

    useEffect(() => {
        getData(setData);
    }, [])

    useEffect(() => {
        console.log("Changed");
        setFeed(HandleEntries(data, globalCategory));
    },[data, globalCategory])

    return (
        <div className="App">
            <h1>
                Hello UNC Nursing
            </h1>
            <InsertAtom category={globalCategory} setEntries={setEntries} setCategory={setCategory}/>
            <br></br>
            <Feed setCategory={setCategory} globalEntries={feed} />
        </div>
    );
}

export default App;
