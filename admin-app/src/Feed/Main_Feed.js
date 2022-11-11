
import Atom from "../Atom"

export default function Main_Feed(props) {

    return (
        <div className="sub-main-container">
            <h2>{props.cagetory}</h2>
            {props.entries == null ? <h3> No entries</h3> : props.entries.map((val, index) => {
                return (
                    <Atom currentCagetory = {props.cagetory} val={val} index={index} entriesCallback = {props.entriesCallback}/>
                )
            }
            )}
        </div>
    )
}
