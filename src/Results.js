import React from 'react';
import Meaning from './Meaning.js';
import Phonetics from './Phonetics.js';
import PhoneticText from './PhoneticText.js';
import './Results.css';

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h2>{props.results.word}</h2>

          {props.results.phonetics.map(function (phonetics, index) {
            return (
              <span key={index}>
                {' '}
                <Phonetics phonetics={phonetics} />{' '}
                <PhoneticText phonetics={phonetics} />
                <br />
              </span>
            );
          })}
        </section>

        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
