import React from 'react';
import img from '../img/bg images/jason-goodman-Oalh2MojUuk-unsplash.jpg';

function About() {
  return (
    <div className='about-page'>
        <img src={img} alt="about us" />
        <div className="about-us-info">
            <h2 className="title">
                about us
            </h2>
            <p>
                Welcome to Anda shoes collections, your number one source for all things shoes. We're dedicated to providing you the very best of quality men shoes, with an emphasis on palms, sandals, office shoe wears.
                Founded in 2022 by Anda, Anda shoes collections has come a long way from its beginnings in Ikeja, Lagos.</p><p> When Anda first started out, his passion for shoe making - e.g. "eco-friendly cleaning products" drove them to start their own business.
                We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
            </p>
        </div>
    </div>
  )
}

export default About