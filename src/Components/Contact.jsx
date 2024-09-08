import React from 'react'
import { socialLinks } from '../Data/Data'

const Contact = () => {
    return (
        <div className="rn-contact-area rn-section-gap section-separator" id="contacts">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center">
                            <span className="subtitle">Contact</span>
                            <h2 className="title">Contact With Me</h2>
                        </div>
                    </div>
                </div>

                <div className="row mt--50 mt_md--40 mt_sm--40 mt-contact-sm">
                    <div className="col-lg-5">
                        <div className="contact-about-area">
                            <div className="thumbnail">
                                <img src="assets/images/contact/contact1.png" alt="contact-img" />
                            </div>
                            <div className="title-area">
                                <h4 className="title">Avinash Chandrakar</h4>
                                <span>MERN Stack Developer</span>
                            </div>
                            <div className="description">
                                <p>I am available for freelance work. Connect with me via and call in to my account.
                                </p>
                                <span className="phone">Phone: <a href="tel:01941043264">+91 6268745654</a></span>
                                <span className="mail">Email: <a href="mailto:admin@example.com">avichandraker@gmail.com</a></span>
                            </div>
                            <div className="footer">
                                <div className="social-share-style-1 mt-40">
                                    <span className="title">find with me</span>
                                    <ul className="social-share d-flex liststyle row">
                                        {socialLinks?.map((e) => (
                                            <li key={e.name} className='whatsapp m-0 col-2'>
                                                <a href={e.link} target="_blank" rel="noopener noreferrer">
                                                    <img src={e.img} alt="" />
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-aos-delay="600" className="col-lg-7 contact-input">
                        <div className="contact-form-wrapper">
                            <div className="introduce">

                                <form className="rnt-contact-form rwt-dynamic-form row" id="contact-form" method="POST" action="mail.php">

                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label for="contact-name">Your Name</label>
                                            <input className="form-control form-control-lg" name="contact-name" id="contact-name" type="text" />
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label for="contact-phone">Phone Number</label>
                                            <input className="form-control" name="contact-phone" id="contact-phone" type="text" />
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label for="contact-email">Email</label>
                                            <input className="form-control form-control-sm" id="contact-email" name="contact-email" type="email" />
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label for="subject">subject</label>
                                            <input className="form-control form-control-sm" id="subject" name="subject" type="text" />
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label for="contact-message">Your Message</label>
                                            <textarea name="contact-message" id="contact-message" cols="30" rows="10"></textarea>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <button name="submit" type="submit" id="submit" className="rn-btn">
                                            <span>SEND MESSAGE</span>
                                            <i data-feather="arrow-right"></i>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
