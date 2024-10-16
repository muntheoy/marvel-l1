import './App.css';
import React from 'react';
// import Header from './components/Header';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import CharactersPage from './components/CharactersPage';
// import ComicsPage from './components/ComicsPage';
import Card from './components/Card';

const App: React.FC = () => {
  return (
    // <Router>
    //   <div className="App">
    //     <Header />
    //     <Routes>
    //       <Route path="/" element={<Navigate to="/characters" replace />} />
    //       <Route path="/characters" element={<CharactersPage />} />
    //       <Route path="/comics" element={<ComicsPage />} />
    //     </Routes>
    //   </div>
    // </Router>

    <Card imageUrl={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBM2J4rtCkjtii97Y2MSKCAGAUYc2T77VSng&s'} title={'Spiderman'} description={'Spider-man, real name Peter Parker is a fictional character, a superhero comic book publisher Marvel Comics, created by Stan Lee and Steve Ditko.'}/>
  );
}

export default App;
