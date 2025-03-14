import React from 'react'
import logo from '../assets/logo.png'

function Footer() {
  return (
    <>
     <div class="footer-main">
      <div class="row">
        <div class="col">
          <h4><img className='logo-pic' src={logo} width={100} alt="" srcset=""/></h4>
          <p><a href="#">Address: Karachi,Pakistan</a></p>
          <p><a href="#">Phone No:0300-0000000</a></p>
          <p><a href="#">E-mail:Info1234@gmail.com</a></p>
          <p><a href="#">Help</a></p>
        </div>
        <div class="col">
          <h4>FOLLOW US</h4>
          <p><a href="#">Facebook</a></p>
          <p><a href="#">Instagram</a></p>
          <p><a href="#">CAREERS</a></p>
          <p><a href="#">Youtube</a></p>
          <p><a href="#">TIKTOK</a></p>
          <p><a href="#">Twitter</a></p>
        </div>
        <div class="col">
          <h4>INFORMATION</h4>
          <p><a href="#">ABOUT US</a></p>
          <p><a href="#">CONTACT US</a></p>
          <p><a href="#">CAREERS</a></p>
          <p><a href="#">STORE LOCATOR</a></p>
          <p><a href="#">LIMELIGHT TREND</a></p>
          <p><a href="#">Blogs</a></p>
        </div>
        <div class="col">
          <h4>POLICIES</h4>
          <p><a href="#">Privacy Policy</a></p>
          <p><a href="#">Shipping Policy</a></p>
          <p><a href="#">Ordering & Tracking</a></p>
          <p><a href="#">STORE LOCATOR</a></p>
          <p><a href="#">Return & Exchanges</a></p>
          <p><a href="#">Cookies Policy</a></p>
        </div>
      </div>
    </div>
    <div class="footer-last">
      <h5>Copy Right |All Reserved| company</h5>
    </div>
    </>
  )
}

export default Footer