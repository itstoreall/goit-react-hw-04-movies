import { useState } from 'react';
import s from './SearchForm.module.scss';

const SearchForm = ({ onSubmit, handleSubmit, query, handleChange }) => {
  const [inputValue, setInputValue] = useState('');

  const handleValue = e => setInputValue(e.currentTarget.value);

  const handleSubmitForm = e => {
    e.preventDefault();

    inputValue.length > 0 ? onSubmit(inputValue) : setInputValue('');
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <input
        className={s.moviesPageFormInput}
        // type="text"
        value={inputValue}
        // onChange={handleChange}
        onChange={handleValue}
      />
      <button className={s.moviesPageFormBtn} type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
