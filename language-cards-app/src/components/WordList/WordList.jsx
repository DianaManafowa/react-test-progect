import { WordCard } from '../WordCard/WordCard';
import styles from './WordList.module.css';

export const WordList = ({ words }) => {
  return (
    <div className={styles.wordList}>
      {words.map((word) => (
        <WordCard key={word.id} {...word} />
      ))}
    </div>
  );
};