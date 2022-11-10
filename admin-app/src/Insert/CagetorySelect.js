import { useState, useRef } from "react"

export default function CagetorySelect(props) {
    

    return (
        <div className={"insert-select" + props.class}>
            <select onChange={(e) => {props.callback(e)}}>
                <option value="DEFAULT" disabled>Choose cagetory</option>
                <option value="Workplace Updates">Workplace Updates</option>
                <option value="Policy Links">Policy Links</option>
                <option value="Instruction Videos">Instruction Videos</option>
                <option value="Useful Sites">Useful Sites</option>
                <option value="Helpful Reading">Helpful Reading</option>
                <option value="Staff Event">Staff Event</option>
            </select></div>
    )
}