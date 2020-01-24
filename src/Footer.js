import React from "react";
import styled from "styled-components";

const Footer = (props) => {
    console.log("props in Footer:", props);


    const FooterDiv = styled.div`
        background: rgba(233,235,240,0.5);
        border-radius: .5rem;

        width: 25%;
        color: rgba(0,0,0,0.7);
        border: 1px solid white;
    `;


    return (
        <FooterDiv>
            <footer>{props.copyright}</footer>
        </FooterDiv>
    );
};

export default Footer;