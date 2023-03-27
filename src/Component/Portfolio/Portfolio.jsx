import React, { Component } from 'react'
import Image from '../Image/Image';
import './Portfolio.css';
import cabin from './images/cabin.png'
import cake from './images/cake.png'
import circus from './images/circus.png'
import game from './images/game.png'
import safe from './images/safe.png'
import submarine from './images/submarine.png'
import Head from '../Head/Head';
import Layer from './../Layer/Layer';
export default class Portfolio extends Component {
  state = {
    images : [
      {
        alt: "LOG CABIN",
        src: cabin
      },
      {
        alt: "TASTY CAKE",
        src: cake
      }, 
      {
        alt: "CIRCUS TENT",
        src : circus
      }, 
      {
        alt : "CONTROLLER", 
        src : game
      }, 
      {
        alt : "LOCKED SAFE",
        src : safe
      }, 
      {
        alt : "SUBMARINE",
        src : submarine
      }
    ] 
  }
  show(src){
    console.log(src);
  }
  render() {
    return <>
        <section id="portfolio" className='py-5'>
            <div className="container">
            <Head title="PORTFOLIO" />
            <div className="body">
              <Layer images={this.state.images} />
              {/* {this.state.image.map((img, index) => <Image show={this.show} key={index} src={img.src} alt={img.alt} />)} */}
            </div>
            </div>
        </section>
    </>
  }
}
