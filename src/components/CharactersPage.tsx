import React, { useState } from "react";
import Card from "./Card";
import styles from "../styles/ContentPage.module.scss";
import { textVariables } from "../textVariables";

interface CardItem {
  imageUrl: string;
  title: string;
  description: string;
}

const characters: CardItem[] = [
  {
    imageUrl: "https://via.placeholder.com/150",
    title: "Character 3",
    description: "Details about Character 3",
  },
  {
    imageUrl: "https://via.placeholder.com/150",
    title: "Character 3",
    description: "Details about Character 3",
  },
  {
    imageUrl: "https://via.placeholder.com/150",
    title: "Character 3",
    description: "Details about Character 3",
  },
];

const CharactersPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchButtonClick = () => {
    console.log("Search button clicked");
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>{textVariables.charactersPageTitle}</h1>
        <h3 className={styles.cardCount}>({characters.length})</h3>
      </div>

      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder={textVariables.characterPlaceholder}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.input}
        />
        <button onClick={handleSearchButtonClick} className={styles.button}>
          {textVariables.searchButton}
        </button>
      </div>

      <hr className={styles.divider} />

      <div className={styles.cardList}>
        {characters.map((character, index) => (
          <Card
            key={index}
            imageUrl={character.imageUrl}
            title={character.title}
            description={character.description}
          />
        ))}
      </div>
    </div>
  );
};

export default CharactersPage;
