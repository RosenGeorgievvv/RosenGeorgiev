import React, { useState } from 'react'

const Navbar = () => {
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

const toggleMobileMenu = () =>{
    setIsMobileMenuOpen(!isMobileMenuOpen);
}

const handleLinkClick = (e, href) =>{
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if(targetElement){
        const offset = -85;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY + offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
        })
    }
    setIsMobileMenuOpen(false);
}

  return (
    <div>Navbar</div>
  )
}

export default Navbar