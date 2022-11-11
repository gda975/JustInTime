import { useState } from "react";
import { writeData } from "../FirebaseAPI";
import Time from "../Utilities/Time";
import CagetorySelect from "./CagetorySelect";

export default function InsertElement(props) {
    let [insertInput, setInput] = useState('');
    let [currentValue, setValue] = useState("Workplace Updates");

    function handleSelect(event) {
        setValue(event.target.value);
    }

    return (
        <div className="insert-atom">
            <h2 className="insert-title">New post from</h2>
            <textarea ref={props.refEl} className='insert-textarea' placeholder="Start typing new post ..."
                type="text"
                onInput={(val) => {
                    setInput(val.target.value);
                }}
            ></textarea>
            <CagetorySelect callback={handleSelect} class = {"-insert"}/>
            <button type="button" className="insert-cancel-button" onClick={() => { props.callback() }}> Cancel</button>
            <button type="button" className="insert-submit-button" onClick={() => {
                let date = Time();
                writeData('TeamJ_temp', insertInput, false, date, 'text', currentValue);
                console.log(insertInput);
                props.callback();
            }}>Submit</button>
        </div>
    )
}