import React from 'react';
import {FiArrowRight} from 'react-icons/fi';
import './Cta.css';
const CTA = () => (
    <div className='app__cta'>
            <p className="app__cta-info p__raleway">Wizards of the Coast</p>
            <button type='button'> <FiArrowRight/> Go</button>
    </div>
)

export default CTA