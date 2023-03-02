import React from 'react';
import '../Css/Cssapp/Footer.css';
import Instagram from '../Img/Icons/instagram.png';
import Facebook from '../Img/Icons/facebook.png';
import WhatsApp from '../Img/Icons/whatsapp-green.png';
import Ubicacion from '../Img/Icons/pin.png';
import Email from '../Img/Icons/gmail.png';

function Footer() {
  return (
    <div className='main-footer'>
        <div className='container'>
            <div className='row'>
                {/* column1 */}
                <div className='col'>
                    <h4>Redes Sociales</h4>
                    <ul className='list-unstyled'>
                        <li><img className='icons-general' src={Instagram}></img><a href='https://www.instagram.com/techno.noah/' target='_blank' className='link-instagram'
                         > Instagram</a></li>
                        <li><img className='icons-general' src={Facebook}></img> Facebook</li>
                        <li></li>
                    </ul>
                </div>
                {/* column2 */}
                <div className='col'>
                    <h4>Ubicación</h4>
                    <ul className='list-unstyled'>
                        <li><img className='icons-general' src={Ubicacion}></img> San José, CR , Alajuelita.</li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                {/* column3 */}
                <div className='col'>
                    <h4>Contacto</h4>
                    <ul className='list-unstyled'>
                    <li><img className='icons-general' src={WhatsApp}></img> 8726-1983</li>
                        <li><img className='icons-general' src={Email}></img> infotecnonoah@gmail.com</li>
                        <li></li>
                    </ul>
                </div>
            </div>
            <hr></hr>
            <div className='row'>
                <p className='col-sm'>
                    &copy; Developed by YokuStudios CR | All right reserved | Terms of Services | Privacy | studiosyoku@gmail.com
                </p>
            </div>
            <hr></hr>
        </div>
    </div>
  )
}

export default Footer;