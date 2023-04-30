import React from 'react'
import Logo from '../images/mobimenti-logo.png'
import { Link } from 'react-scroll'
import Instagram from '../images/instagram-svg.svg'
import Linkedin from '../images/linkedin-svg.svg'

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
                
                <Link className='link' to='https://www.instagram.com/mobi.menti/' target='_blank' >
                    <img src={Instagram} alt="" />
                </Link>
                <Link className='link' to='https://www.linkedin.com/company/mobi̇menti̇/' target='_blank' >
                    <img src={Linkedin} alt="" />
                </Link>
            </div>
        </div>
        <div className="Copyright">
            <p>© 2023 Mobimenti</p>
        </div>
    </div>
  )
}

export default Footer