import React from 'react';
import {FiArrowRight} from 'react-icons/fi';
import './Cta.css';
const CTA = () => (
    <div className='app__cta'>
        <p className="app__cta-info p__raleway">Visit the official Wizards of the Coast website!</p>
        <button type='button'> <FiArrowRight/> Go</button>
    </div>
)

export default CTA