import React, { useEffect, useState } from 'react';
import './Projects.css';
import { Project } from '../types';
import { getProjects } from '../queries/getProjects';

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function fetchProjects() {
      const data = await getProjects();
      console.log('Fetched projects:', data);
      setProjects(data);
    }
    fetchProjects();
  }, []);

  if (projects.length === 0) return <div>Loading...</div>;

  return (
    <div className="projects-container">
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
          >
            {project.image ? (
              <img
                src={project.image.url}
                alt={project.title}
                className="project-image"
              />
            ) : (
              <div className="no-image">No image available</div>
            )}
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
