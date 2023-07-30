import React from 'react'
import Logo from '../images/Logo.png'
import { Link } from 'react-scroll'
import Instagram from '../images/instagram_logo.png'
import Linkedin from '../images/linkedin_logo.png'

function Footer() {
  return (
    <div className='Footer'>
        <div className="Footer-Top">
            <ul className='Footer-Menu'>
                <li>
                <Link className='navbar-link' activeClass="active" spy={true} smooth={true} offset={-70} duration={500}  to='slider'>Seni Neler Bekliyor</Link>
                </li>
                <li><Link className='navbar-link' activeClass="active" spy={true} smooth={true} offset={-70} duration={500}  to='about'>Biz Kimiz?</Link></li>
                <li>
                <Link className='navbar-link' activeClass="active" spy={true} smooth={true} offset={-70} duration={500}  to='contact'>Bize Ulaşın</Link>
                </li>
                        
            </ul>
        </div>
        <div className="Footer-Mid">
            <div className="Logo">
                <img src={Logo} alt="" srcset="" />
            </div>
            <div className="Icons">
                
                <a className='link' href='https://www.instagram.com/mobimenti.co/' target='_blank' >
                    <img src={Instagram} alt="" />
                </a>
                <a className='link' href='https://www.linkedin.com/company/mobi̇menti̇/' target='_blank' >
                    <img src={Linkedin} alt="" />
                </a>
            </div>
        </div>
        <div className="Copyright">
            <p>© 2023 Mobimenti</p>
        </div>
    </div>
  )
}

export default Footer