import React from 'react'
import './Mission.css'
import {Row, Col} from 'react-bootstrap'
import {RiMedalFill} from 'react-icons/ri'
import {FaEye} from 'react-icons/fa'
import {GiStairsGoal} from 'react-icons/gi'

const Mission = () => {
  return (
    <section>
    <Row>
        <Col lg='12' md='12'>
            <div className='counter'>
                <div className='d-flex gap-5 align-item-center'> 
                   <div className='section_s'>
                    <div className='single'>
                        <RiMedalFill className='icon__icon' />
                        <h2>Our Mission</h2>
                        <p className='tittle_t'>
                        To provide cutting-edge Information Technology training to 
                        businesses and individuals through highly focused, 
                        cost effective Job oriented training programs.
                        </p>
                    </div>

                    <div className='single'>
                        <FaEye className='icon__icon' />
                        <h2>Vision</h2>
                        <p className='tittle_t'>
                        We're passionate about customers and are working to meet 
                        the needs they have today and innovating 
                        to meet the needs they will have tomorrow.
                        </p>
                    </div>

                    <div className='single'>
                        <GiStairsGoal className='icon__icon' />
                        <h2>Our Approach</h2>
                        <p className='tittle_t'>
                        Our corporate identity defines the kind of company we are
                        now and the one we need to be in the future. Central to 
                        that identity is a commitment to create ways to 
                        help customers thrive in a changing world.
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

export default Mission
