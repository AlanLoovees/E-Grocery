import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
    return(
        <div className="footer">
            <div className="container">
                <div className="row justify-content-center">             
                    <div className="col-4 offset-1 col-sm-2">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link className="text-white" to="/home">Home</Link></li>
                            <li><Link className="text-white" to="/aboutus">About</Link></li>
                            <li><Link className="text-white" to="/cart">Cart</Link></li>
                            <li><Link className="text-white" to="/contactus">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="col-7 col-sm-5">
                        <h5>Get to us at</h5>
                        <address>
                        54, Burrow Street,<br />
                        Willingdon Island, Kochi<br />
                        Kerala, INDIA<br />
                        <i className="fa fa-phone fa-lg"></i>: +91 98765 43210<br />
                        <i className="fa fa-envelope fa-lg"></i>:{" "}<a className="text-white" href="mailto:e-grocery@commerce.org">
                            e-grocery@commerce.org</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-4">
                        <h5>Our socials</h5>
                        <div>
                            <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id=">Facebook{" "}<i className="fa fa-facebook"></i></a><br/>
                            <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/">Linkedin{" "}<i className="fa fa-linkedin"></i></a><br/>
                            <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/">Twitter{" "}<i className="fa fa-twitter"></i></a><br/>
                            <a className="btn btn-social-icon btn-google" href="http://youtube.com/">YouTube{" "}<i className="fa fa-youtube"></i></a><br/>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">             
                    <div className="col-auto copyright">
                        <p>© Copyright 2020 E-Grocery</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;