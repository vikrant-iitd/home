import React from "react";
// import Projects from "../components/Projects";
import { Typography } from "@mui/material";
export const Course = () => {
  return (
    <>
      <div className="mainComp">
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
                <span style={{ color: "#0883c1" }}>Co</span>urses
              </h1>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <div className="container">
        <div>
          <div className="main-container" id="courses">
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "end",
              }}
            >
              <div style={{ fontSize: "28px", fontWeight: "600" }}>
                <span style={{ color: "#0883c1" }}>Te</span>aching
              </div>
            </div>
          </div>
          <div className="main-container">
            <div className="container">
            <Typography className="publicationName">
                <span style={{ fontWeight: "600" }}>• Professor:</span> MLL 452,
                Corrosion and Degradation of Materials, IIT Delhi,
                New Delhi. 
                <br></br>
              </Typography>
              <Typography className="publicationName">
                <span style={{ fontWeight: "600" }}>• Professor:</span> MLL 213,
                Materials Modeling, Materials Science & Engineering, IIT Delhi,
                New Delhi. <br></br>(Aug-Dec 2022)
              </Typography>
              <br></br>
              <Typography className="publicationName">
                <span style={{ fontWeight: "600" }}>• Lecturer:</span> MSE 559,
                Phase Equilibria, School of Materials Engineering, Purdue
                University, West Lafayette.<br></br> (Aug - Dec 2019)
              </Typography>
              <br></br>
              <Typography className="publicationName">
                <span style={{ fontWeight: "600" }}>• Teaching Assistant:</span>{" "}
                CHE 211, Introductory Chemical Engineering Thermodynamics,
                Chemical Engineering, Purdue University, West Lafayette.{" "}
                <br></br>
                (Jan- May 2016)
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
