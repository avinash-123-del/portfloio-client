import React from 'react'
import { skills_1, skills_2 } from '../Data/Data'

const Resume = () => {
    return (
        <div className="rn-resume-area rn-section-gap section-separator" id="resume">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center">
                            <span className="subtitle">1+ Years of Experience</span>
                            <h2 className="title">My Resume</h2>
                        </div>
                    </div>
                </div>
                <div className="row mt--45">
                    <div className="col-lg-12">
                        <ul className="rn-nav-list nav nav-tabs" id="myTabs" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link" id="experience-tab" data-bs-toggle="tab" href="#experience" role="tab" aria-controls="experience" aria-selected="false">experience</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="professional-tab" data-bs-toggle="tab" href="#professional" role="tab" aria-controls="professional" aria-selected="false">professional
                                    Skills</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" id="education-tab" data-bs-toggle="tab" href="#education" role="tab" aria-controls="education" aria-selected="true">education</a>
                            </li>
                        </ul>

                        <div className="rn-nav-content tab-content" id="myTabContents">
                            <div className="tab-pane  fade " id="education" role="tabpanel" aria-labelledby="education-tab">
                                <div className="personal-experience-inner mt--40">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-12">
                                            <div className="content">
                                                <h4 className="maintitle">Education Quality</h4>
                                                <div className="experience-list">

                                                    <div className="resume-single-list">
                                                        <div className="inner">
                                                            <div className="heading">
                                                                <div className="title">
                                                                    <h4>Master of Technology</h4>
                                                                    <span>Sant Longowal Institute of Engineering and Technology, Punjab</span>
                                                                    <span className='mt-2'>2020-2022</span>
                                                                </div>
                                                                <div className="date-of-time">
                                                                    <span>9.1/10</span>
                                                                </div>
                                                            </div>
                                                            <p className="description">Indstrumentation and Control Engineering</p>
                                                        </div>
                                                    </div>

                                                    <div className="resume-single-list">
                                                        <div className="inner">
                                                            <div className="heading">
                                                                <div className="title">
                                                                    <h4>Bachelor of Engineering</h4>
                                                                    <span>Chhatrapati Shivaji Institute Of Technology, Durg</span>
                                                                    <span>2015-2019</span>
                                                                </div>
                                                                <div className="date-of-time">
                                                                    <span>72%</span>
                                                                </div>
                                                            </div>
                                                            <p className="description">Electrical and Electronics Engineering</p>
                                                        </div>
                                                    </div>

                                                    <div className="resume-single-list">
                                                        <div className="inner">
                                                            <div className="heading">
                                                                <div className="title">
                                                                    <h4> Higher Secondary Certificate (HSC – Class 12)</h4>
                                                                    <span>Wesleyan English Medium Higher Secondary School</span>
                                                                    <span>2014-2015</span>
                                                                </div>
                                                                <div className="date-of-time">
                                                                    <span>83%</span>
                                                                </div>
                                                            </div>
                                                            <p className="description"> Maths and Science</p>
                                                        </div>
                                                    </div>

                                                    <div className="resume-single-list">
                                                        <div className="inner">
                                                            <div className="heading">
                                                                <div className="title">
                                                                    <h4> Senior Secondary Certificate (SSC – Class 10)</h4>
                                                                    <span>Wesleyan English Medium Higher Secondary School</span>
                                                                    <span>2012-2013</span>
                                                                </div>
                                                                <div className="date-of-time">
                                                                    <span>79%</span>
                                                                </div>
                                                            </div>
                                                            <p className="description"> Maths and Science</p>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="tab-pane fade " id="professional" role="tabpanel" aria-labelledby="professional-tab">
                                <div className="personal-experience-inner mt--40">
                                    <div className="row row--40">
                                        <span className="subtitle">Features</span>
                                        <h4 className="maintitle">Design & Development Skills</h4>
                                        <div className="col-lg-6 col-md-6 col-12">
                                            <div className="progress-wrapper">
                                                <div className="content">
                                                    {skills_1?.map((e, i) => (
                                                        <div key={i} className="progress-charts">
                                                            <h6 className="heading heading-h6">{e.name}</h6>
                                                            <div className="progress">
                                                                <div className="progress-bar wow fadeInLeft" data-wow-duration="0.5s" data-wow-delay=".3s" role="progressbar" style={{ "width": e.percentage + '%' }} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"><span className="percent-label">{e.percentage}%</span></div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6 col-12 mt_sm--60">
                                            <div className="progress-wrapper">
                                                <div className="content">
                                                    {skills_2?.map((e, i) => (
                                                        <div key={i} className="progress-charts">
                                                            <h6 className="heading heading-h6">{e.name}</h6>
                                                            <div className="progress">
                                                                <div className="progress-bar wow fadeInLeft" data-wow-duration="0.5s" data-wow-delay=".3s" role="progressbar" style={{ "width": e.percentage + '%' }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"><span className="percent-label">{e.percentage}%</span></div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="tab-pane show active single-tab-area fade" id="experience" role="tabpanel" aria-labelledby="experience-tab">
                                <div className="personal-experience-inner mt--40">
                                    <div className="row">
                                        <div className="col-12 mt_md--60 mt_sm--60">
                                            <div className="content">
                                                <h4 className="maintitle">Job Experience</h4>
                                                <div className="experience-list">

                                                    <div className="resume-single-list">
                                                        <div className="inner">
                                                            <div className="heading">
                                                                <div className="title">
                                                                    <h4>MERN Stack Developer</h4>
                                                                    <span><b>Sjain Ventures</b></span>
                                                                </div>
                                                                <div className="date-of-time">
                                                                    <span>2023-present</span>
                                                                </div>
                                                            </div>
                                                            <p className="description">With over 1+ year's of experience as a professional MERN stack developer at Sjain Ventures, I specialize in building full-stack web applications, delivering efficient and scalable solutions across various projects.</p>
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
