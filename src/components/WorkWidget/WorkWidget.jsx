import './WorkWidget.css';
import PropTypes from 'prop-types';

const WorkWidget = ({ title, content, experiences }) => {
  return (
    <>
      <section className="work-widget">
        <h2>{title} </h2>
        <p>{content}</p>
        <ul>
          {experiences?.map((experience, index) => (
            <li key={index}>
              <div className="work-item">
                <img src={experience.logo} alt={`${experience.organization} Logo`}></img>
                <div className="work-item-content">
                  <h3>{experience.organization}</h3>
                  <div className="work-item-content-details">
                    <p>{experience.jobTitle}</p>
                    <span>
                      {experience.startYear} - {experience.endYear !== null ? experience.endYear : 'current'}
                    </span>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};
WorkWidget.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  experiences: PropTypes.arrayOf(
    PropTypes.shape({
      logo: PropTypes.string.isRequired,
      organization: PropTypes.string.isRequired,
      jobTitle: PropTypes.string.isRequired,
      startYear: PropTypes.number.isRequired,
      endYear: PropTypes.number || null,
    })
  ),
};

WorkWidget.defaultProps = {
  experiences: [],
};
export default WorkWidget;
