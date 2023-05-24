import React, { useState } from 'react';
import './Dictionary.css';
import axios from 'axios';
import Results from './Results';
import Photos from './Photos.js';

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultWord);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    const apiKey = 's0BFW6mrlMIA4FGx9vqzT8ZM2ReFaspdRCXUbLYKn1PpBl9lfFKh3wsH';
    const pexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    axios
      .get(pexelsUrl, { headers: { Authorization: `  ${apiKey}` } })
      .then(handlePicResponse);
  }
  function handlePicResponse(response) {
    setPhotos(response.data.photos);
  }
  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              autoFocus={true}
              defaultValue={props.defaultWord}
              onChange={handleKeywordChange}
            ></input>
          </form>
          <div className="hint">
            Sugested word: sunset, wine, sea, travel....
          </div>
        </section>

        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();

    return 'Loading...';
  }
}
