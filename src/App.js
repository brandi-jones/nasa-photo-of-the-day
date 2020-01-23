import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

//import components
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";


function App() {

  const [photo, setPhoto] = useState("");
  useEffect( () => {

  axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
  .then(response => {
    console.log(response.data)
    setPhoto(response.data); 
  })
  .catch(error => {
    console.log("Error", error);
  })

  }, []);


  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>

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
      
    </div>
  );
}

export default App;
