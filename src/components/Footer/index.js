import React from 'react';
import './index.css';

const Footer = () => {

 return (<div className='footerContainer'>

    <b>Developer</b>: Bacilio Alexander Bolaños Lima <br/>
    <b>Email:</b> alexander.bolanos@ENCORA.COM<br/>    
    <b>Date:</b> 19/08/2021 <br/>
    <b>GitHub:</b> <a href="https://github.com/alxBL85/synack_coding_challenge">https://github.com/alxBL85/synack_coding_challenge</a><br/>
    <b>Version:</b> 1.0.5
    </div>
 );   
}

export default React.memo(Footer);