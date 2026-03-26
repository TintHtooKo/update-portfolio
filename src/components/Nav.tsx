import { useState } from "react";
import Logo from '../assets/logo/logo.png';

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className="sticky top-0 z-50 backdrop-blur-md bg-black/50 flex items-center justify-between lg:px-40 md:px-12.5 px-5 py-2 border-b border-gray-800">
            {/* Logo */}
            <div>
                <img src={Logo} className='md:w-15 w-10' alt="Logo" />
            </div>

            {/* Desktop Links - Hidden on Mobile */}
            <div className="hidden md:flex gap-8">
                    <button 
                        onClick={() => window.scrollTo(0, 0)}
                        className="font-mono cursor-pointer hover:text-blue-500 transition-colors"
                    >
                        Home
                    </button>
                {navLinks.map((link) => (
                    <a 
                        key={link.name} 
                        href={link.href} 
                        className="font-mono hover:text-blue-500 transition-colors"
                    >
                        {link.name}
                    </a>
                ))}
            </div>

            {/* Mobile Menu Button - Hidden on Desktop */}
            <button 
                className="md:hidden text-white focus:outline-none" 
                onClick={() => setIsOpen(!isOpen)}
            >
                {/* Simple Hamburger/Close Icon logic */}
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {isOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    )}
                </svg>
            </button>

            {/* Mobile Overlay - Animated slide down */}
            <div className={`${isOpen ? 'flex' : 'hidden'} flex-col items-center justify-center absolute top-12.5 left-0 w-full bg-black border-b border-gray-800 py-5 gap-6 md:hidden transition-all duration-300`}>
                <button 
                        onClick={() => (window.scrollTo(0, 0), setIsOpen(false))}
                        className="font-mono text-lg hover:text-blue-500 transition-colors"
                    >
                        Home
                    </button>
                {navLinks.map((link) => (
                    <a 
                        key={link.name} 
                        href={link.href} 
                        onClick={() => setIsOpen(false)} // Close menu when link is clicked
                        className="font-mono text-lg hover:text-blue-500"
                    >
                        {link.name}
                    </a>
                ))}
            </div>
        </nav>
    );
}