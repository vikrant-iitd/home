import React, { useEffect, useState } from "react";
import "./index.css";
import { Button, Typography } from "@mui/material";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
export const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "Group-1.jpg",
    "IIT-Delhi-1.png",
    "Profile.png",
    // Add more image URLs here
  ];
  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    console.log(currentImageIndex);
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    console.log(currentImageIndex);
  };
  useEffect(() => {
    setInterval(() => {
      // console.log("hi");
      goToNextImage();
    }, 2000);
  }, []);
  return (
    <>
      <div className="mainComp2">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br> <br></br>
        <div className="container">
          <div
            className="row"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div
              className="col-md-12 col-sm-12"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <h1
                className="mainCompH1"
                style={{
                  color: "white",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                <span style={{ color: "#0883c1" }}>Co</span>
                mputational
                <span style={{ color: "#0883c1", marginLeft: "15px" }}> M</span>
                aterials
                <span style={{ color: "#0883c1", marginLeft: "15px" }}> E</span>
                ngineering
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="carousel" style={{ marginTop: "20px" }}>
          <button onClick={goToPreviousImage}>
            <AiFillCaretLeft />
          </button>
          <div
            className="col-md-8 col-lg-7 col-xl-5 col-sm-12"
            style={{
              height: "50vh",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <img
              src={images[currentImageIndex]}
              style={{ height: "100%" }}
              alt="Carousel Image"
            />
          </div>
          <button onClick={goToNextImage}>
            <AiFillCaretRight />
          </button>
        </div>
        <div className="container">
          <div
            className="row"
            style={{
              display: "flex",
              justifyContent: "center",
              // background: "blue",
              padding: "20px",
              textJustify: "right",
            }}
          >
            <span style={{ textAlign: "center", fontSize: "20px" }}>
              Our group specialises in phase field modeling and computational
              techniques with a focus on electrochemical and mechanical aspects
              of material behaviour.
              <br></br>
              We collaborate to study and simulate electrochemical phenomena,
              using advanced computational methods to gain insights into
              fundamental principles, optimize materials and devices, and push
              the boundaries in the field of materials research.
              <br></br>
              Join us as we explore this fascinating field, share knowledge, and
              make a meaningful impact together.
            </span>
          </div>
          <div style={{ padding: "20px" }}></div>
        </div>
        {/* <div className="mainComp2">
          hi
          <div className="container">
            <h2 style={{ color: "white" }}>Recent Events</h2>
          </div>
        </div> */}
      </div>
    </>
  );
};
