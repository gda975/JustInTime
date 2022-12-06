import { useState } from 'react';
import { getPostNumber, writeData, updatePostNumber } from '../FirebaseAPI';
import CategorySelect from './CategorySelect';

export default function InsertElement(props) {
    const [insertInput, setInput] = useState('');
    const [currentValue, setValue] = useState(
        props.category === 'ALL' ? 'Workplace Updates' : props.category
    );
    const [title, setTitle] = useState('');

    const handleInsert = () => {
        let date = new Date();

        getPostNumber(currentValue).then((e) => {
            let titleNum = currentValue + ' #' + e;

            //reset category to ALL if not equal to current
            if (props.category !== currentValue) props.setCategory('ALL');
            writeData(
                'TeamJ_temp',
                insertInput,
                false,
                date.toLocaleDateString() + ' ' + date.toLocaleTimeString(),
                'text',
                currentValue,
                title === '' ? titleNum : title
            );
            if (title !== '') {
                updatePostNumber(currentValue, e + 1);
            }
        });

        props.callback();
    };

    return (
        <div className="insert-atom">
            <h2 className="insert-title">New post from</h2>
            <input
                ref={props.refEl}
                className="insert-title-input"
                placeholder="Title"
                type="text"
                onInput={(e) => setTitle(e.target.value)}
            />
            <textarea
                className="insert-textarea"
                placeholder="Content"
                type="text"
                onInput={(e) => {
                    setInput(e.target.value);
                }}
            />
            <div className="insert-category-containter">
                <CategorySelect
                    callback={(e) => setValue(e.target.value)}
                    selectvalue={props.category}
                    class={'-insert'}
                />
                <button
                    type="button"
                    className="insert-submit-button"
                    onClick={handleInsert}
                >
                    Submit
                </button>
                <button
                    type="button"
                    className="insert-cancel-button"
                    onClick={props.callback}
                >
                    {' '}
                    Cancel
                </button>
            </div>
        </div>
    );
}
