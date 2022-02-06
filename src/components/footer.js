import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
function Footer() {
  return (
  <div>
      <div className='footer'>
          <p>copyright @2022</p>
          <div className="social">
          <i className='fa fa-facebook'></i>
              <FacebookIcon className='fa fa-facebook'/>
              <InstagramIcon className='fa fa-instagram'/>
          </div>
      </div>
  </div>
  )
}

export default Footer;
