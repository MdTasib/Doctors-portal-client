import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact py-5">
            <div className="container">
                <div className="section-header text-center text-white mb-5">
                    <h5 className="text-info">CONTACT US</h5>
                    <h1>Always  Connect With Us</h1>
                </div>
                <div className="col-md-9 mx-auto">
                    <form action="">
                        <div className="form-group mb-2">
                            <input type="text" className="form-control" placeholder="Email Address *" />
                        </div>
                        <div className="form-group mb-2">
                            <input type="text" className="form-control" placeholder="Subject *" />
                        </div>
                        <div className="form-group mb-2">
                            <textarea name="" className="form-control" id="" cols="10" rows="8" placeholder="Message *"></textarea>
                        </div>
                        <div className="form-group text-center">
                            <button type="button" className="btn btn-info text-white"> Submit </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;