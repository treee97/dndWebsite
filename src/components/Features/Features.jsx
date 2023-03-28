import React from 'react';
import './Features.css';

const Features = ({number, title, dice, text}) => {
  return (
    <div className='app__feature'>
        <div className="app__feature-number">
            <p>{number}</p>
        </div>

        <div className="app__feature-dashline">
            <div />
            <p>{dice}</p>
            <div />
        </div>

        <div className="app__feature-name">
            <p>{title}</p>
        </div>
    </div>
  )
}

export default Features