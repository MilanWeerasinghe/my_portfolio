import React from 'react'
import resume from '../assets/milan_weerasinghe_CV.pdf'
const Resume = () => {
  return (
    <a href={resume}
      className="group text-slate-300 hover:text-teal-300 flex lg:gap-x-4 items-baseline lg:items-center leading-tight lg:tracking-widest lg:text-sm lg:rotate-90"
      target="_blank"
      rel="noreferrer noopener">
      <code className="lg:transition-transform lg:duration-300 lg:group-hover:-translate-x-2">view my resume</code>
      <span className="hidden lg:block h-px w-16 bg-slate-400"></span>
      
      <span className='lg:hidden sm:block'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
          className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
          <path
            fillRule="evenodd"
            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
            clipRule="evenodd">
          </path>
        </svg>
      </span>
    </a>


  )
}

export default Resume
