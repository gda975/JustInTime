import { useState, useEffect, useRef } from 'react';
import InsertElement from './InsertElement';

export default function InsertAtom(props) {
    let [insertOn, setInsert] = useState(false);

    let textEl = useRef(null);
    useEffect(() => {
        if (textEl.current) {
            textEl.current.focus();
        }
    }, [insertOn]);

    return (
        <div className="insert-main-container">
            {!insertOn ? (
                <div className="insert-button-container">
                    {' '}
                    <button
                        className="insert-button"
                        type="button"
                        onClick={() => setInsert(!insertOn)}
                    >
                        {' '}
                        Insert new Post
                    </button>
                </div>
            ) : (
                <div className="insert-container">
                    <InsertElement
                        callback={() => setInsert(!insertOn)}
                        refEl={textEl}
                        category={props.category}
                        setCategory={props.setCategory}
                    />
                </div>
            )}
        </div>
    );
}
