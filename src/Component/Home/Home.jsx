import {Component} from 'react'
import './Home.css';
import avataaars from './images/avataaars.svg';
export default class Home extends Component{
    render(){

        return <>
        <section id="home" className='d-flex align-items-center justify-content-center py-5'>
            <div className='text-center w-50'>
                <img src={avataaars} className='w-50 mb-2' alt="smiling person anime" />
                <h1 className='text-white fw-bold'>START REACT</h1>
                <div className="icon my-4 position-relative">
                    <i className='fa-solid fa-star text-white fa-2x'></i>
                </div>
                <p className='text-white fs-4'>Graphic Artist - Web Designer - Illustrator</p>
            </div>
        </section>
        </>
    }
}