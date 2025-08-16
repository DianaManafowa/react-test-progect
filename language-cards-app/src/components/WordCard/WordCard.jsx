import styles from './WordCard.module.css';

export const WordCard = ({ word, transcription, translation, category }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.word}>{word}</h3>
      <p className={styles.transcription}>[{transcription}]</p>
      <p className={styles.translation}>{translation}</p>
      <span className={styles.category}>{category}</span>
    </div>
  );
};