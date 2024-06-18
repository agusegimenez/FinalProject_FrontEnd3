import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className='footerLogo'>
        <p>Powered by</p>
        <img src="/DH.png" alt='DH-logo' />
        </div>
        <div className='footerSocials'>
        <img src="../../public/images/ico-instagram.png" alt='DH-Instagram' />
        <img src="../../public/images/ico-tiktok.png" alt='DH-Tiktok' />
        <img src="../../public/images/ico-whatsapp.png" alt='DH-Whatsapp' />
        <img src="../../public/images/ico-facebook.png" alt='DH-Facebook' />
        </div>
    </footer>
  )
}

export default Footer
