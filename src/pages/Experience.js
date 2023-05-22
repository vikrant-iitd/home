import React from "react";
// import Projects from "../components/Projects";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import { Container, Row, Col } from "react-bootstrap";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import { Typography } from "@mui/material";
import { FiArrowDown } from "react-icons/fi";

export const Experience = () => {
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
                <span style={{ color: "#0883c1" }}>Exp</span>erience
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
            <div>
              <Timeline
                sx={{
                  [`& .${timelineItemClasses.root}:before`]: {
                    flex: 0,
                    padding: 0,
                  },
                }}
              >
                <TimelineItem>
                  {/* <TimelineOppositeContent
                                    sx={{ m: 'auto 0' }}
                                    align="right"
                                    variant="div"
                                    color="text.secondary"
                                >
                                    9:30 am
                                </TimelineOppositeContent> */}
                  <TimelineSeparator>
                    <TimelineConnector />
                    {/* <FastfoodIcon /> */}
                    <img
                      src="IIT_Kanpur.png"
                      style={{
                        objectFit: "contain",
                        width: "40px",
                        borderRadius: "50%",
                      }}
                    />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: "12px", width: "100%" }}>
                    <Typography variant="h6" component="span">
                      Bachelor of Technology : Materials & Metallurgical
                      Engineering , I.I.T Kanpur, India
                    </Typography>
                    <Typography
                      component="p"
                      style={{ fontSize: "18px", fontWeight: "500" }}
                    >
                      Aug 2006 - May 2010
                    </Typography>
                    <div>
                      Advisors: Prof. K. Mondal, Late Prof. R. Balasubramanian
                      Final year project: Modeling of the passive film on
                      Phosphoric irons in near alkaline conditions
                    </div>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  {/* <TimelineOppositeContent
                                    sx={{ m: 'auto 0' }}
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    10:00 am
                                </TimelineOppositeContent> */}
                  <TimelineSeparator>
                    <TimelineConnector />
                    <img
                      src="IIT_Kanpur.png"
                      style={{
                        objectFit: "contain",
                        width: "40px",
                        borderRadius: "50%",
                      }}
                    />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <Typography variant="h6" component="span">
                      Summer Internship : Chemistry department, University of
                      Western Ontario, Canada
                    </Typography>
                    <Typography
                      component="p"
                      style={{ fontSize: "18px", fontWeight: "500" }}
                    >
                      May 2009 - Jul 2009
                    </Typography>
                    <Typography>
                      Supervisor: Prof. David W. Shoesmith
                      <br />
                      Modeling of oxide film properties of Alloy 22 and Alloy
                      2000 in corrosive conditions
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineConnector sx={{ bgcolor: "secondary" }} />
                    <img
                      src="IIT_Kanpur.png"
                      style={{
                        objectFit: "contain",
                        width: "40px",
                        borderRadius: "50%",
                      }}
                    />

                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <Typography variant="h6" component="span">
                      Executive Engineer, BHEL Corporate R&D, India
                    </Typography>
                    <Typography
                      component="p"
                      style={{ fontSize: "18px", fontWeight: "500" }}
                    >
                      Jul 2010- Aug 2014
                    </Typography>
                    <Typography>
                      Metallurgy department, General Manager: Dr. Kulvir Singh
                      <ul>
                        <li>
                          Creep and fireside corrosion studies of Super 304H for
                          Advanced Ultra Supercritical boiler tube applications
                        </li>
                        <li>
                          Designing of alternate materials for discharge
                          electrodes in corrosive conditions for Electro Static
                          Precipitator
                        </li>
                        <li>
                          Effect of steam side oxidation and fireside corrosion
                          degradation processes on creep life of service exposed
                          boiler tubes
                        </li>
                        <li>
                          Deterministic and Probabilistic calculation of life of
                          Cr-Mo-V rotor using crack propagation and
                          degradation/damage processes
                        </li>
                      </ul>
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineConnector />
                    <img
                      src="IIT_Kanpur.png"
                      style={{
                        objectFit: "contain",
                        width: "40px",
                        borderRadius: "50%",
                      }}
                    />
                    <TimelineConnector sx={{ bgcolor: "secondary" }} />
                  </TimelineSeparator>

                  <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <Typography variant="h6" component="span">
                      Doctor of Philosophy : School of Materials Engineering .
                      Purdue University, USA
                    </Typography>
                    <Typography
                      component="p"
                      style={{ fontSize: "18px", fontWeight: "500" }}
                    >
                      Aug 2014 - Jul 2019
                    </Typography>
                    <Typography>
                      Title:- Charged Interfaces: Equilibrium Properties, Phase
                      Transitions, and Microstructural Evolution
                      <ul>
                        <li>
                          Electrochemical and mechanical effects on charged
                          interfaces
                          <ul>
                            <li>
                              A thermodynamically consistent description that
                              simultaneously addresses the chemomechanical and
                              electrochemical effects on the equilibrium and
                              transport properties at and in the vicinity of the
                              interface in ionic conductors
                            </li>
                            <li>
                              The developed generalized theory is applied to
                              gadolinia doped ceria, GDC to predict the
                              equilibrium defect distribution at and near the
                              grain boundaries
                            </li>
                          </ul>
                        </li>
                        <li>
                          Grain boundary transitions in ion-conducting solids
                          <ul>
                            <li>
                              The formulation is a starting point to describe
                              interfacial grain boundary transitions in Yttria
                              Stabilized Zirconia, YSZ
                            </li>
                          </ul>
                        </li>
                        <li>
                          Incubation kinetics of electric field assisted
                          sintering
                          <ul>
                            <li>
                              Phase field theory to rationalize the underlying
                              microstructural mechanisms leading to the flash
                              event
                            </li>
                          </ul>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          Abnormal grain growth in ionic ceramics
                          <ul>
                            <li>
                              Modeling of electrochemical drag effect on grain
                              boundary motion in ionic ceramics
                            </li>
                            <li>
                              A combined theoretical and experimental study was
                              performed on Fe doped SrTiO3 to understand the
                              effects point defects to explain abnormal grain
                              growth with an emphasis on the structural and
                              electrochemical character of the grain boundaries
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineConnector sx={{ bgcolor: "secondary" }} />
                    <img
                      src="IIT_Kanpur.png"
                      style={{
                        objectFit: "contain",
                        width: "40px",
                        borderRadius: "50%",
                      }}
                    />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <Typography variant="h6" component="span">
                      Postdoctoral Researcher , Purdue University, USA
                    </Typography>
                    <Typography
                      component="p"
                      style={{ fontSize: "18px", fontWeight: "500" }}
                    >
                      Aug 2019 - Jun 2020
                    </Typography>
                    <Typography>
                      School of Materials Engineering, Supervisor: Prof. R.
                      Edwin García
                      <ul>
                        <li>
                          Electrochemomechanics of lithium dendrite growth
                        </li>
                        <li>
                          Variational formulation of dislocation dynamics in
                          advanced ionic solids
                        </li>
                        <li>
                          Phase field modeling of alloyed nanopillars in
                          dielectric hybrid metamaterials
                        </li>
                        <li>
                          Generalized phase field formulation of polycrystalline
                          ferroelectric perovskites
                        </li>
                      </ul>
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineConnector sx={{ bgcolor: "secondary" }} />
                    <img
                      src="IIT_Kanpur.png"
                      style={{
                        objectFit: "contain",
                        width: "40px",
                        borderRadius: "50%",
                      }}
                    />
                    <TimelineConnector />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography variant="h6" component="span">
                        Postdoctoral Research Associate , Oak Ridge National
                        Laboratory, USA
                      </Typography>
                      <button style={{ border: "none", background: "none" }}>
                        {/* <a href="#id1" className="more-info-btn">
                          <FiArrowDown size={20} />
                        </a> */}
                      </button>
                    </div>
                    <Typography
                      component="p"
                      style={{ fontSize: "18px", fontWeight: "500" }}
                    >
                      Jun 2020 - Feb 2022
                    </Typography>
                    <Typography>
                      <div id="id1">
                        Computing & Computational Sciences, Mentor: Dr. Srikanth
                        Allu
                      </div>
                      <ul>
                        <li>
                          Lithium plating and stripping kinetics in fast
                          charging batteries
                        </li>
                        <li>
                          Effect of plating on intercalation kinetics in edge
                          and basal planes of graphite
                        </li>
                        <li>
                          SEI formation and evolution kinetics in Li-ion
                          batteries
                        </li>
                        <li>Cell degradation modeling</li>
                        <li>Battery pack degradation modeling</li>
                        <li>
                          Generalized phase field formulation of polycrystalline
                          ferroelectric perovskites
                        </li>
                      </ul>
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <img
                      src="IIT_Kanpur.png"
                      style={{
                        objectFit: "contain",
                        width: "40px",
                        borderRadius: "50%",
                      }}
                    />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <Typography variant="h6" component="span">
                      Assistant Professor I.I.T Delhi, India
                    </Typography>
                    <Typography
                      component="p"
                      style={{ fontSize: "18px", fontWeight: "500" }}
                    >
                      Feb 2022-Current
                    </Typography>
                    <Typography>
                      Department of Materials Science & Engineering
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
