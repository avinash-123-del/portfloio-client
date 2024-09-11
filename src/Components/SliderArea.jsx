import React from 'react'

const SliderArea = () => {
  return (
    <section id="home" className="slider-style-5 rn-section-gap pb--110 align-items-center with-particles">
    <div id="particles-js"></div>
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="banner-inner">
                    <div className="thumbnail gradient-border gradient-animation">
                        <img id="border" className="gradient-border" src="assets/images/profile.jpg" alt=""/>
                    </div>
                    <h1>Avinash Chandraker</h1>
                    <span className="cd-headline clip is-full-width">
                        <span>I am a</span>
                    <span className="cd-words-wrapper ms-4 mt-2">
                            <b className="is-visible">MERN Stack Developer.</b>
                            <b className="is-hidden">Designer.</b>
                            <b className="is-hidden">Freelancer.</b>
                        </span>
                    </span>
                    <div className="button-area">
                        <a className="rn-btn" href="/assets/Avinash_Chandraker.pdf" download={true} ><span>Download CV</span></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default SliderArea
