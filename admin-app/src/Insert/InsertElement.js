import { useState } from 'react';
import { getPostNumber, writeData, updatePostNumber } from '../FirebaseAPI';
import CategorySelect from './CategorySelect';

export default function InsertElement(props) {
    let [insertInput, setInput] = useState('');
    let [currentValue, setValue] = useState(
        props.category === 'ALL' ? 'Workplace Updates' : props.category
    );
    let [customMode, setMode] = useState(false);
    let title = '';

    const handleInsert = () => {
        let date = new Date();

        if (!customMode) {
            getPostNumber(currentValue).then((e) => {
                title = currentValue + ' #' + e;

                //reset category to ALL if not equal to current
                if (props.category !== currentValue) props.setCategory('ALL');
                writeData(
                    'TeamJ_temp',
                    insertInput,
                    false,
                    date.toLocaleDateString() + ' ' + date.toLocaleTimeString(),
                    'text',
                    currentValue,
                    title
                );
                updatePostNumber(currentValue, e + 1);
            });
        } else
            writeData(
                'TeamJ_temp',
                insertInput,
                false,
                date.toLocaleDateString() + ' ' + date.toLocaleTimeString(),
                'text',
                'Custom',
                currentValue
            );

        props.callback();
    };

    return (
        <div className="insert-atom">
            <h2 className="insert-title">New post from</h2>
            <textarea
                ref={props.refEl}
                className="insert-textarea"
                placeholder="Start typing new post ..."
                type="text"
                onInput={(e) => {
                    setInput(e.target.value);
                }}
            />
            <div className="insert-category-containter">
                {customMode ? (
                    <input
                        onInput={(val) => {
                            setValue(val.target.value);
                        }}
                        className={'-insert'}
                    />
                ) : (
                    <CategorySelect
                        callback={(e) => setValue(e.target.value)}
                        selectvalue={props.category}
                        class={'-insert'}
                    />
                )}
                <button
                    type="button"
                    className="insert-custom-button"
                    onClick={() => setMode(!customMode)}
                >
                    {customMode ? 'Or category' : 'Or custom title'}
                </button>
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
