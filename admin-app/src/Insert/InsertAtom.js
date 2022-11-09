import { writeData } from "../FirebaseAPI";
import { useState, useEffect, useRef } from "react";
import InsertElement from "./InsertElement";

export default function InsertAtom() {
    let [insertInput, setInput] = useState('');
    let [insertOn, setInsert] = useState(false);

    let textEl = useRef(null);
    useEffect(() => {
        if(textEl.current){
            textEl.current.focus();

        }    
    },[insertOn])


    function setMode() {
        setInsert(!insertOn);
    }

    return (
        <div className="insert-main-container">
            {!insertOn ? <div className="insert-button-container"> <button className="edit-button" type="button" onClick={setMode}> Insert new Post</button></div> :
                <div className="insert-container">
                    <InsertElement callback = {setMode} refEl = {textEl}/>
                </div>}
        </div>

    )
}