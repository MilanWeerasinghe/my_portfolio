import React, {useRef} from 'react'
import ContentLayout from '../layouts/ContentLayout'
import About from './sections/main/AboutSection'
import Projects from './sections/main/ProjectsSection'
import ContactSection from './sections/main/ContactSection'
import Resume from './Resume'
import my_photo from '../assets/images/mine.JPG'
import { useIsVisible } from '../hooks/UseIsVisible'

const Content = () => {
    const ref1 = useRef();
    const isVisible1 = useIsVisible(ref1);

    const ref2 = useRef();
    const isVisible2 = useIsVisible(ref2);

    const ref3 = useRef();
    const isVisible3 = useIsVisible(ref3);

    return (
        <ContentLayout>
            <section ref={ref1} id='about' className={`section transition-opacity ease-in duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"}`}>
                <div className='bg-sm-md-blur'>
                    <h2 className='nav-sm-md'> About</h2>
                </div>
                <div className="mb-10 lg:mb-24 mt-4 border border-slate-400/20 rounded-xl shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30">
                    <div className="rounded-xl overflow-hidden">
                        <img className="h-auto md:max-w-sm m-auto object-contain p-4 grayscale hover:grayscale-0 transition-all" src={my_photo} alt="" />
                    </div>
                </div>

                <About />
                <div className='lg:hidden block mt-12 lg:m-auto'>
                    <Resume />
                </div>
            </section>

            <section ref={ref2} id='projects' className={`section transition-opacity ease-in duration-1000 ${isVisible2 ? "opacity-100" : "opacity-0"}`}>
                <div className='bg-sm-md-blur'>
                    <h2 className='nav-sm-md'>Projects</h2>
                </div>
                <Projects />
            </section>

            <section ref={ref3} id='contact' className={`section transition-opacity ease-in duration-700 ${isVisible3 ? "opacity-100" : "opacity-0"}`}>
                <div className='bg-sm-md-blur'>
                    <h2 className='nav-sm-md'>Contact</h2>
                </div>
                <ContactSection />
            </section>
            <footer>
                <code className='text-center lg:text-left'>
                    <h3 className='text-sm text-slate-400 text-opacity-50 tracking-tight'>Designed by Milan Weerasinghe <br />Built with <b>React.js</b> and <b>Tailwind CSS</b>, deployed with <b>Vercel</b>.<br /><span className='text-xl'>©</span> 2024</h3>
                </code>
            </footer>
        </ContentLayout>
    )
}

export default Content
