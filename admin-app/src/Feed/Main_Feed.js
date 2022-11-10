
import Atom from "../Atom"

export default function Main_Feed(props) {

    return (
        <div className="sub-main-container">
            {props.entries == null ? <h3> No entries</h3> : props.entries.map((val, index) => {
                return (
                    <Atom val={val} index={index} />
                )
            }
            )}
        </div>
    )
}
