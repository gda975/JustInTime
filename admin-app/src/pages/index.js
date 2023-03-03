import { getData } from '../firebase/FirebaseAPI';
import { useState, useEffect } from 'react';
import InsertAtom from '../components/Insert/InsertAtom';
import Feed from '../components/Feed/Feed';
import HandleEntries from '../Utilities/HandleEntries';
import LoginPage from '../components/Login/LoginPage';

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

    const insertButton = (
        <InsertAtom category={globalCategory} setCategory={setGlobalCategory} />
    );

    return (
        <div className="App">
            {!login ? (
                <div>
                    <LoginPage callback={setLogin} />
                </div>
            ) : (
                <div className="feed">
                    <Feed
                        setCategory={setGlobalCategory}
                        category={globalCategory}
                        globalEntries={feed}
                        insertButton={insertButton}
                    />
                </div>
            )}
        </div>
    );
}

export default App;
