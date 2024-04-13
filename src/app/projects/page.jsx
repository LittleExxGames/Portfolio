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
          <img scr="/link.svg" alt="" className="company-card-link.img"></img>
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
  const companies = [
    { description: 'Company 1 description', website: 'https://www.example.com', logo: 'ensign.png', title: 'Company 1' },
    { description: 'Company 2 description', website: 'https://www.example.com', logo: 'ensign.png', title: 'Company 2' },
    { description: 'Company 3 description', website: 'https://www.example.com', logo: 'ensign.png', title: 'Company 3' },
    { description: 'Company 4 description', website: 'https://www.example.com', logo: 'ensign.png', title: 'Company 4' },
    { description: 'Company 5 description', website: 'https://www.example.com', logo: 'ensign.png', title: 'Company 5' },
    { description: 'Company 6 description', website: 'https://www.example.com', logo: 'ensign.png', title: 'Company 6' },
  ];


  return (
    <div className="page">

      <div className="company-list">
        <div className="company-row">
        {companies.map((company, index) => <CompanyCard key={index} {...company} />)}
        </div>
      </div>
    </div>
  );
};

export default CompanyList;
