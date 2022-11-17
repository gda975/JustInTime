import { useState } from "react";
import { getPostNumber, writeData, updatePostNumber} from "../FirebaseAPI";
import Time from "../Utilities/Time";
import CagetorySelect from "./CagetorySelect";

export default function InsertElement(props) {
    let [insertInput, setInput] = useState('');
    let [currentValue, setValue] = useState("Workplace Updates");
    let [customMode, setMode] = useState(false);
    let [buttonText, setText] = useState(0)
    let names = ["Or Custom Title", "Or Cagetory"];
    let title = "";

    function handleSelect(event) {
        setValue(event.target.value);
    }

    function handleMode() {
        setMode(!customMode);
        setText(1 - buttonText);
    }

    function handleInsert() {
        let date = Time();

        if (buttonText != 1) {
            getPostNumber(currentValue).then((e) => {
                title = currentValue + " #" + e;
                writeData('TeamJ_temp', insertInput, false, date, 'text', currentValue, title);
                updatePostNumber(currentValue, e + 1)
            });
        }
        else writeData('TeamJ_temp', insertInput, false, date, 'text', "Custom", currentValue);

        console.log(insertInput);
        props.callback();
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
            <div className="insert-cagetory-containter">
                {customMode ? <input onInput={(val) => { setValue(val.target.value) }} className={"-insert"} /> : <CagetorySelect callback={handleSelect} class={"-insert"} />}
                <button type="button" className="insert-custom-button" onClick={handleMode}>{names[buttonText]}</button>
                <button type="button" className="insert-submit-button" onClick={handleInsert}>Submit</button>
                <button type="button" className="insert-cancel-button" onClick={() => { props.callback() }}> Cancel</button>
            </div>
        </div>
    )
}