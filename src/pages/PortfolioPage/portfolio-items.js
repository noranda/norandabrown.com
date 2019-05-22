import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default [{
  name: 'xiv-complete',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
        XIV-Complete
      </div>
      <div className='portfolio-item__desc'>
        Collection tracker for Final Fantasy XIV
      </div>
      <div className='portfolio-item__icon'>
        <FontAwesomeIcon icon={['fab', 'js']} />
        <FontAwesomeIcon icon={['fab', 'react']} />
      </div>
      <div className='portfolio-item__links'>
        <a target="_blank" rel="noopener noreferrer" href="https://www.xiv-complete.com">View Site</a>
      </div>
    </div>
  )
}, {
  name: 'ffxiv-eureka',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
        FFXIV-Eureka
      </div>
      <div className='portfolio-item__desc'>
        Eureka tracker for Final Fantasy XIV
      </div>
      <div className='portfolio-item__icon'>
        <FontAwesomeIcon icon={['fab', 'js']} />
        <FontAwesomeIcon icon={['fab', 'ember']} />
      </div>
      <div className='portfolio-item__links'>
        <a target="_blank" rel="noopener noreferrer" href="https://www.ffxiv-eureka.com">View Site</a>
      </div>
    </div>
  )
}, {
  name: 'health-it-conferences',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
        Health IT Conferences
      </div>
      <div className='portfolio-item__desc'>
        Listing of upcoming health IT conferences (no longer maintaining)
      </div>
      <div className='portfolio-item__icon'>
        <FontAwesomeIcon icon={['fab', 'html5']} />
        <FontAwesomeIcon icon={['fab', 'css3']} />
      </div>
      <div className='portfolio-item__links'>
        <a target="_blank" rel="noopener noreferrer" href="https://noranda.github.io/health-it-conferences/">View Site</a>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/noranda/health-it-conferences">Github</a>
      </div>
    </div>
  )
}]