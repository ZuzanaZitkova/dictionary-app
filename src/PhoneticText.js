import React from 'react';

export default function PhoneticText(props) {
  if (props.phonetics.text) {
    return <span className="text">{props.phonetics.text}</span>;
  } else {
    return null;
  }
}
