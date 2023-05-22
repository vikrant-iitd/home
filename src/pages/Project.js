import React from "react";
import Projects from "../components/Projects";

export const Project = () => {
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
                <span style={{ color: "#0883c1" }}>Pro</span>jects
              </h1>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <div className="container">
        <div>
          <div className="main-container" id="projects">
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "end",
              }}
            >
              <div style={{ fontSize: "28px", fontWeight: "600" }}>
                <span style={{ color: "#0883c1" }}>Spo</span>nsored Projects &{" "}
                <span style={{ color: "#0883c1" }}>Fun</span>draising
              </div>
              {/* <div>
                            <BsArrowRight style={{ marginLeft: '10px' }} />
                        </div> */}
            </div>
          </div>
          <div className="main-container">
            <br></br>
            <br></br>
            <Projects />
          </div>
        </div>
      </div>
    </>
  );
};
