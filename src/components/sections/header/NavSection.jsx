import React, { useState, useEffect } from 'react'

const NavSection = () => {
    const [activeLink, setActiveLink] = useState("#about");

    useEffect(() => {
        const sections = document.querySelectorAll("section");
    
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveLink(`#${entry.target.id}`);
              }
            });
          },
          {
            root: null, // Use the viewport as the root
            threshold: 0.5, // Activate when 50% of the section is visible
          }
        );
    
        sections.forEach((section) => observer.observe(section));
    
        return () => {
          sections.forEach((section) => observer.unobserve(section));
        };
      }, []);

    const handleClick = (section) => {
        setActiveLink(section);
        const element = document.querySelector(section);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };
    return (
        // add active class to indicate the section in nav
        <nav>
            <ul>
                <li>
                    <a className={`group flex items-center py-3 ${activeLink === '#about' && "active"}`} href="#about" onClick={(e) => {
                        e.preventDefault();
                        handleClick("#about");
                    }}>
                        <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                        <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">About</span>
                    </a>
                </li>
                <li>
                    <a className={`group flex items-center py-3 ${activeLink === '#projects' && "active"}`} href="#projects" onClick={(e) => {
                        e.preventDefault();
                        handleClick("#projects");
                    }}>
                        <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                        <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Projects</span>
                    </a>
                </li>
                <li>
                    <a className={`group flex items-center py-3 ${activeLink === '#contact' && "active"}`} href="#contact" onClick={(e) => {
                        e.preventDefault();
                        handleClick("#contact");
                    }}>
                        <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                        <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Contact</span>
                    </a>
                </li>
            </ul>
        </nav>

    )
}

export default NavSection
