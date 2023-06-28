import React, { useState, useEffect,useRef } from 'react';
import './Carousel.css';
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
// import Slider from 'react-touch-drag-slider';
// import { Carousel } from '3d-react-carousal';

const Slider = ({ images }) => {
  const [currentIndex,setCurrentIndex]= useState(0);
  console.log(images[0]);
  const changeImage=(idx)=>{
    setCurrentIndex(idx);
  }
  return(
  <div className='row'>
    <div className='middle-image col-sm-12'
    style={{backgroundImage:"url('"+images[currentIndex]+"')", marginBottom:'10px', boxShadow:'0px 0px 10px #afafaf'}}>
      
    </div>
    <div className='col-sm-12' style={{display:'flex', justifyContent:'center'}}>
          {images.map((item,idx)=>{
            return (
              <div className={idx==currentIndex?'sideimage selected':"sideimage"}
              onClick={(e)=>changeImage(idx)}
              style={{backgroundImage:"url('"+item+"')", cursor:'pointer'}}>
                .
              </div>  
            )
          })}
    </div>
    {/* <div className='col-sm-12'> */}
      {/* <video style={{height:'40vh',width:'100%'}} src={'/outout.mp4'}/> */}
    {/* </div> */}
  </div>
    );
};

export default Slider;
