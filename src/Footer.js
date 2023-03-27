import React from 'react'
import { BiCopyright } from 'react-icons/bi';
import { CgDarkMode, CgMenu } from 'react-icons/cg';
import { BsLinkedin, BsTwitter ,BsDot} from 'react-icons/bs'
export const Footer = () => {
    return (
        <footer className='footer'>
            <div className='main-container' style={{ color: 'grey',  fontWeight: '500' }}>
                <div style={{display:'flex', width:'100%', justifyContent:'space-between'}}>
                    <div>
                        <BiCopyright  />
                        <span style={{ margin: '8px', color: 'grey', fontWeight: '500' }}> 2023 KS Vikrant
                        </span>
                    </div>
                    <div className='mid-footer'>
                        <span>About</span>
                        <BsDot/>
                        <span>Contact</span>
                        <BsDot/>
                        <span>FAQs</span>
                    </div>
                    <div>
                        <CgDarkMode  style={{marginLeft:'5px'}}/>
                        <BsLinkedin style={{marginLeft:'5px'}}/>
                        <BsTwitter style={{marginLeft:'5px'}}/>
                    </div>
                </div>
            </div>
        </footer>
    )
}
