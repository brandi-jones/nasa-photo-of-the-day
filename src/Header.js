import React from "react"; 
import styled from "styled-components";



const Header = (props) => {
    console.log("props in Header:", props);

    const HeaderDiv = styled.div`
        background: rgba(233,235,240,0.5);
        border-radius: 1rem;

        width: 50%;
        color: rgba(0,0,0,0.7);
        border: 1px solid white;
    `;


    return (
        <HeaderDiv>
            <h1>NASA Photo of the Day</h1>
            <h2>{props.title}</h2>
            <h3>{props.date}</h3>
        </HeaderDiv>
    );
};

export default Header;