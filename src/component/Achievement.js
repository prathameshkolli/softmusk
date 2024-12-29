import React from 'react'
import './Achievement.css'
import {Row, Col} from 'react-bootstrap'
import CountUp from 'react-countup'
import {IoMdContacts} from 'react-icons/io'
import {FaTrophy} from 'react-icons/fa'
import {BsFillBagCheckFill} from 'react-icons/bs'




const Achievement = () => {
  return (
      <section>
        <div className='our__work'> 
            <h2>Our Work</h2>
            <h6 className='bss'>_</h6>
        </div>
        
        <Row>
            <Col lg='12' md='12'>
                <div className='about__counter'>
                    <div className='d-flex gap-5 align-item-center'>
                       <div className='section__s'>
                        <div className='single__counter'>
                            <div className='i__icon'>
                                <IoMdContacts/>
                            </div>
                            <span>
                                <CountUp start={0} end={300} duration={3}  />
                            </span>
                            <p className='counter__title'>
                               Our Clients
                            </p>
                        </div>

                        <div className='single__counter'>
                            <div className='i__icon'>
                           

                            </div>
                            <span>
                                <CountUp start={0} end={10} duration={2}  />
                            </span>
                            <p className='counter__title'>
                                Our Team
                            </p>
                        </div>

                        <div className='single__counter'>
                             <div className='i__icon'>
                                <FaTrophy/>
                            </div>
                            <span>
                                <CountUp start={0} end={10} duration={2}  />
                            </span>
                            <p className='counter__title'>
                                Projects
                            </p>
                        </div>

                        <div className='single__counter'>
                            <div className='i__icon'>
                                <BsFillBagCheckFill/>
                            </div>
                            <span>
                                <CountUp start={0} end={5} duration={2}  />
                            </span>
                            <p className='counter__title'>
                                Experience
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

export default Achievement
