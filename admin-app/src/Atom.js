import { useState, useRef, useEffect } from "react";
import { updateData, deleteData } from "./FirebaseAPI";

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

    function update(){
        const content = textEl.current.value;
        const key = props.val[0].split('-')[1];
        let today = new Date();
        let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        updateData(content, key, date);
        toggleEditFunc();
    }

    function deletePost(){
       const key = props.val[0].split('-')[1];
        deleteData(key);
    }

    return (
        <div className="content-page">
            <p>Author: {props.val[1].author}</p>
            <div className="content" key={props.index + ""}>

                {!toggleEdit ? <div className="content-actual">Content: {props.val[1] == undefined ? "" : props.val[1].content} </div> :
                    <div className="content-edit">
                        <textarea ref={textEl} id="content-txt" defaultValue={props.val[1] == undefined ? "" : props.val[1].content}></textarea>
                        <button onClick={update}> Save </button>
                    </div>}

            </div>
            <p>Time: {props.val[1].time}</p>

            <div className="atom-action">
                <button type="button" onClick={toggleEditFunc}> {!toggleEdit? "Edit" : "Cancel"} </button>
                <button type="button" onClick={deletePost} >Delete</button>
            </div>
        </div>
    );

}

