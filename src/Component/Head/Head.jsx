import React, { Component } from 'react'
import './Head.css';

export default class Head extends Component {
  render() {
    return (
        <div className="head py-5">
        <h2 className='text-center fw-bold'>{this.props.title}</h2>
        <div className="icon position-relative">
            <i className="fa-solid fa-star fa-2x"></i>
        </div>
    </div>
    )
  }
}
