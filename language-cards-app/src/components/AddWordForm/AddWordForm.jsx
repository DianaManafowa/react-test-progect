import { useState } from 'react';
import styles from './AddWordForm.module.css';

export const AddWordForm = ({ onAddWord }) => {
  const [formData, setFormData] = useState({
    word: '',
    transcription: '',
    translation: '',
    category: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.word || !formData.translation) return;
    onAddWord({ ...formData, id: Date.now() });
    setFormData({
      word: '',
      transcription: '',
      translation: '',
      category: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        name="word"
        value={formData.word}
        onChange={handleChange}
        placeholder="Слово"
        required
      />
      <input
        type="text"
        name="transcription"
        value={formData.transcription}
        onChange={handleChange}
        placeholder="Транскрипция"
      />
      <input
        type="text"
        name="translation"
        value={formData.translation}
        onChange={handleChange}
        placeholder="Перевод"
        required
      />
      <input
        type="text"
        name="category"
        value={formData.category}
        onChange={handleChange}
        placeholder="Тема"
      />
      <button type="submit">Добавить слово</button>
    </form>
  );
};