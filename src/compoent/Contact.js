import React from "react"
import './contact.css';
import footer from '../assets/footer.png'
import Facebook from '../assets/facebook.png'
import Twitter from '../assets/twitter.png'
import Insta from '../assets/insta.png'
import Discord from '../assets/discord.png'
import Linkedin from '../assets/linkedin.png'
import Mail from '../assets/mail.png'
import Component from '../assets/compo.png'
import Thread from '../assets/Threads.png'
import { useMediaQuery } from "react-responsive";

const Contact = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  return (
    <footer className="footer">
      <div className="footer-container">
        <img className="footer-img" src={footer} alt="logoImage" />
        {isMobile || <div className="footer-vertical-line"></div>}
        <div className="footer-section">
          <h3>About KK</h3><br />
          <p>Our Story</p>
          <p>Character’s Story</p>
          <p>Meet the Team</p>
          
        </div>
        <div className="footer-section">
          <h3>UP COMING</h3>< br />
          <p>Marketplace</p>
          <p>NFT’s</p>
          <p>Whitepaper</p>
          
        </div>
        <div className="footer-section" id="contact">
          <h3>SOCIAL MEDIA</h3><br />
          <div className="social-icons">

            <a href="https://www.facebook.com/profile.php?id=100094547791381" target="Blank"><img src={Facebook} alt="facebook" /></a>
            <a href="https://twitter.com/kanineklans?s=21&t=IN1A6g80NSSrUEYEV8ZC-w" target="Blank"><img src={Twitter} alt="twitter" /></a>
            <a href="https://instagram.com/kanineklans?igshid=Y2I2MzMwZWM3ZA==" target="Blank"><img src={Insta} alt="instagram" /></a>
            <a href="https://www.linkedin.com/company/kanineklans/" target="Blank"><img src={Linkedin} alt= "linkedin"/></a>
            <a href="https://discord.gg/6ZHEcvjGXN" target="Blank"><img src={Discord} alt="discord" /></a>
            <a href="https://www.threads.net/@kanineklans?igshid=MzRlODBiNWFlZA==" target="Blank"><img src={Thread} alt="thread" /></a>

          </div>
          <h3 className="footer-contact-h1">CONTACT US</h3>
          <div className="mail">
          <a href="mailto:official@kanineklans.com" target="Blank"><img src={Mail} alt="mail" /> </a> &nbsp;  
          <a href="https://join.skype.com/invite/wzxEJUDAlQ0T" target="Blank"><img src={Component} alt="comp" /> </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <ul className="footer-nav">
          <p> Copyright SYBO 2023 - 2024 ,  All Rights Reserved.</p>
        </ul>
      </div>
    </footer>
  );
};


export default Contact;