import React, { useState , useRef} from 'react'
import Slider from '../components/Slider'
// import FaPlayCircle from 'react-icons/fa';
import {MdPlayCircleFilled} from 'react-icons/md';

// import Carousel from '../components/Carousel'

export const Gallery = () => {
    const images=['/img1.png','/img2.png','/img3.png','/img4.png','/img5.png','/img6.png'];
    const [isPlaying,setIsPlaying]= useState(0);
    const vidRef = useRef(null);
    const togglePlay = () => {
      if (isPlaying) {
        vidRef.current.pause();
    } else {
        vidRef.current.play();
    }
    setIsPlaying(!isPlaying);
    };
    const handlePlay = () => {
      setIsPlaying(1);
    };
    const handlePause = () => {
      setIsPlaying(false);
    };
  
  return (
    <div>
        <div className="mainComp2">
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br> 
    <br></br> <br></br>
    <div className="container">
      <div className="row" style={{ justifyContent: "center" }}>
        <div className="col-md-4 col-sm-12">
          <h1 className="mainCompH1" style={{ color: "white" }}>
            <span style={{ color: "#0883c1" }}>Ga</span>llery
          </h1>
        </div>
      </div>
    </div>
  </div>
  <div className='container' >

  <div className='row' style={{display:'flex', justifyContent:'center', padding:'0px'}}>
  <div className='col-sm-12 col-md-8' style={{position:'relative'}}>
  <div className="row" >
        <div className="col-md-4 col-sm-12">
          <h1 style={{ color: "black" }}>
            <span style={{ color: "#0883c1" }}>Si</span>mulation 
            &nbsp;
            <span style={{ color: "#0883c1" }}>Vi</span>deo 
          </h1>
        </div>
      </div>
  <video ref={vidRef} style={{width:'100%', height:'40vh',boxShadow:'0px 0px 10px #afafaf'}} onPlay={handlePlay} onPause={handlePause} controls>
    <source src="/outout.mp4" type='video/mp4'/>
    {/* {isPlaying && <button onClick={handlePause}>Pause</button>} */}
  </video>
  {/* <FaPlayCircle/> */}
  {!isPlaying && 
    <MdPlayCircleFilled className='play-button'  size={60} style={{position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)', zIndex:'1', cursor:'pointer'}} onClick={togglePlay} />
    // <>Paused</>
  }
  </div>
  <div className='col-sm-12 col-md-8' style={{marginTop:'20px'}}>
  <div className="row" >
        <div className="col-md-4 col-sm-12">
          <h1 style={{ color: "black" }}>
            <span style={{ color: "#0883c1" }}>Im</span>ages 
            {/* <span style={{ color: "#0883c1" }}>Vi</span>deo  */}
          </h1>
        </div>
      </div>
      <div className='row' style={{display:'flex',justifyContent:'center'}}>
          <Slider images={images}/>
  </div>
  </div>
  </div>
  </div>
  </div>
  )
}
