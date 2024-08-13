import React from 'react'

const SliderArea = () => {
  return (
    <section id="home" class="slider-style-5 rn-section-gap pb--110 align-items-center with-particles">
    <div id="particles-js"></div>
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="banner-inner">
                    <div class="thumbnail gradient-border gradient-animation">
                        <img id="border" class="gradient-border" src="assets/images/profile.jpg" alt=""/>
                    </div>
                    <h1>Avinash Chandraker</h1>
                    <span class="cd-headline clip is-full-width">
                        <span>I am a</span>
                    <span class="cd-words-wrapper ms-4 mt-2">
                            <b class="is-visible">MERN Stack Developer.</b>
                            <b class="is-hidden">Designer.</b>
                            <b class="is-hidden">Freelancer.</b>
                        </span>
                    </span>
                    <div class="button-area">
                        <a class="rn-btn" href="#contacts"><span>CONTACT ME</span></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default SliderArea
