import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Banner  from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost';
import { Orginals,Action,HorrorMovies,Documentaries,Romantic,ComedyMovies } from './Url';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <RowPost url={Orginals} title="Netflix Orginals"/>
      <RowPost url={Action} title="Action" isSmall/>
      <RowPost url={HorrorMovies} title="Horror Movies" isSmall/>
      <RowPost url={Documentaries} title="Documenteries" isSmall/>
      <RowPost url={Romantic} title="Romantic" isSmall/>
      <RowPost url={ComedyMovies} title="Comedy" isSmall/>




    </div>
  );
}

export default App;
