import React from 'react'
import { Link } from 'react-router-dom'
import './About.css'
import Timeline from '../Timeline/Timeline'
const About = () => {
  return (
    <div className="about-con">
        <Link to='/slider'>
        
        <div className="shop-now-sec">
          <p>Shop Now</p>
        </div>
        </Link>
        <Timeline></Timeline>
        <p className='about-c'>About <br></br>Neon Store
Welcome to Neon Store, your ultimate destination for digital game keys and software! We provide instant access to a vast collection of games across multiple platforms, ensuring a seamless and secure shopping experience for gamers worldwide.<br></br>
<br></br>
Why Choose Us?<br></br>

🎮 Instant Delivery – Get your game keys delivered instantly after purchase.<br></br>

🔍 Easy Search & Categories – Find your favorite games effortlessly using our advanced search and category filters.<br></br>

💰 Best Deals & Discounts – Enjoy exclusive offers on top-rated games.<br></br>

🔒 Safe & Secure Payments – Buy with confidence, knowing your transactions are protected.<br></br>


At Neon Store, we believe gaming should be fast, affordable, and hassle-free. Whether you're looking for the latest AAA titles, indie gems, or classic favorites, we’ve got you covered.<br></br>


🚀 Level up your gaming experience with Neon Store today!

</p>
    </div>
  )
}

export default About