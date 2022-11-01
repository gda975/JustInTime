
import Atom from "./Atom"

export default function Main_Feed(prop) {

    return (
        prop.entries.map((val, index) => {
            return (
                <Atom val={val} index={index} />
            )
        }
        ))
}
