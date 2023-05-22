import React from "react";
import "./App.css";
import{ComedyMovies,originals,action,HorrorMovies,RomanceMovies} from './urls'
import NavBar from "./components/NavBar/NavBar";
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost title='Netflix Originals' url={originals}/>
      <RowPost title='Actions' url={action} isSmall/>
      <RowPost title='Comedy Movies' url={ComedyMovies} />
      <RowPost title='Romance Movies' url={RomanceMovies} isSmall/>
      <RowPost title='Horror Movies' url={HorrorMovies} />
    </div>
  );
}

export default App;
