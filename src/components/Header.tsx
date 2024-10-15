import React from 'react';
import styles from '../styles/Header.module.scss';
import logo from '../assets/logo.svg'
import { textVariables } from '../textVariables'


interface HeaderProps {
  onSelectScreen: (screen: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSelectScreen }) => {
  return (
    <div className={styles.container}>
        <img
          src= {logo} // Замените на путь к вашему логотипу
          alt="Logo"    
        />
      
      <div className={styles.buttons}>
        <button onClick={() => onSelectScreen('screen1')}>{textVariables.headerButtonLeft}</button>
        <button onClick={() => onSelectScreen('screen2')}>{textVariables.headerButtonRight}</button>
      </div>
    </div>
  );
};

export default Header;

