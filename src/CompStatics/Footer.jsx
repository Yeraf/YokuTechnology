import React from 'react';
import '../Css/Cssapp/Footer.css';

function Footer() {
  return (
    <div className='main-footer'>
        <div className='container'>
            <div className='row'>
                {/* column1 */}
                <div className='col'>
                    <h4>THICC MEMES INC</h4>
                    <ul className='list-unstyled'>
                        <li>333-66-5789</li>
                        <li>Muscow Russia</li>
                        <li>123 Street South North</li>
                    </ul>
                </div>
                {/* column2 */}
                <div className='col'>
                    <h4>STUFF</h4>
                    <ul className='list-unstyled'>
                        <li>DANK MEMES</li>
                        <li>OTHER STUFF</li>
                        <li>GUD STUFF</li>
                    </ul>
                </div>
                {/* column3 */}
                <div className='col'>
                    <h4>WELL</h4>
                    <ul className='list-unstyled'>
                        <li>DANK MEMES</li>
                        <li>OTHER STUFF</li>
                        <li>GUD STUFF</li>
                    </ul>
                </div>
            </div>
            <hr></hr>
            <div className='row'>
                <p className='col-sm'>
                    &copy; YokuStudios | All right reserved | Terms of Services | Privacy
                </p>
            </div>
            <hr></hr>
        </div>
    </div>
  )
}

export default Footer;