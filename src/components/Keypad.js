// Code Keypad Component Here
import React from "react";

function Keypad() {

    function changeEvent(e) {
       console.log("Entering password...")
    }

    return (
        <div>
            <form>
                <input type="password" onChange={changeEvent} />
            </form>
        </div>
    )
}

export default Keypad;