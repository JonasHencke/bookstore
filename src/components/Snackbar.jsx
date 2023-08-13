import React from "react"

export default function Snackbar(props) {
    
    
    return (
        <div id={`snackbar-${props.SnackbarShow}`} className="snackbar">
            <p>Deine Bestellung war erfolgreich!</p>
        </div>
    )
}