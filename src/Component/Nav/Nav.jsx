import React, { Component } from 'react'
import './Nav.css'

export default class Nav extends Component {
  render() {
    return <>
        <div className=" nav-bar py-1 w-100">
        <nav className="navbar container navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand text-white fs-3 fw-bold" href="#home">START REACT</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link active text-white fw-bold p-3 rounded-3" aria-current="page" href="#portfolio">PORTFOLIO</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white fw-bold p-3 rounded-3" href="#about">ABOUT</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white fw-bold p-3 rounded-3" href="#contact">CONTACT</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        </div>
    </>
  }
}
