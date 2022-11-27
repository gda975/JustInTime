import { useEffect, useState, useRef } from "react";
import { getData } from "../FirebaseAPI";
import Main_Feed from "./Main_Feed";

export default function Feed(props) {
    let [category, setCategory] = useState("ALL");

    useEffect(() => {
        console.log(category)
    }, [category])

    function changeCategory(e) {
        setCategory(e.target.value + "");
        props.setCategory(e.target.value + "");
    }

    return (
        <div className="feed-container">
            <div className="category-button-container">
                <h2>Choose Cagetories</h2>
                <button className="category-button" onClick={(e) => { changeCategory(e) }} type="button" value="ALL">All Cagetories</button>
                <button className="category-button" onClick={(e) => { changeCategory(e) }} type="button" value="Workplace Updates">Workplace Updates</button>
                <button className="category-button" onClick={(e) => { changeCategory(e) }} type="button" value="Policy Links">Policy Links</button>
                <button className="category-button" onClick={(e) => { changeCategory(e) }} type="button" value="Instructional Videos">Instructional Videos</button>
                <button className="category-button" onClick={(e) => { changeCategory(e) }} type="button" value="Useful Sites">Useful Sites</button>
                <button className="category-button" onClick={(e) => { changeCategory(e) }} type="button" value="Helpful Reading">Helpful Reading</button>
                <button className="category-button" onClick={(e) => { changeCategory(e) }} type="button" value="Staff Event">Staff Event</button>
                <button className="category-button" onClick={(e) => { changeCategory(e) }} type="button" value="Custom">Custom Resources</button>
            </div>
            <Main_Feed category={category} entries={props.globalEntries} entriesCallback={props.setEntries} />

        </div>
    );
}