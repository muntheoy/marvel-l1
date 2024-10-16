import React from 'react';
import styles from '../styles/Card.module.scss'; 

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ imageUrl, title, description }) => {
  return (
    <div className={styles.contanier}>
      <img src={imageUrl} alt={title} className={styles.image} />
      <div className={styles.text}>
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default Card;
