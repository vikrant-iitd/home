import React, { useState } from 'react'
import { CgDarkMode, CgMenu } from 'react-icons/cg';
import { BsLinkedin, BsTwitter } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';

export const Header = () => {
    const [isScrolled, setScrolled] = useState(0);
    const [shrink, setShrink] = useState('expand');
    const [dark,setDark]= useState(localStorage.getItem('theme')|| '');
    const [shrinkLogo, setShrinkLogo] = useState('')
    window.addEventListener('scroll', () => {
        if (window.scrollY >= 10) {
            setShrink('');
            setShrinkLogo('-shrink')
        }
        else {
            setShrink('expand');
            setShrinkLogo('');
        }
    });
    const [isActive, setActive] = useState('');
    return (
        <div>
            <header>
                <nav className={'header-nav ' + shrink}>
                    <div className='main-container'>
                        <div className='header-space'>

                                <Tooltip title="Karra Suryanarayana Vikrant">   
                            <div className={'home-logo'+shrinkLogo}>
                                <Link to='/' style={{textDecoration:'none',color:'black'}}>
                                <span style={{color:'#0883c1'}}>KS</span> Vikrant
                                </Link>
                            </div>
                                </Tooltip>
                                
                            <div className='navbar-menu'>
                                
                                 
                                <a style={{color:'black',   textDecoration:'none'}}  href="/#publications">
                                <div className='navbar-item'>
                                <Tooltip title="Publications" >   
                                    <span className='my-text'>
                                        Publications
                                    </span>
                                    </Tooltip>
                                </div>
                                </a>
                                <a style={{color:'black',   textDecoration:'none'}}  href="/#projects">
                                <div className='navbar-item'>
                                <Tooltip title="Projects">   
                                    <span className='my-text'>
                                        Projects
                                    </span>
                                    </Tooltip>
                                </div>
                                </a>
                                <a style={{color:'black',   textDecoration:'none'}}  href="/#experience">
                                <div className='navbar-item'>
                                <Tooltip title="Experience">   
                                    <span className='my-text'>
                                        Experience
                                    </span>
                                    </Tooltip>
                                </div>
                                </a>
                                <a style={{color:'black',   textDecoration:'none'}}  href="/#courses">
                                <div className='navbar-item'>
                                <Tooltip title=" Courses">   
                                    <span className='my-text'>
                                        Courses
                                    </span>
                                    </Tooltip>
                                </div>
                                </a>
                                <a style={{color:'black',   textDecoration:'none'}}  href="/#p&c">
                                <div className='navbar-item'>
                                <Tooltip title="Patents and Copyrights">
                                    <span className='my-text'>
                                        P&C
                                    </span>
                                    </Tooltip>
                                </div>
                                </a>
                                <a style={{color:'black',   textDecoration:'none'}}  href="/#gallery">
                                <div className='navbar-item'>
                                <Tooltip title="Gallery">   
                                    <span className='my-text'>
                                        Gallery
                                    </span>
                                    </Tooltip>
                                </div>
                                </a>
                                <a style={{color:'black',   textDecoration:'none'}}  href="/#contact">
                                <div className='navbar-item'>
                                <Tooltip title="Contact">   
                                    <span className='my-text'>
                                        Contact
                                    </span>
                                    </Tooltip>
                                </div>
                                </a>
                                <div className='navbar-button'>
                                    <CgDarkMode size={`1.5rem`} className='dark-mode' />
                                    <BsLinkedin size={`1.5rem`} className='icons' />
                                    <BsTwitter size={`1.5rem`} className='icons' />
                                    <CgMenu size={`1.5rem`} className='menu-icon' />
                                </div>
                            </div>
                        </div>
                        <div className='navbar-menu-hidden'>
                            <div className='navbar-button'>
                                <CgDarkMode size={`1.5rem`} className='menu-icon' />
                                <CgMenu size={`1.5rem`} className='menu-icon' />
                            </div>
                        </div>

                    </div>
                </nav>
            </header>
        </div>
    )
}
