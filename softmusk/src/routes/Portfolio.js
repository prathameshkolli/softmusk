import React from 'react'
import Footer from '../component/Footer'
import Navbar  from '../component/Navbar'
import PortfolioHome from '../component/PortfolioHome'
import Auto from '../component/Auto';
import Achievement from '../component/Achievement';



const Portfolio = () => {
  return (
    <>
      <Navbar/>
      <PortfolioHome/>
      <Auto/>
      <Achievement/>
      <Footer />
    </>
  )
}

export default Portfolio
