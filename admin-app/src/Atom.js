import { useState, useRef, useEffect } from "react";
import { updateData, deleteData } from "./FirebaseAPI";
import Time from "./Utilities/Time";

export default function Atom(props) {
    let [toggleEdit, setEdit] = useState(false);
    let textEl = useRef(null);

    useEffect(() => {
        if (textEl.current) {
            textEl.current.focus();

            //move cursor
            textEl.current.selectionStart = textEl.current.value.length;
            textEl.current.selectionEnd = textEl.current.value.length;
        }
    }, [toggleEdit])

    function toggleEditFunc() {
        setEdit(!toggleEdit);
    }

    function update() {
        const content = textEl.current.value;
        const key = props.val[0].split('-')[1];
        let date = Time();
        updateData(content, key, date);
        console.log(content)
        toggleEditFunc();
    }

    function deletePost() {
        const key = props.val[0];
        console.log(key)
        deleteData(key);
    }

    return (
        <div className="content-page">
            <p>{props.val[1] == undefined ? "" : props.val[1].time}</p>
            <h2 className="atom-cagetory">{props.val[1] == undefined ? "" : props.val[1].cagetory}</h2>
            <p>Author: {props.val[1] == undefined ? "" : props.val[1].author}</p>
            <div className="content" key={props.index + ""}>
                {!toggleEdit ? <div className="content-actual">Content: {props.val[1] == undefined ? "" : props.val[1].content} </div> :
                    <div className="content-edit">
                        <textarea ref={textEl} id="content-txt" defaultValue={props.val[1] == undefined ? "" : props.val[1].content}></textarea>
                        <button onClick={update}> Save </button>
                    </div>}
                <br></br>
            </div>
            <div className="atom-action">
                <button type="button" onClick={toggleEditFunc}> {!toggleEdit ? "Edit" : "Cancel"} </button>
                <button type="button" onClick={deletePost} >Delete</button>
            </div>
        </div>
    );

}

