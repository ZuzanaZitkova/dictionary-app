import React, { useState } from 'react';
import './Dictionary.css';
import axios from 'axios';

export default function Dictionary() {
  const [keyword, setKeyword] = useState(null);

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
    alert(`searching ${keyword}`);
  }
  function handleResponse(response) {
    console.log(response.data[0]);
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          autoFocus={true}
          onChange={handleKeywordChange}
        ></input>
      </form>
    </div>
  );
}
