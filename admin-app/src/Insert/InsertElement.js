import { useState } from "react";
import { writeData } from "../FirebaseAPI";
import Time from "../Utilities/Time";
import CagetorySelect from "./CagetorySelect";

export default function InsertElement(props) {
    let [insertInput, setInput] = useState('');
    let [currentValue, setValue] = useState("DEFAULT");

    function handleSelect(event) {
        setValue(event.target.value);
    }

    return (
        <div className="insert-atom">
            <h2 className="insert-title">New post from</h2>
            <textarea ref={props.refEl} className='edit-textarea' placeholder="Start typing new post ..."
                type="text"
                onInput={(val) => {
                    setInput(val.target.value);
                }}
            ></textarea>
            <CagetorySelect callback={handleSelect} />
            <button type="button" className="insert-cancel-button" onClick={() => { props.callback() }}> Cancel</button>
            <button type="button" className="insert-submit-button" onClick={() => {
                let date = Time();
                currentValue = (currentValue == "DEFAULT" ? "Workplace Updates" : currentValue);
                writeData('TeamJ_temp', insertInput, false, date, 'text', currentValue);
                console.log(insertInput);
                props.callback();
            }}>Submit</button>
        </div>
    )
}