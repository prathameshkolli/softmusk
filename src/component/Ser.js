import React from "react"
import "./Ser.css"
import image from '../images/of.jpg'
import picture from '../images/billing.jpg'

const ServiceMain = () => {
  return(
    <section className='service'>
        <div class="container ">
            <div class="row">
            <div class="col">
                <h2><strong>Service Details</strong></h2>
                We are software Service Company,
                 believe in delivering world-class software solutions by combining passion with innovation and technology into creating great products that drive client's success.
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col">
                    <h2><strong>Point of Sale</strong></h2>
                    The place where a customer executes the payment for goods or service and where sales taxes may become payable.
                </div>
                <div className="image">
                    <img alt="img" src={image}/>
                </div>
            </div>
        </div>
        
        <div class="container">
            <div class="row">
                <div class="col">
                <h2><strong>Restaurant Billing</strong></h2>
                <h5>Features of a Modern Restaurant Billing System
                    Billing</h5>
                Order punching is still one of the main functions of the POS,
                though now it’s more about the speed and accuracy your POS can offer for it.
                 Also, with orders coming from various sources,
                  it becomes even more important to streamlines this process and ensure there aren’t delays in order fulfilment.
                </div>
                <div className="image">
                <img alt="img" src={picture}/>
                </div>
            </div>
        </div>


    <div class="container text-center">
        <div class="row">
            <div class="col">
            <h2><strong>App Development</strong></h2>
            1. We build responsive custom 
            mobile applications with UX for 
            both iOS and Android.

            2. Successful mobile application's
             built using the right tools and 
              methodologies for great usability 
             and good performance.

             3. We find the right balance with 
             price, quality & requirements. That 
              help us build a reputation as a 
              reliable & affordable development company. 
            </div>   
        </div>
    </div>
  </section>

  )
}
export default ServiceMain