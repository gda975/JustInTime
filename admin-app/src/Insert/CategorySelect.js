import { useState, useRef } from "react"

export default function CategorySelect(props) {
    

    return (
        <div className={"insert-select" + props.class}>
            <select onChange={(e) => {props.callback(e)}} value = {props.selectvalue}>
                <option value="Workplace Updates">Workplace Updates</option>
                <option value="Policy Links">Policy Links</option>
                <option value="Instructional Videos">Instructional Videos</option>
                <option value="Useful Sites">Useful Sites</option>
                <option value="Helpful Reading">Helpful Reading</option>
                <option value="Staff Event">Staff Event</option>
                <option value="Custom">Custom</option>
            </select></div>
    )
}