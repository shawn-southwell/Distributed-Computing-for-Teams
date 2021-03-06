import React, { Component } from 'react';

const LengthInput = function(props) {
  return (
    <div>
      <input className="inputMaterial numInput" type="number" id="length" name="Length" min="0" placeholder="Length of Word" onChange={props.updateSettings} />
      <span className="highlight"></span>
      <span className="bar"></span>
      
    </div>
    
  )
};

export default LengthInput;
