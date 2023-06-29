import React from "react";
import "../components/index.css";
import {  Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import Typography from '@mui/material/Typography';
import { CardActionArea } from "@mui/material";
// import { Link } from "react-router-dom";
// import { BsArrowRight } from "react-icons/bs";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export const Team = () => {
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
                <span style={{ color: "#0883c1" }}>The</span>Team
              </h1>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <div className="container">
        <div
          className="row"
          style={{
            padding: "20px",
            boxShadow: "0px 0px 10px #efefef",
            borderRadius: "6px",
          }}
        >
          <div className="col-md-3 col-sm-12">
            <img
              src="/Profile.png"
              style={{ width: "100%", borderRadius: "6px" }}
            />
          </div>
          <div className="col-md-9 col-sm-12 ">
            <div className="row"></div>
            <div className="container mainPubHeading">
              <div>
                <Typography variant="h3">Professor KS Vikrant</Typography>
                <div style={{ fontSize: "21px" }}>
                  <b>Email</b>:
                </div>
                <div style={{ fontSize: "21px" }}>
                  Address: 3B-27, Block III, IIT Delhi
                </div>
                <span style={{ fontSize: "21px", color: "#0883c1" }}>V</span>
                <span style={{ textAlign: "right", fontSize: "21px" }}>
                  ikrant received his B.Tech degree in Materials and
                  Metallurgical Engineering from the Indian Institute of
                  Technology Kanpur in 2010. Later, he worked for four years as
                  an Executive Engineer in the Metallurgy Department of BHEL
                  Corporate R&D, Hyderabad. Further, he received his PhD degree
                  from the School of Materials Engineering at Purdue University
                  in 2019. He continued as a postdoc for one year in the same
                  department. Before joining the Indian Institute of Technology
                  Delhi, he worked as a Postdoctoral Research Associate in
                  Computational Science and Engineering Division at Oak Ridge
                  National Laboratory (ORNL) for 18 months.
                </span>
                <br></br>
                <span style={{ fontSize: "21px" }}>
                  Overall, in the past 11 years, he has designed material
                  microstructures in ionic solids and metals for a wide range of
                  applications using computational approaches such as phase
                  field methods, finite element, and finite volume methods.
                  Briefly, his inter-related research interests are in the
                  fields of:
                  <br />
                  (1) Computational Materials Science, (2) Energy Storage &
                  Conversion Materials, (3) Lithium-ion Batteries and Solid
                  Oxide Fuel Cell Materials, (4) Microstructural evolution of
                  metals and ceramics, (5) High-temperature component
                  materials,(6) Phase-Field Modeling
                </span>
              </div>
            </div>
          </div>
        </div>

        <h3 className="row" style={{ marginTop: "30px" }}>
          PHD Students
        </h3>
        <div style={{ marginTop: "40px" }}>
          <Stack direction="row" spacing={4}>
            <Card sx={{ maxWidth: 445 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="340"
                  image="/Profile-3.jpeg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Ajaykumar Udayraj Yadav
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: "16px" }}>
                    <b>B.E</b> Mechanical Engineering ( Nagpur University)
                  </Typography>
                  <br></br>
                  <Typography variant="body2" sx={{ fontSize: "16px" }}>
                    <b>M.Tech</b> Materials Science and Engineering ( Nation
                    Institute of Foundry and Forge Technology, Ranchi)
                  </Typography>
                  <Stack
                    direction="row"
                    spacing={1}
                    sx={{ alignItems: "center", marginTop: "10px" }}
                  >
                    {/* <Typography variant="body2">Research Interests:</Typography> */}
                    <Chip label="Corrosion" variant="outlined" />
                    <Chip label="Electrochemical Testing" variant="outlined" />
                    <Chip label="Phase Field Modeling" variant="outlined" />
                  </Stack>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 445 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="340"
                  image="/Profile-4.jpeg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Yash Prakash Mishra
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: "16px" }}>
                    <b>B.Tech</b> Materials Science and Metallurgical
                    Engineering (UIET, Kanpur)
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: "16px" }}>
                    <b>M.Tech</b> Materials Engineering (Indian Institute of
                    Technology, Jodhpur)
                  </Typography>
                  <Stack
                    direction="row"
                    spacing={1}
                    sx={{ alignItems: "center", marginTop: "10px" }}
                  >
                    {/* <Typography variant="body2">Research Interests:</Typography> */}
                    <Chip label="Computational Techniques" variant="outlined" />
                    {/* <Chip label="Electrochemical Testing" variant="outlined" />
                    <Chip label="Phase Field Modeling" variant="outlined" /> */}
                  </Stack>
                </CardContent>
              </CardActionArea>
            </Card>
          </Stack>
        </div>
      </div>
    </>
  );
};
