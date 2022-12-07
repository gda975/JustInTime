export default function CategorySelect(props) {
    return (
        <div className={'insert-select' + props.class}>
            <select onChange={props.callback} defaultValue={props.selectvalue}>
                <option value="Workplace Updates">Workplace Updates</option>
                <option value="Policy Links">Policy Links</option>
                <option value="Instructional Videos">
                    Instructional Videos
                </option>
                <option value="Useful Sites">Useful Sites</option>
                <option value="Helpful Reading">Helpful Reading</option>
                <option value="Staff Events">Staff Events</option>
                <option value="Other">Other</option>
            </select>
        </div>
    );
}
