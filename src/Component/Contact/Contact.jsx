import React, { Component } from 'react'
import './Contact.css';
import Head from '../Head/Head';
export default class Contact extends Component {
    changeColor(){
        let userName = document.querySelector('[for="name"]');
        console.log(userName)

    }

  render() {
    return (
      <section id='contact' className='py-5'>
        <div className="container py-5">
            <Head title="CONTACT ME" />
            <div className="form w-75 m-auto">
                <div className="form-floating py-4">
                    <input onClick={this.changeColor} type="email" className="form-control form-control-lg " id="name" placeholder="Name" />
                    <label htmlFor="name">Name</label>
                </div>
                <div className="form-floating py-4">
                    <input type="email" className="form-control form-control-lg " id="email" placeholder="Email" />
                    <label htmlFor="email">Email Address</label>
                </div>
                <div className="form-floating py-4">
                    <input type="tel" className="form-control form-control-lg " id="phone" placeholder="name@example.com" />
                    <label htmlFor="phone">Phone Number</label>
                </div>
                <div className="form-floating py-4">
                    <textarea className="form-control form-control-lg " id="message" placeholder="Message" ></textarea>
                    <label htmlFor="message">Message</label>
                </div>
                <button className="btn p-4 mt-4 text-white fs-5">Send</button>

            </div>
        </div>
      </section>
    )
  }
}
