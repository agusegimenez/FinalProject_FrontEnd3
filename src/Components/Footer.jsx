import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className='footerLogo'>
        <div className='footerDH'>
          <p>Powered by</p>
          <img src="/DH.ico" alt='DH-logo' />
        </div>
        <div className='footerSocials'>
          <img src="/images/ico-instagram.png" alt='DH-Instagram' />
          <img src="/images/ico-tiktok.png" alt='DH-Tiktok' />
          <img src="/images/ico-whatsapp.png" alt='DH-Whatsapp' />
          <img src="/images/ico-facebook.png" alt='DH-Facebook' />
        </div>
      </div>
    </footer>
  )
}

export default Footer;
