import React from 'react'
import Logo from '../images/Logo.png'
import { Link } from 'react-router-dom'
import Instagram from '../images/instagram-svg.svg'
import Linkedin from '../images/linkedin-svg.svg'

function Footer() {
  return (
    <div className='Footer'>
        <div className="Footer-Top">
            <ul className='Footer-Menu'>
                <li>Ana Sayfa</li>
                <li>Seni Neler Bekliyor?</li>
                <li>Biz Kimiz?</li>
                <li>Bize Ulaş</li>
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