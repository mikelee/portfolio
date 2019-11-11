import React from 'react';

import './contact-section.styles.scss';

const Contact = () => (
    <div className='contact-section'>
        <h3 className='title'>Contact Me</h3>
        <p className='statement'>I'm currently looking to join an exciting company!</p>
        <form action='https://usebasin.com/f/e94fc554851b' method='POST'>
            <input type='email' name='email' placeholder='Email address' required />
            <textarea name='textarea' rows='12' placeholder="Let's talk..." required></textarea>
            <div className='form-buttons'>
                <div className="g-recaptcha" data-sitekey="6Lew3SMUAAAAAJ82QoS7gqOTkRI_dhYrFy1f7Sqy" data-size="compact" data-theme="dark"></div>
                <button type='submit'>SUBMIT</button>
            </div>
        </form>
        <a className='attribution' href="https://www.freepik.com/free-photos-vectors/background">Background vector created by starline - www.freepik.com</a>
    </div>
);

export default Contact;