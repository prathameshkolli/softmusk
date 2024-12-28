import React from 'react'
import './Home.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image from '../images/convert.png'
import sun from '../images/sun.png'

const Home = () => {
  return (
    <>
    <div className='home'>
        <div className="container">
            <div className="content">
                <h1><strong>Small Teams Delivering High End Solutions </strong></h1>
                <h5>We believe in small but high impact teams. We are the one who build software and no one can understand software better then its creators.</h5>
            </div>
        </div>
    </div>
    <section>
        <div className='m__container'>
            <div className='c_photo'>
                <img src={image} alt='' />
            </div>
            
                <div className='v_container'>
                <img className='image' src={sun} alt=""/>
                    <h2 className='sun'>Convert your idea's into reality</h2>
                    <h6 className='bss__convert'></h6>
                    <h5>We build products that users love</h5>
                    <h6>Get your web and mobile app developed to promote 
                        your business and product. At Softmusk, we work across
                        various browsers with different platforms ranging from 
                        Desktops to Mobile phones and aimed to fullfill the client's
                        requirement's.
                    </h6>
                </div>
      </div>
    </section>
    </>
  )
}

export default Home
