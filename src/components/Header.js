import React, { useState } from 'react'
import { CgDarkMode, CgMenu } from 'react-icons/cg';
import { BsLinkedin, BsTwitter } from 'react-icons/bs'
import { Link } from 'react-router-dom';

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

                            <div className={'home-logo'+shrinkLogo}>
                                <Link to='/' style={{textDecoration:'none',color:'black'}}>
                                <span style={{color:'#0883c1'}}>KS</span> Vikrant
                                </Link>
                            </div>
                            <div className='navbar-menu'>
                                <div className='navbar-item'>
                                    <span className='my-text'>
                                        About
                                    </span>
                                </div>
                                <div className='navbar-item'>
                                    <span className='my-text'>
                                        Publications
                                    </span>
                                </div>
                                <div className='navbar-item'>
                                    <span className='my-text'>
                                        Projects
                                    </span>
                                </div>
                                <div className='navbar-item'>
                                    <span className='my-text'>
                                        Experience
                                    </span>
                                </div>
                                <div className='navbar-item'>
                                    <span className='my-text'>
                                        Courses
                                    </span>
                                </div>
                                <div className='navbar-item'>
                                    <span className='my-text'>
                                        Contact
                                    </span>
                                </div>
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
