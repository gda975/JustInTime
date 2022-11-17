import { useEffect, useState, useRef } from "react";
import { getData } from "../FirebaseAPI";
import Main_Feed from "./Main_Feed";

export default function Feed(props) {
    let [entries, setEntries] = useState([]);
    let [cagetory, setCagetory] = useState("ALL");

    useEffect(() => {
        getData(cagetory, setEntries);
    }, [cagetory])

    function changeCagetory(e) {
        setCagetory(e.target.value + "");
    }

    return (
        <div className="feed-container">
            <div className="cagetory-button-container">
                <h2>Choose Cagetories</h2>
                <button className="cagetory-button" onClick={(e) => { changeCagetory(e) }} type="button" value="ALL">All Cagetories</button>
                <button className="cagetory-button" onClick={(e) => { changeCagetory(e) }} type="button" value="Workplace Updates">Workplace Updates</button>
                <button className="cagetory-button" onClick={(e) => { changeCagetory(e) }} type="button" value="Policy Links">Policy Links</button>
                <button className="cagetory-button" onClick={(e) => { changeCagetory(e) }} type="button" value="Instructional Videos">Instructional Videos</button>
                <button className="cagetory-button" onClick={(e) => { changeCagetory(e) }} type="button" value="Useful Sites">Useful Sites</button>
                <button className="cagetory-button" onClick={(e) => { changeCagetory(e) }} type="button" value="Helpful Reading">Helpful Reading</button>
                <button className="cagetory-button" onClick={(e) => { changeCagetory(e) }} type="button" value="Staff Event">Staff Event</button>
                <button className="cagetory-button" onClick={(e) => { changeCagetory(e) }} type="button" value="Custom">Custom Resources</button>
            </div>
            <Main_Feed cagetory = {cagetory} entries={entries}  entriesCallback = {setEntries}/>

        </div>
    );
}