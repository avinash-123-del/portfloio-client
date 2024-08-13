import React from 'react'
import { socialLinks } from '../Data/Data'

const Header = () => {
    return (
        <div>
            <div className="d-none d-xl-block">
                <header className="rn-header-area d-flex align-items-start flex-column left-header-style">
                    <div className="logo-area">
                        <a href="index.html">
                            <img src="assets/images/logo/logo-06.png" alt="personal-logo" />
                        </a>
                    </div>
                    <nav id="sideNavs" className="mainmenu-nav navbar-example2 onepagenav">
                        <ul className="primary-menu nav nav-pills">
                            <li className="nav-item current"><a className="nav-link smoth-animation-two" href="#home"><i data-feather="home"></i> Home</a></li>
                            <li className="nav-item"><a className="nav`-link smoth-animation-two" href="#portfolio"><i data-feather="layers"></i>Portfolio</a></li>
                            <li className="nav-item"><a className="nav-link smoth-animation-two" href="#resume"><i data-feather="users"></i>Resume</a></li>
                            <li className="nav-item"><a className="nav-link smoth-animation-two" href="#contacts"><i data-feather="message-circle"></i>Contact</a></li>
                        </ul>
                    </nav>
                    <div className="footer">
                        <div className="social-share-style-1 mt--40">
                            <span className="title">find with me</span>
                            <ul className="social-share d-flex liststyle row">
                                {socialLinks?.map((e) => (
                                    <li key={e.name} className='whatsapp col-3'>
                                        <a href={e.link} target="_blank" rel="noopener noreferrer">
                                            <img src={e.img} alt="" />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </header>
            </div>

            <div className="header-style-2 d-block d-xl-none">
                <div className="row align-items-center">
                    <div className="col-6">
                        <div className="logo">
                            <a href="index.html">
                                <img src="assets/images/logo/logo.png" alt="Logo" />
                            </a>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="header-right text-end">
                            <div className="hamberger-menu">
                                <i id="menuBtn" className="feather-menu humberger-menu"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="popup-mobile-menu">
                <div className="inner">
                    <div className="menu-top">
                        <div className="menu-header">
                            <a className="logo" href="index.html">
                                <img src="assets/images/logo/logos-circle.png" alt="Personal Portfolio" />
                            </a>
                            <div className="close-button">
                                <button className="close-menu-activation close"><i data-feather="x"></i></button>
                            </div>
                        </div>
                        <p className="discription">Inbio is a personal portfolio template. You can customize all.</p>
                    </div>
                    <div className="content">
                        <ul className="primary-menu nav nav-pills">
                            <li className="nav-item"><a className="nav-link smoth-animation-two active" href="#home">Home</a></li>
                            <li className="nav-item"><a className="nav-link smoth-animation-two" href="#portfolio">Portfolio</a></li>
                            <li className="nav-item"><a className="nav-link smoth-animation-two" href="#resume">Resume</a></li>
                            <li className="nav-item"><a className="nav-link smoth-animation-two" href="#contacts">Contact</a></li>
                        </ul>
                        <div className="social-share-style-1 mt--40">
                            <span className="title">find with me</span>
                            <ul className="social-share d-flex liststyle">
                                <li className="facebook"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-facebook">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                </svg></a>
                                </li>
                                <li className="instagram"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-instagram">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg></a>
                                </li>
                                <li className="linkedin"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-linkedin">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                    <rect x="2" y="9" width="4" height="12"></rect>
                                    <circle cx="4" cy="4" r="2"></circle>
                                </svg></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
