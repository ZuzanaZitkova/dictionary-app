import React, { useState } from 'react';
import './Dictionary.css';

export default function Dictionary() {
  const [keyword, setKeyword] = useState(null);
  function search(event) {
    event.preventDefault();
    alert(`searching ${keyword}`);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          autofocus={true}
          onChange={handleKeywordChange}
        ></input>
      </form>
    </div>
  );
}
