import React from 'react'
import Instagram from '../images/instagram_logo.png'
import Linkedin from '../images/linkedin_logo.png'

function AboutComponent() {
  return (
    <div className='About-Component'>
        <div className="About-up">
            <div className="Title"><h1>Biz Kimiz?</h1></div>
            <div className="Icons">
                <a href="">
                    <img src={Instagram} alt="" />
                </a>
                <a href="">
                    <img src={Linkedin} alt="" />
                </a>
            </div>
        </div>
        <div className="About-down">
            <div className="About-text">
                <p>Biz, Mobimenti olarak ikinin gücünden doğan yolculuğa, bilgi ve deneyimin gücüne inanan bir ekibiz. Gençlerin kendi potansiyellerini mentorluk yoluyla keşfedip geliştirebileceği bir dünya yaratıyoruz. Sizleri, yeni olan bu dünyadan haberdar etmeyi de kendimize görev biliyoruz.

                    Dünyada çok fazla uygulanan bir öğrenme modeli olan mentorluk, senin için bir dönüm noktası özelliği taşıyabilir!

                    Bununla birlikte hızla büyüyen platformumuzda gelişmeleri takip etmek ve öğrenmeni hızlandıracak çeşitli kariyer çalışmaları hakkında bilgi almak için blog sayfamızı takip edebilirsin.

                    Unutma; yeni bir ağ, yeni bir lider, yeni bir kariyer hayali çok uzağında değil. Mentorluk ve eğitim programlarımız çok yakında...</p>
            </div>
        </div>
    </div>
  )
}

export default AboutComponent