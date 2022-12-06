import { getData } from './FirebaseAPI';
import { useState, useEffect } from 'react';
import './App.css';
import InsertAtom from './Insert/InsertAtom';
import Feed from './Feed/Feed';
import HandleEntries from './Utilities/HandleEntries';
import LoginPage from './Login/LoginPage';

function App() {
    let [globalCategory, setGlobalCategory] = useState('ALL');
    let [data, setData] = useState([]);
    let [feed, setFeed] = useState([]);
    let [login, setLogin] = useState(false);

    useEffect(() => {
        getData(setData);
    }, [login]);

    useEffect(() => {
        setFeed(HandleEntries(data, globalCategory));
    }, [data, globalCategory]);

    return (
        <div className="App">
            {!login ? (
                <div>
                    <LoginPage callback={setLogin} />
                </div>
            ) : (
                <div>
                    <h1>Center for Nursing Excellence</h1>
                    <h2>Just in Time Feed</h2>
                    <InsertAtom
                        category={globalCategory}
                        setCategory={setGlobalCategory}
                    />
                    <br></br>
                    <Feed
                        setCategory={setGlobalCategory}
                        category={globalCategory}
                        globalEntries={feed}
                    />
                </div>
            )}
        </div>
    );
}

export default App;
