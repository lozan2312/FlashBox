import React, { Component } from 'react';
import './Button.css';


const Button = (props) => {
  const handleClick = () => console.log('Clicked!');

  return (
    <div>
      <button
        className="butn"
        type={props.type}
        onClick={handleClick}>
        {props.name}
      </button>
    </div>
  );
};


export default Button;
