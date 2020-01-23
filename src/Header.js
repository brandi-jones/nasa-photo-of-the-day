import React from "react"; 

const Header = (props) => {
    console.log("props in Header:", props);
    return (
        <div className="Header">
            <h1>{props.title}</h1>
            <h2>{props.date}</h2>
        </div>
    );
};

export default Header;