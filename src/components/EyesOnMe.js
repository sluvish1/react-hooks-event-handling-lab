// Code EyesOnMe Component Here
import React from "react"

function EyesOnMe() {

    function handelFocus(e) {
        console.log("Good!")
    }
    function handelBlur(e) {
        console.log("Hey! Eyes on me!")
    }

    return (
        <div>
            <button onFocus={handelFocus} onBlur={handelBlur}>Eyes on me</button>
        </div>
    )
}
export default EyesOnMe