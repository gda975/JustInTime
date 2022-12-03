export default function CategorySelect(props) {
    return (
        <div className={'insert-select' + props.class}>
            <select onChange={props.callback} value={props.selectvalue}>
                <option value="Workplace Updates">Workplace Updates</option>
                <option value="Policy Links">Policy Links</option>
                <option value="Instructional Videos">
                    Instructional Videos
                </option>
                <option value="Useful Sites">Useful Sites</option>
                <option value="Helpful Reading">Helpful Reading</option>
                <option value="Staff Event">Staff Event</option>
            </select>
        </div>
    );
}
