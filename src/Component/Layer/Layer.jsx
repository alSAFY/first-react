import React, { Component } from 'react'
import './Layer.css';
import Head from './../Head/Head';
import Image from '../Image/Image';


export default class Layer extends Component {

  state ={
    layer: {
      display: 'd-none',
      alt: '',
      src: ''
    }
  }
  show = (src, alt)=>{
    document.body.style.overflow = 'hidden';
    let showLayer = {
      display:'',
      alt: alt,
      src: src
    };
    this.setState({layer: showLayer});
  }
  hide=()=>{
    document.body.style.overflow= 'visible';
    let hideLayer= {
      display:'d-none',
      alt: '',
      src: ''
    };
    this.setState({layer: hideLayer});
  }
  render() {
    
    let images = this.props.images;
    return (
      <div className=' row g-5'>
        {images.map((img, index) => <Image show={this.show}  key={index} src={img.src} alt={img.alt} />)}
        <div id='layer' className={this.state.layer.display + ' py-5 position-fixed bg-dark bg-opacity-50 mt-0'}>
        <div className="container bg-white rounded-4 position-relative mb-5 py-5">
          <i onClick={this.hide} className='fa-solid fa-close fa-3x position-absolute'></i>
            <div className='text-center w-75 m-auto my-4 '>
                <Head title={this.state.layer.alt} />
                <div className="body">
                    <img src={this.state.layer.src} alt={this.state.layer.alt} className="w-100" />
                    <p className='py-5 m-auto text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil cupiditate sapiente assumenda unde a rem cumque, eligendi excepturi dicta totam eveniet illum, ab voluptate quos.</p>
                    <button className="btn p-2 text-white" onClick={this.hide}>
                        <i className='fa-solid fa-close fa-x text-white pe-3'></i>
                        Close Window
                    </button>
                </div>
            </div>
        </div>
      </div>
      </div>
    )
  }
}
