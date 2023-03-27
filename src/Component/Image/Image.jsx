import React, { Component } from 'react'
import './image.css';
import Layer from '../Layer/Layer';

export default class Image extends Component {
  

  
  render() {
    
    let { alt, src, show} = this.props;
    return (<>
      <div onClick={()=>show(src, alt)} className='image col-xl-4 col-lg-6 col-sm-12 rounded-3'>
        <div className='position-relative'>
            <img src={src} className="w-100 rounded-3" alt={alt} />
            <div className="layer position-absolute rounded-3">
                <i className="fa-solid fa-plus fa-5x text-white "></i>
            </div>
        </div>
      </div>
      </>
    )
  }
}
