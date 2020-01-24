import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

//import components
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

//import for styled components
import styled from 'styled-components';



function App() {

  const [photo, setPhoto] = useState("");
  useEffect( () => {

  axios.get("https://api.nasa.gov/planetary/apod?api_key=s0gY5SoGgkotU82HH004h1PbqS1lgjrmNTlGz7SD")
  .then(response => {
    console.log(response.data)
    setPhoto(response.data); 
  })
  .catch(error => {
    console.log("Error", error);
  })

  }, []);



  const AppDiv = styled.div`
    text-align: center;
    color: rgba(255,255,255,0.9);
    font-size: 1.4rem;
    
    background-image: url(${photo.hdurl}); 
    background-size: cover;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 5rem;
    position: fixed;


    @import url('https://fonts.googleapis.com/css?family=Fugaz+One|Rye&display=swap');
    font-family: 'Fugaz One', cursive;


  `;



  return (
    <AppDiv>

      <Header 
        title={photo.title} 
        date={photo.date}
      />
      <Main 
        img={photo.hdurl} 
        text={photo.explanation}
      />
      <Footer 
        copyright={photo.copyright}
      />

    </AppDiv>
  );
}

export default App;
