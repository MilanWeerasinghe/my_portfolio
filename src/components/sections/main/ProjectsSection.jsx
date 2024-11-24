import React from 'react'
import ProjectCard from '../../ProjectCard'
import projects from '../../../assets/projects'



const Projects = () => {
    return (
        <div className='group/list grid gap-y-12'>
           {projects.map((project, index) => (
                <ProjectCard
                    key={index}
                    title={project.title}
                    info={project.info}
                    technologies={project.technologies}
                    img={project.image}
                    alt={project.alt}
                    link={project.link}
                />
            ))}

        </div>
    )
}

export default Projects
