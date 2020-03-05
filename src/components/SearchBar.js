import React from 'react';

const SearchBar = ({ onInputChange, onFormSubmit }) => {
  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="field">
          <label>Video Search</label>
          <input
            type="text"
            onChange={e => onInputChange(e.currentTarget.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
