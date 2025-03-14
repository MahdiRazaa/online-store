import React from 'react'
import user1 from '../assets/user1.jpg'
import user2 from '../assets/user2.jpg'
import user3 from '../assets/user3.jpg'


function Testimonials() {
  return (
    <>
       <div class="testimonial-section">
        <div class="testimonial-carousel">
            <div class="testimonial-card">
                <div class="client-image">
                    <img src={user1} alt="John Doe" />
                </div>
                <p class="testimonial-text">This company exceeded our expectations. Their attention to detail and professionalism is unmatched.</p>
                <h3>John Doe</h3>
                <p class="client-role">CEO, TechCorp</p>
            </div>
            <div class="testimonial-card">
                <div class="client-image">
                    <img src={user2} alt="Jane Smith"/>
                </div>
                <p class="testimonial-text">Exceptional service and top-notch results. I highly recommend them for all your needs.</p>
                <h3>Jane Smith</h3>
                <p class="client-role">Marketing Manager, Innovate Inc.</p>
            </div>
            <div class="testimonial-card">
                <div class="client-image">
                    <img src={user3} alt="Michael Brown"/>
                </div>
                <p class="testimonial-text">A reliable and professional team that truly understands client requirements.</p>
                <h3>Michael Brown</h3>
                <p class="client-role">Project Lead, BuildWorks</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Testimonials