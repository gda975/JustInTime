
import Atom from "../Atom_Main/Atom"

export default function Main_Feed(props) {

    return (
        <div className="sub-main-container">
            <h2>{props.category}</h2>
            {props.entries == null ? <h3> No entries</h3> : props.entries.map((val, index) => {
                return (
                    <Atom currentCategory = {props.category} val={val} index={index} entriesCallback = {props.entriesCallback}/>
                )
            }
            )}
        </div>
    )
}
