import { writeData } from "./FirebaseAPI";
import { useState } from "react";

export default function InsertAtom(){
    let [insertInput, setInput] = useState('');

    return(
        <div>
            Insert Testing <br></br>
            <textarea className='edit-textarea'
                type="text"
                onInput={(val) => {
                    setInput(val.target.value);
                }}
            ></textarea>{' '}
            <br></br>
            <button type="button" onClick={() => {
                    let today = new Date();
                    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
                    writeData('TeamJ_temp', insertInput, false, date, 'text');
                    console.log(insertInput);
                }}>Submit</button><br></br>
                  {insertInput}
        </div>
        
    )
}