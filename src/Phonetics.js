import React from 'react';
import './Phonetics.css';

export default function Phonetics(props) {
  if (props.phonetics.audio) {
    return (
      <span className="Phonetics">
        <a href={props.phonetics.audio} target="_blank">
          click to listen
        </a>
      </span>
    );
  }
}
