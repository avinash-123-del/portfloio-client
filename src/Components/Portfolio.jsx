import React from 'react'
import { portfolioData } from '../Data/Data'
import { Link } from 'react-router-dom'

const Portfolio = () => {
    return (
        <div className="rn-portfolio-area rn-section-gap section-separator" id="portfolio">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center">
                            <span className="subtitle">Visit my portfolio and keep your feedback</span>
                            <h2 className="title">My Portfolio</h2>
                        </div>
                    </div>
                </div>

                <div className="row row--25 mt--10 mt_md--10 mt_sm--10">
                    {portfolioData?.map((e, i) => (
                        <div key={i}  className="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30">
                            <div className="rn-portfolio" >
                                <div className="inner">
                                    <div className="thumbnails">
                                        <Link to={e?.website_link}>
                                            <img src={e?.img} alt="Personal Portfolio Images" />
                                        </Link>
                                    </div>
                                    <div className="content">
                                        <div className="category-info">
                                            <div className="category-list">
                                                {e?.name}
                                            </div>
                                            <div className="meta">
                                                <Link to={e?.website_link}><span> <i className="feather-heart"></i>
                                                    visit</span></Link>
                                            </div>
                                        </div>
                                        {/* <h4 className="title"><a href="javascript:void(0)">The services provide for design <i
                                            className="feather-arrow-up-right"></i></a></h4> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}





                </div>
            </div>
        </div>
    )
}

export default Portfolio
