import { Component } from "react";
import './Footer.css'
export default class Footer extends Component{
    render(){
        return(
            <section id="footer" className="pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 py-4">
                            <div className="text-center text-white">
                                <h2>LOCATION</h2>
                                <p className="fs-4 p-4">2215 John Daniel Drive Clark, MO 65243</p>
                            </div>
                        </div>
                        <div className="col-lg-4 py-4">
                            <div className="text-center text-white">
                                <h2>AROUND THE WEB</h2>
                                <div className="p-4 d-flex justify-content-sm-center justify-content-lg-between">
                                    <div className="icon">
                                        <i className="fa-brands fa-facebook-f fs-5"></i>
                                    </div>
                                    <div className="icon">
                                    <i className="fa-brands fa-twitter fs-5"></i>
                                    </div>
                                    <div className="icon">
                                    <i className="fa-brands fa-linkedin-in fs-5"></i>
                                    </div>
                                    <div className="icon">
                                    <i className="fa-solid fa-globe fs-5"></i>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 py-4">
                            <div className="text-center text-white">
                                <h2>ABOUT FREELANCER</h2>
                                <p className="fs-5 p-4">2Freelance is a free to use, MIT licensed Bootstrap theme created by Route</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="copy bg-dark">
                    <p className="text-center py-4 text-white  m-0">Copyright © Your Website 2021</p>
                </div>
            </section>
        )
    }
}