import React from 'react';

export default function Definiton(props) {
  if (props.defi) {
    return (
      <div className="definition">
        <strong>Definiton:</strong>
        {props.defi}
      </div>
    );
  }
}
