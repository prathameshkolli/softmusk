import React from 'react'
import './PortfolioHome.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import image from '../images/hhhh.jpg'

const PortfolioHome = () => {
  return (
    <>
    <div className='p_home'>
        <div className="container">
            <div className="content">
                <h1><strong>Portfolio </strong></h1>
        
            </div>
        </div>
    </div>
    <section>
        <div className='p__container'>
       
            <div className='p_photo'>
                <img src={image} alt='' />
            </div>
            
                <div className='p_container'>
                
                    {/* <h2 className='sun_p'>Our Objective</h2> */}
                    <h1>Our Objective</h1>
                    <h6 className='bss__pp'>-</h6>
                    <h6>With an objective to solve complex issues 
                        for our clients, we are expertised in product
                         development, custom software development across
                          latest technologies. Scalable web apps for iOS 
                          and Android.

                            We focused on building long term relationships 
                            with our clients, empowering them to analyze their 
                            business through a digital lens. Our Industry expertise 
                            include Analytics Applications, Online Retail, Travel,
                             Healthcare, Business Information & Media, and other 
                             emerging industries.
                    </h6>
                </div>
          
      </div>
    </section>
    </>
  )
}

export default PortfolioHome
