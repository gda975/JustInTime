import logo from './logo.svg';
import { writeData, testData, getData } from './FirebaseAPI';
import { useState, useEffect } from 'react';
import './App.css';
import { get } from 'firebase/database';
import Main_Feed from './Feed/Main_Feed';
import InsertAtom from './Insert/InsertAtom';
import Feed from './Feed/Feed';

function App() {
    
    return (
        <div className="App">
            <h1>
                Hello UNC Nursing
            </h1>
           <InsertAtom />
            <br></br>
            <Feed/>
        </div>
    );
}

export default App;
