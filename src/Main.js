import React from "react";

const Main = (props) => {
    console.log("props in Main:", props);

    return (
        <div className="Main">
            <p>{props.text}</p>
        </div>
    )
}


export default Main;