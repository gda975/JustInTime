import logo from './logo.svg';
import { writeData, testData, getData, logIn } from './FirebaseAPI';
import { useState, useEffect } from 'react';
import './App.css';
import { get, set } from 'firebase/database';
import Main_Feed from './Feed/Main_Feed';
import InsertAtom from './Insert/InsertAtom';
import Feed from './Feed/Feed';
import HandleEntries from './Utilities/HandleEntries';
import LoginPage from './Login/LoginPage';

function App() {
    let [globalCategory, setCategory] = useState("ALL");
    let [globalEntries, setEntries] = useState([]);
    let [data, setData] = useState([]);
    let [feed, setFeed] = useState([]);
    let [login, setLogin] = useState(false);

    useEffect(() => {
        getData(setData);
        logIn(setLogin);
    }, [])

    useEffect(() => {
        console.log("Changed");
        setFeed(HandleEntries(data, globalCategory));
    }, [data, globalCategory])

    return (
        !login ? <div>
            <LoginPage/>
        </div> :
            <div className="App">
                <h1>
                    Center for Nursing Excellence
                </h1>
                <h2>
                    UNC CNE
                </h2>
                {/* <LoginPage/> */}
                <InsertAtom category={globalCategory} setEntries={setEntries} setCategory={setCategory} />
                <br></br>
                <Feed setCategory={setCategory} globalEntries={feed} />
            </div>
    );
}

export default App;
