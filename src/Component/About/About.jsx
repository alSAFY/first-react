import React, { Component } from 'react'
import './About.css';
import Head from '../Head/Head';

export default class About extends Component {
  render() {
    return (
      <div id='about' className='py-5'>
        <Head title="ABOUT" />
        <div className="container pb-5">
            <div className="row w-lg-75 m-auto">
                <div className="col-lg-6 px-5">
                    <div className="text-white ">
                        <p className='fs-5'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    </div>
                </div>
                <div className="col-lg-6 px-5">
                    <div className="text-white">
                        <p className='fs-5'>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
