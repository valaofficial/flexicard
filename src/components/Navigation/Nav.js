import { useEffect, useState } from 'react';
import './style.css';


export default function Navigation() {

    const [isMobile, setIsMobile] = useState(false)
    
    const screenWidth = window.innerWidth

    useEffect(() => {
        if(screenWidth <= 768){
            setIsMobile(true)
        }
      }, [screenWidth]);

    return (
        <>
            {!isMobile?
            <LargeNav/>
            :
            <MobileNav/>
            }
        </>
    );
}


function LargeNav() {
    return(
        <section id='navbar'>
        <div className='navbar-brand'>
            $FlexiCard
        </div>

        <div className='navbar-links'>
            <div>Solutions</div>
            <div>Features</div>
            <div>Resources</div>
            <div>Company</div>
            <div>Blog</div>
        </div>

        <div className='navbar-btn-div'>
            <div className='navbar-btn'>Open An Account</div>
        </div>
    </section>
    )
}

function MobileNav() {
    
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

    return(
    <section className='mobile-navbar'>
        <section id='navbar'>
            <div className='navbar-brand'>
                $FlexiCard
            </div>

            <div className='navbar-image'>
                <div className='navbar-menu-img' onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}>
                    <img src='/images/icons/menu.png' alt='Menu'/>
                </div>
            </div>
        </section>
        <div className={`navbar-links ${isMobileNavOpen?'mobile-navbar-open':'mobile-navbar-closed'}`}>
            <div>Solutions</div>
            <div>Features</div>
            <div>Resources</div>
            <div>Company</div>
            <div>Blog</div>

            <div className='navbar-btn-div'>
                <div className='navbar-btn'>Open An Account</div>
            </div>
        </div>
    </section>
    )
}