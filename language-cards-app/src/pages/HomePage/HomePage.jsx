import { useState } from 'react';
import { AddWordForm } from '../../components/AddWordForm/AddWordForm';
import { WordList } from '../../components/WordList/WordList';
import styles from './HomePage.module.css';

export const HomePage = () => {
  const [words, setWords] = useState([
    { id: 1, word: 'apple', transcription: 'ˈæp.əl', translation: 'яблоко', category: 'фрукты' },
    { id: 2, word: 'book', transcription: 'bʊk', translation: 'книга', category: 'обучение' }
  ]);

  const handleAddWord = (newWord) => {
    setWords([...words, newWord]);
  };

  return (
    <div className={styles.homePage}>
      <h2>Мои слова</h2>
      <AddWordForm onAddWord={handleAddWord} />
      <WordList words={words} />
    </div>
  );
};