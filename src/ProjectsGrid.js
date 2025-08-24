import React from 'react';
import Stack from './Stack';
import './ProjectsGrid.css';

const ProjectsGrid = ({ projects }) => {
  return (
    <div className="projects-grid">
      {projects.map((projectGroup, groupIndex) => (
        <div key={groupIndex} className="project-stack-container">
          <div className="stack-and-text">
            <Stack
              randomRotation={false}
              sensitivity={200}
              sendToBackOnClick={false}
              maxCardDimensions={{ width: 400, height: 600 }}
              cardsData={projectGroup.images}
            />
            <div className="project-info">
              <h4 className="project-title">{projectGroup.title}</h4>
              <p className="project-description">{projectGroup.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsGrid;
