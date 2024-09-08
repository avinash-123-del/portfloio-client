import React from 'react'
import { skills_1, skills_2 } from '../Data/Data'

const Resume = () => {
    return (
        <div class="rn-resume-area rn-section-gap section-separator" id="resume">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-title text-center">
                            <span class="subtitle">1+ Years of Experience</span>
                            <h2 class="title">My Resume</h2>
                        </div>
                    </div>
                </div>
                <div class="row mt--45">
                    <div class="col-lg-12">
                        <ul class="rn-nav-list nav nav-tabs" id="myTabs" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link" id="experience-tab" data-bs-toggle="tab" href="#experience" role="tab" aria-controls="experience" aria-selected="false">experience</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="professional-tab" data-bs-toggle="tab" href="#professional" role="tab" aria-controls="professional" aria-selected="false">professional
                                    Skills</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" id="education-tab" data-bs-toggle="tab" href="#education" role="tab" aria-controls="education" aria-selected="true">education</a>
                            </li>
                        </ul>

                        <div class="rn-nav-content tab-content" id="myTabContents">
                            <div class="tab-pane  fade " id="education" role="tabpanel" aria-labelledby="education-tab">
                                <div class="personal-experience-inner mt--40">
                                    <div class="row">
                                        <div class="col-lg-12 col-md-12 col-12">
                                            <div class="content">
                                                <h4 class="maintitle">Education Quality</h4>
                                                <div class="experience-list">

                                                    <div class="resume-single-list">
                                                        <div class="inner">
                                                            <div class="heading">
                                                                <div class="title">
                                                                    <h4>Master of Technology</h4>
                                                                    <span>Sant Longowal Institute of Engineering and Technology, Punjab</span>
                                                                    <span className='mt-2'>2020-2022</span>
                                                                </div>
                                                                <div class="date-of-time">
                                                                    <span>9.1/10</span>
                                                                </div>
                                                            </div>
                                                            <p class="description">Indstrumentation and Control Engineering</p>
                                                        </div>
                                                    </div>

                                                    <div class="resume-single-list">
                                                        <div class="inner">
                                                            <div class="heading">
                                                                <div class="title">
                                                                    <h4>Bachelor of Engineering</h4>
                                                                    <span>Chhatrapati Shivaji Institute Of Technology, Durg</span>
                                                                    <span>2015-2019</span>
                                                                </div>
                                                                <div class="date-of-time">
                                                                    <span>72%</span>
                                                                </div>
                                                            </div>
                                                            <p class="description">Electrical and Electronics Engineering</p>
                                                        </div>
                                                    </div>

                                                    <div class="resume-single-list">
                                                        <div class="inner">
                                                            <div class="heading">
                                                                <div class="title">
                                                                    <h4> Higher Secondary Certificate (HSC – Class 12)</h4>
                                                                    <span>Wesleyan English Medium Higher Secondary School</span>
                                                                    <span>2014-2015</span>
                                                                </div>
                                                                <div class="date-of-time">
                                                                    <span>83%</span>
                                                                </div>
                                                            </div>
                                                            <p class="description"> Maths and Science</p>
                                                        </div>
                                                    </div>

                                                    <div class="resume-single-list">
                                                        <div class="inner">
                                                            <div class="heading">
                                                                <div class="title">
                                                                    <h4> Senior Secondary Certificate (SSC – Class 10)</h4>
                                                                    <span>Wesleyan English Medium Higher Secondary School</span>
                                                                    <span>2012-2013</span>
                                                                </div>
                                                                <div class="date-of-time">
                                                                    <span>79%</span>
                                                                </div>
                                                            </div>
                                                            <p class="description"> Maths and Science</p>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="tab-pane fade " id="professional" role="tabpanel" aria-labelledby="professional-tab">
                                <div class="personal-experience-inner mt--40">
                                    <div class="row row--40">
                                        <span class="subtitle">Features</span>
                                        <h4 class="maintitle">Design & Development Skills</h4>
                                        <div class="col-lg-6 col-md-6 col-12">
                                            <div class="progress-wrapper">
                                                <div class="content">
                                                    {skills_1?.map((e, i) => (
                                                        <div key={i} class="progress-charts">
                                                            <h6 class="heading heading-h6">{e.name}</h6>
                                                            <div class="progress">
                                                                <div class="progress-bar wow fadeInLeft" data-wow-duration="0.5s" data-wow-delay=".3s" role="progressbar" style={{ "width": e.percentage + '%' }} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"><span class="percent-label">{e.percentage}%</span></div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-lg-6 col-md-6 col-12 mt_sm--60">
                                            <div class="progress-wrapper">
                                                <div class="content">
                                                    {skills_2?.map((e, i) => (
                                                        <div key={i} class="progress-charts">
                                                            <h6 class="heading heading-h6">{e.name}</h6>
                                                            <div class="progress">
                                                                <div class="progress-bar wow fadeInLeft" data-wow-duration="0.5s" data-wow-delay=".3s" role="progressbar" style={{ "width": e.percentage + '%' }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"><span class="percent-label">{e.percentage}%</span></div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div class="tab-pane show active single-tab-area fade" id="experience" role="tabpanel" aria-labelledby="experience-tab">
                                <div class="personal-experience-inner mt--40">
                                    <div class="row">
                                        <div class="col-12 mt_md--60 mt_sm--60">
                                            <div class="content">
                                                <h4 class="maintitle">Job Experience</h4>
                                                <div class="experience-list">

                                                    <div class="resume-single-list">
                                                        <div class="inner">
                                                            <div class="heading">
                                                                <div class="title">
                                                                    <h4>MERN Stack Developer</h4>
                                                                    <span><b>Sjain Ventures</b></span>
                                                                </div>
                                                                <div class="date-of-time">
                                                                    <span>2023-present</span>
                                                                </div>
                                                            </div>
                                                            <p class="description">With over 1+ year's of experience as a professional MERN stack developer at Sjain Ventures, I specialize in building full-stack web applications, delivering efficient and scalable solutions across various projects.</p>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume
