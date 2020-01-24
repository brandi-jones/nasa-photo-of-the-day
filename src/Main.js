import React from "react";
import styled from "styled-components";



const Main = (props) => {
    console.log("props in Main:", props);


    const MainDiv = styled.div`
        background: rgba(0,0,0,0.5);
        border-radius: 1rem;
        border: 1px solid white;
        padding: 2rem;
        margin: 5rem;
    `;

    return (
        <MainDiv>
            <p>{props.text}</p>
        </MainDiv>
    )
}


export default Main;