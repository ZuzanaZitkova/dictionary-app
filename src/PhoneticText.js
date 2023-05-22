import React from 'react';
export default function PhoneticText(props) {
  if (props.phonetics.text) {
    return (
      <div className="PhoneticsText">
        {props.phonetics.text}
        <br />
      </div>
    );
  } else {
    return null;
  }
}
