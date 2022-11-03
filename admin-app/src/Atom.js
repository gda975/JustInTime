import { useState, useRef, useEffect } from "react";

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

    return (
        <div className="content-page">
            <p>Author: {props.val[1].author}</p>
            <div className="content" key={props.index + ""}>

                {!toggleEdit ? <div className="content-actual"> Content: {props.val[1] == undefined ? "" : props.val[1].content} </div> :
                    <div className="content-edit">
                        <textarea ref={textEl} id="content-txt" defaultValue={props.val[1] == undefined ? "" : props.val[1].content}></textarea>
                        <button> save </button>
                    </div>}

            </div>
            <p>Time: {props.val[1].time}</p>

            <div className="atom-action">
                <button type="button" onClick={toggleEditFunc}> Edit </button>
            </div>
        </div>
    );

}

