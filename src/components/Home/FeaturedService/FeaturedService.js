import React from 'react';
import featured from '../../../images/featured.png'
const FeaturedService = () => {
    return (
        <section className="features-service py-3">
            <div className="container mb-5">
                <div className="row mb-5">
                    <div className="col-md-5 mb-4 m-md-0">
                        <img className="img-fluid" src={featured} alt="" />
                    </div>
                    <div className="col-md-7 align-self-center">
                        <h1>Exceptional Dental Care, On Your Term</h1>
                        <p className="text-secondary my-5">
                            It is a long established fact that a reader will be distracted
                            by the readable content of a page when looking at its
                            layout. The point of using Lorem Ipsumis that it has
                            a more-or-less normal distribution of letters,as opposed
                            to using ‘Content here
                        </p>
                        <button className="btn btn-info text-white">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedService;