import React from 'react'
import './ServiceMain.css'
import {Row, Col} from 'react-bootstrap'


const ServiceMain = () => {
  return (
    <section>
        <h3>We provide a wide range of creative</h3>
      <h3> services</h3>
      <h6 className='service__convert'>-</h6>
    <Row>
        <Col lg='12' md='12'>
            <div className='counter'>
                <div className='d-flex gap-5 align-item-center'> 
                   <div className='section_s'>
                    <div className='s-single'>
                        <h2>Softwere Development</h2>
                        <p className='tittle_t'>
                        <ul>
                        <li>Web Design & Development</li>
                        <li>Desktop Application</li>
                        <li>Inventory Softwere with Accounting</li>
                      </ul>
                        </p>
                    </div>

                    <div className='s-single'>
                        <h2>Academic Projects & Interships</h2>
                        <p className='tittle_t'>
                        <ul>
                        <li>Softwere Education</li>
                        <li>IT Projects</li>
                        <li>Course Offered</li>
                     </ul>
                        </p>
                    </div>

                    <div className='s-single'>
                        <h2>Business Consulting</h2>
                        <p className='tittle_t'>
                        <ul>
                        <li>Custom Corporate Training</li>
                        <li>Onsite Business Seminars</li>
                        <li>Web-based Marketing Services</li>
                      </ul>
                        </p>
                    </div>

                    <div className='s-single'>
                        <h2>Branding</h2>
                        <p className='tittle_t'>
                        <ul>
                        <li>Logo Creation</li>
                        <li>Video/Photo Editing</li>
                        <li>Banners/Brouchers Design</li>
                      </ul>
                        </p>
                    </div>

                    <div className='s-single'>
                        <h2>App Development</h2>
                        <p className='tittle_t'>
                        <ul>
                        <li>Mobile Based Application</li>
                        <li>Banking Application</li>
                        <li>Business Applications</li>
                      </ul>
                        </p>
                    </div>

                    <div className='s-single'>
                        <h2>Content creation</h2>
                        <p className='tittle_t'>
                        <ul>
                        <li>Digital Marketing</li>
                        <li>Social Media Networks</li>
                        <li>Search Engine Optimization(SEO)</li>
                      </ul>
                        </p>
                    </div>
                   </div>
                </div>
            </div>
        </Col>
    </Row>
  </section>
  )
}
export default ServiceMain
