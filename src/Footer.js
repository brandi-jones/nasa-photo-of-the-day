import React from "react";

const Footer = (props) => {
    console.log("props in Footer:", props);

    return (
        <div className="Footer">
            <footer>{props.copyright}</footer>
        </div>
    );
};

export default Footer;