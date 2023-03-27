import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import {FiArrowDown} from 'react-icons/fi'
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
// import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
// import TimelineDot from '@mui/lab/TimelineDot';
// import FastfoodIcon from '@mui/icons-material/Fastfood';
// import LaptopMacIcon from '@mui/icons-material/LaptopMac';
// import HotelIcon from '@mui/icons-material/Hotel';
// import RepeatIcon from '@mui/icons-material/Repeat';
// import img1 from '../publichttps://raw.githubusercontent.com/pallavsemwal/ks_vikrant/main/public/Research-paper1.png';
import Typography from '@mui/material/Typography';

export const Content = () => {
    return (
        <div>
            <div className='main-container' style={{ paddingTop: `8rem` }}>
                <div className='row-home'>
                    <div className='card-text-home' style={{ padding: '3rem 4rem', background: 'rgb(241 245 249)' }}>
                        <div className='row' style={{ width: '100%', lineHeight: '2rem' }}>

                            <span>
                                {/* About For Prof */}
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                {/* It is a globally recognized leader in AI (Artificial Intelligence). He is Founder of DeepLearning.AI, Founder & CEO of Landing AI, General Partner at AI Fund, Chairman and Co-Founder of Coursera and an Adjunct Professor at Stanford University’s Computer Science Department. */}
                            </span>
                            <hr style={{ opacity: '0' }} />
                            <span>

                                As a pioneer in machine learning and online education, Dr. Ng has changed countless lives through his work in AI, and has authored or co-authored over 200 research papers in machine learning, robotics and related fields. In 2013, he was named to the Time 100 list of the most influential persons in the world.
                            </span>
                        </div>

                    </div>
                    <div className='card-img-home' >
                        <img className='card-img' alt='Prof Vikrant Karra' src='/Profile.png' />
                    </div>
                </div>
            </div>
            <div className='main-container' style={{ padding: '1rem 3rem' }}>
                <div className='row intro-text' style={{ width: '100%', lineHeight: '2rem', textAlign: 'start' }}>

                    <span style={{ padding: '0px' }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        {/* Dr. Andrew Ng is a globally recognized leader in AI (Artificial Intelligence). He is Founder of DeepLearning.AI, Founder & CEO of Landing AI, General Partner at AI Fund, Chairman and Co-Founder of Coursera and an Adjunct Professor at Stanford University’s Computer Science Department. */}
                    </span>
                    <hr style={{ opacity: '0' }} />
                    <span style={{ padding: '0px' }}>As a pioneer in machine learning and online education, Dr. Ng has changed countless lives through his work in AI, and has authored or co-authored over 200 research papers in machine learning, robotics and related fields. In 2013, he was named to the Time 100 list of the most influential persons in the world.
                    </span>
                </div>
            </div>
            <div>

                <div className='main-container'>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'end' }} >
                        <div style={{ fontSize: '20px' }}>
                            Publications
                        </div>
                        <div>
                            Read More
                            <BsArrowRight style={{ marginLeft: '10px' }} />
                        </div>
                    </div>
                </div>
                <div className='main-container'>
                    <div style={{ width: '100%' }}>

                        <div className='row'>
                            <div className='col-sm-12 col-md-6 col-lg-4'>
                                <div className="card" style={{ width: "100%", marginTop: '15px' }}>
                                    <img src='https://raw.githubusercontent.com/pallavsemwal/ks_vikrant/main/public/Research-paper1.png' className='card-img-top' />
                                    <div className="card-body">
                                        <span className='card-text' style={{ fontSize: '1.2rem' }}>
                                            Electrochemomechanics of lithium dendrite growth
                                        </span>
                                        <p className="card-text" style={{ fontWeight: '500' }}>A comprehensive roadmap describing the current density- and size-dependent dendrite growth mechanisms is presented.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-12 col-md-6 col-lg-4' >
                                <div className="card" style={{ width: "100%", marginTop: '15px' }}>
                                    <img src='https://raw.githubusercontent.com/pallavsemwal/ks_vikrant/main/public/Research-paper1.png' className='card-img-top' />
                                    <div className="card-body">
                                        <span className='card-text' style={{ fontSize: '1.2rem' }}>
                                            Electrochemomechanics of lithium dendrite growth
                                        </span>
                                        <p className="card-text" style={{ fontWeight: '500' }}>A comprehensive roadmap describing the current density- and size-dependent dendrite growth mechanisms is presented.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-12 col-md-6 col-lg-4'>
                                <div className="card" style={{ width: "100%", marginTop: '15px' }}>
                                    <img src='https://raw.githubusercontent.com/pallavsemwal/ks_vikrant/main/public/Research-paper1.png' className='card-img-top' />
                                    <div className="card-body">
                                        <span className='card-text' style={{ fontSize: '1.2rem' }}>
                                            Electrochemomechanics of lithium dendrite growth
                                        </span>
                                        <p className="card-text" style={{ fontWeight: '500' }}>A comprehensive roadmap describing the current density- and size-dependent dendrite growth mechanisms is presented.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='main-container'>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'end' }} >
                        <div style={{ fontSize: '1.3rem' }}>
                            Awards And Honors
                        </div>
                        {/* <div>
                            <BsArrowRight style={{ marginLeft: '10px' }} />
                        </div> */}
                    </div>
                </div>
                <div className='main-container'>
                    <div style={{ width: '100%' }} >
                        <div style={{ display: 'flex' }}>
                            <div style={{ fontSize: '2.5rem', color: 'grey', opacity: '0.6' }}>1</div>
                            <div style={{ fontSize: '1.1rem', marginTop: '10px', marginLeft: '10px' }}>Young Faculty Incentive Fellowship,
                                IIT Delhi, 2022</div>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <div style={{ fontSize: '2.5rem', color: 'grey', opacity: '0.6' }}>2</div>
                            <div style={{ fontSize: '1.1rem', marginTop: '10px', marginLeft: '10px' }}>Patent Certificate of Appreciation,”
                                Bharat Heavy Electricals Limited, 2013.</div>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <div style={{ fontSize: '2.5rem', color: 'grey', opacity: '0.6' }}>3</div>
                            <div style={{ fontSize: '1.1rem', marginTop: '10px', marginLeft: '10px' }}>The General Proficiency Medal for the
                                best academic performance in the Bachelor of Technology in Materials & Metallurgical Engineering, IIT Kanpur, 2010.</div>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <div style={{ fontSize: '2.5rem', color: 'grey', opacity: '0.6' }}>4</div>
                            <div style={{ fontSize: '1.1rem', marginTop: '10px', marginLeft: '10px' }}>The Mars G. Fontana Prize for the
                                best performance in the subject of
                                corrosion in the undergraduate programme in Materials & Metallurgical
                                Engineering, IIT Kanpur, 2010.</div>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <div style={{ fontSize: '2.5rem', color: 'grey', opacity: '0.6' }}>5</div>
                            <div style={{ fontSize: '1.1rem', marginTop: '10px', marginLeft: '10px' }}>The Certificate of Merit for Academic
                                Excellence in the Bachelor of Technology programme in Materials & Metallurgical Engineering on the eve of
                                IIT Kanpur Golden Jubilee Year, 2009.</div>
                        </div>
                    </div>
                </div>
                <div className='main-container'>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'end' }} >
                        <div style={{ fontSize: '1.3rem' }}>
                            Experience
                        </div>
                        <div>
                            Read More
                            <BsArrowRight style={{ marginLeft: '10px' }} />
                        </div>
                    </div>
                </div>
                <div className='main-container'>
                    <div>
                        <Timeline sx={{
                            [`& .${timelineItemClasses.root}:before`]: {
                                flex: 0,
                                padding: 0,
                            },
                        }}>
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
                                    <img src='IIT_Kanpur.png' style={{ objectFit: 'contain', width: '40px', borderRadius: '50%' }} />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', width: '100%' }}>
                                    <Typography variant="h6" component="span">
                                        Bachelor of Technology : Materials & Metallurgical Engineering , I.I.T Kanpur, India

                                    </Typography>
                                    <Typography component="p" style={{ fontSize: '18px', fontWeight: '500' }}>
                                        Aug 2006 -
                                        May 2010
                                    </Typography>
                                    <div>
                                        Advisors: Prof. K. Mondal,
                                        Late Prof. R. Balasubramanian
                                        Final year project: Modeling of the passive film on Phosphoric irons
                                        in near alkaline conditions
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
                                    <img src='IIT_Kanpur.png' style={{ objectFit: 'contain', width: '40px', borderRadius: '50%' }} />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <Typography variant="h6" component="span">
                                        Summer Internship : Chemistry department,  University of Western Ontario, Canada
                                    </Typography>
                                    <Typography component="p" style={{ fontSize: '18px', fontWeight: '500' }}>
                                        May 2009 -
                                        Jul 2009
                                    </Typography>
                                    <Typography>
                                        Supervisor: Prof. David W. Shoesmith
                                        <br />
                                        Modeling of oxide film properties of Alloy 22 and Alloy 2000 in
                                        corrosive conditions
                                    </Typography>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineConnector sx={{ bgcolor: 'secondary' }} />
                                    <img src='IIT_Kanpur.png' style={{ objectFit: 'contain', width: '40px', borderRadius: '50%' }} />

                                    <TimelineConnector />

                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <Typography variant="h6" component="span">
                                        Executive Engineer, BHEL Corporate R&D, India
                                    </Typography>
                                    <Typography component="p" style={{ fontSize: '18px', fontWeight: '500' }}>
                                        Jul 2010- Aug 2014
                                    </Typography>
                                    <Typography>
                                        Metallurgy department,  General Manager: Dr. Kulvir Singh
                                        <ul>
                                            <li>

                                                Creep and fireside corrosion studies of Super 304H for Advanced
                                                Ultra Supercritical boiler tube applications
                                            </li>
                                            <li>

                                                Designing of alternate materials for discharge electrodes in corrosive conditions for Electro Static Precipitator
                                            </li>
                                            <li>
                                                Effect of steam side oxidation and fireside corrosion degradation
                                                processes on creep life of service exposed boiler tubes
                                            </li>
                                            <li>

                                                Deterministic and Probabilistic calculation of life of Cr-Mo-V
                                                rotor using crack propagation and degradation/damage processes
                                            </li>
                                        </ul>
                                    </Typography>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineConnector />
                                    <img src='IIT_Kanpur.png' style={{ objectFit: 'contain', width: '40px', borderRadius: '50%' }} />
                                    <TimelineConnector sx={{ bgcolor: 'secondary' }} />
                                </TimelineSeparator>

                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <Typography variant="h6" component="span">
                                        Doctor of Philosophy : School of Materials Engineering . Purdue University, USA
                                    </Typography>
                                    <Typography component="p" style={{ fontSize: '18px', fontWeight: '500' }}>
                                        Aug 2014 -
                                        Jul 2019
                                    </Typography>
                                    <Typography>

                                        Title:- Charged Interfaces: Equilibrium Properties, Phase Transitions, and Microstructural Evolution
                                        <ul>
                                            <li>
                                                Electrochemical and mechanical effects on charged interfaces
                                                <ul>
                                                    <li>
                                                        A thermodynamically consistent description that simultaneously addresses the chemomechanical and electrochemical
                                                        effects on the equilibrium and transport properties at and in
                                                        the vicinity of the interface in ionic conductors
                                                    </li>
                                                    <li>
                                                        The developed generalized theory is applied to gadolinia
                                                        doped ceria, GDC to predict the equilibrium defect distribution at and near the grain boundaries
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                Grain boundary transitions in ion-conducting solids
                                                <ul>
                                                    <li>
                                                        The formulation is a starting point to describe interfacial grain
                                                        boundary transitions in Yttria Stabilized Zirconia, YSZ
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                Incubation kinetics of electric field assisted sintering
                                                <ul>
                                                    <li>
                                                        Phase field theory to rationalize the underlying microstructural mechanisms leading to the flash event
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                        <ul>

                                            <li>Abnormal grain growth in ionic ceramics
                                                <ul>
                                                    <li>
                                                        Modeling of electrochemical drag effect on grain boundary
                                                        motion in ionic ceramics
                                                    </li>
                                                    <li>
                                                        A combined theoretical and experimental study was performed on Fe doped SrTiO3 to understand the effects point
                                                        defects to explain abnormal grain growth with an emphasis
                                                        on the structural and electrochemical character of the grain
                                                        boundaries
                                                    </li>

                                                </ul>
                                            </li>
                                        </ul>
                                    </Typography>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineConnector sx={{ bgcolor: 'secondary' }} />
                                    <img src='IIT_Kanpur.png' style={{ objectFit: 'contain', width: '40px', borderRadius: '50%' }} />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <Typography variant="h6" component="span">
                                        Postdoctoral Researcher , Purdue University, USA
                                    </Typography>
                                    <Typography component="p" style={{ fontSize: '18px', fontWeight: '500' }}>
                                        Aug 2019 -
                                        Jun 2020
                                    </Typography>
                                    <Typography>
                                        School of Materials Engineering, Supervisor: Prof. R. Edwin García
                                        <ul>
                                            <li>
                                                Electrochemomechanics of lithium dendrite growth
                                            </li>
                                            <li>

                                                Variational formulation of dislocation dynamics in advanced
                                                ionic solids
                                            </li>
                                            <li>
                                                Phase field modeling of alloyed nanopillars in dielectric hybrid
                                                metamaterials
                                            </li>
                                            <li>


                                                Generalized phase field formulation of polycrystalline ferroelectric perovskites
                                            </li>
                                        </ul>
                                    </Typography>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineConnector sx={{ bgcolor: 'secondary' }} />
                                    <img src='IIT_Kanpur.png' style={{ objectFit: 'contain', width: '40px', borderRadius: '50%' }} />
                                    <TimelineConnector />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <div style={{display:'flex', justifyContent:'space-between'}}>

                                    <Typography variant="h6" component="span">

                                        Postdoctoral Research Associate , Oak Ridge National
                                        Laboratory, USA
                                        
                                        
                                    </Typography>
                                    <button style={{border:'none', background:'none'}} >
                                        <a href="#id1" className='more-info-btn'>

                                    <FiArrowDown size={20}/>
                                        </a>
                                        </button>
                                    </div>
                                    <Typography component="p" style={{ fontSize: '18px', fontWeight: '500' }}>
                                        Jun 2020 -
                                        Feb 2022
                                    </Typography>
                                    <Typography >
                                        <div id='id1'>

                                        Computing & Computational Sciences, Mentor: Dr. Srikanth Allu
                                        </div>
                                        <ul>
                                            <li>
                                                Lithium plating and stripping kinetics in fast charging batteries
                                            </li>
                                            <li>Effect of plating on intercalation kinetics in edge and basal
                                                planes of graphite
                                            </li>
                                            <li>
                                                SEI formation and evolution kinetics in Li-ion batteries
                                            </li>
                                            <li>

                                                Cell degradation modeling
                                            </li>
                                            <li>

                                                Battery pack degradation modeling
                                            </li>
                                            <li>


                                                Generalized phase field formulation of polycrystalline ferroelectric perovskites
                                            </li>
                                        </ul>
                                    </Typography>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineSeparator >
                                    <img src='IIT_Kanpur.png' style={{ objectFit: 'contain', width: '40px', borderRadius: '50%' }} />

                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <Typography variant="h6" component="span">
                                        Assistant Professor I.I.T Delhi, India
                                    </Typography>
                                    <Typography component="p" style={{ fontSize: '18px', fontWeight: '500' }}>
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
                <div className='main-container'>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'end' }} >
                        <div style={{ fontSize: '1.3rem' }}>
                            Projects
                        </div>
                        {/* <div>
                            <BsArrowRight style={{ marginLeft: '10px' }} />
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
