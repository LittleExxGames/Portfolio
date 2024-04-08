import React from 'react';
import PropTypes from 'prop-types';
import './page.css';

const CompanyList = () => {
  const CompanyCard = ({ description, website, logo, title }) => {
    return (
      <div className="company-card">
        <div>
          <img src={logo} alt={`${title} Logo`} className="company-card-logo" />
          <h2>{title}</h2>
        </div>
        <div>
          <p className="company-card-description">{description}</p>
          <a href={website} target="_blank" rel="noreferrer" className="company-card-website">
            Visit Website
          </a>
        </div>
      </div>
    );
  };

  CompanyCard.propTypes = {
    description: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  };

  return (
    <div className="company-list">
      {/* First row */}
      <div className="company-row">
        <CompanyCard
          description="Description of Company"
          website="https://www.example.com"
          logo="/path/to/logo.png"
          title="Company Title"
          key="company1"
        />
        <CompanyCard
          description="Description of Company"
          website="https://www.example.com"
          logo="/path/to/logo.png"
          title="Company Title"
          key="company2"
        />
        <CompanyCard
          description="Description of Company"
          website="https://www.example.com"
          logo="/path/to/logo.png"
          title="Company Title"
          key="company3"
        />
      </div>
      {/* Second row */}
      <div className="company-row">
        <CompanyCard
          description="Description of Company"
          website="https://www.example.com"
          logo="/path/to/logo.png"
          title="Company Title"
          key="company4"
        />
        <CompanyCard
          description="Description of Company"
          website="https://www.example.com"
          logo="/path/to/logo.png"
          title="Company Title"
          key="company5"
        />
        <CompanyCard
          description="Description of Company"
          website="https://www.example.com"
          logo="/path/to/logo.png"
          title="Company Title"
          key="company6"
        />
      </div>
    </div>
  );
};

export default CompanyList;
/*
export const metadata = {
  title: 'Portfolio - Projects',
  description: 'The projects page of my portfolio.',
}

export default function Projects() {
  return (
    <div>Projects</div>

  );

}
*/
/*
import './ProjectCard.css';
import PropTypes from 'prop-types';

const ProjectCard = ({ logo, name, content, link }) => {
  return (
    <div data-testid="projectCard" className="project-card">
      <div>
        <img data-testid="projectCardLogo" src={logo} alt={`${name} Logo`} className="project-card-logo" />
        <h2 data-testid="projectCardName">{name}</h2>
      </div>
      <div>
        <p data-testid="projectCardContent" className="project-card-content">
          {content}
        </p>
        <a data-testid="projectCardLink" href={link} target="_blank" rel="noreferrer" className="project-card-link">
          <img src="/link.svg" alt="" className="project-card-link-img" />
          View Project
        </a>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  link: PropTypes.string,
};

ProjectCard.defaultProps = {
  link: '#',
};

export default ProjectCard;
*/
