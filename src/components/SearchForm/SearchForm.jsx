import { useState } from 'react';
import s from './SearchForm.module.scss';

const SearchForm = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = e => setInputValue(e.currentTarget.value);

  const handleSubmit = e => {
    e.preventDefault();

    inputValue.length > 0 ? onSubmit(inputValue) : setInputValue('');
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={s.moviesPageFormInput}
        value={inputValue}
        onChange={handleChange}
      />
      <button className={s.moviesPageFormBtn} type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
