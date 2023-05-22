import React from 'react';
import Synonyms from './Synonyms';
import './Synonyms.css';
import Definiton from './Definition';
import Example from './Example';
import './Meaning.css';

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>

      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <Definiton defi={definition.definition} />
              <br />
              <Example example={definition.example} />
            </p>
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
