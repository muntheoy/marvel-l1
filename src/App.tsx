import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';

const Screen1: React.FC = () => (
  <div>
    <h1>Это Экран 1</h1>
    <p>Здесь какой-то контент для экрана 1.</p>
  </div>
);

const Screen2: React.FC = () => (
  <div>
    <h1>Это Экран 2</h1>
    <p>Здесь какой-то контент для экрана 2.</p>
  </div>
);

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<string>('screen1'); // Указываем тип состояния

  const handleScreenChange = (screen: string): void => {
    setCurrentScreen(screen);
  };

  return (
    <div className="App">
      <Header onSelectScreen={handleScreenChange} />
      {currentScreen === 'screen1' && <Screen1 />}
      {currentScreen === 'screen2' && <Screen2 />}
    </div>
  );
}

export default App;
