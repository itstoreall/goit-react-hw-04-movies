import React from 'react';
import s from './SearchForm.module.scss';

const SearchForm = ({ handleSubmit, query, handleChange }) => (
  <form onSubmit={handleSubmit}>
    <input
      className={s.moviesPageFormInput}
      type="text"
      value={query}
      onChange={handleChange}
    />
    <button className={s.moviesPageFormBtn} type="submit">
      Search
    </button>
  </form>
);

export default SearchForm;
