import './UsesSection.css';
import PropTypes from 'prop-types';
import UsesCard from '../UsesCard/UsesCard.jsx';

const UsesSection = ({ items }) => {
  return (
    <section>
      {
        <section className="uses-section">
          <div className="uses-section__content">
            {items.map((group, index) => (
              <div className="uses-section__group" key={index}>
                <h2>{group.groupName}</h2>
                <div className="uses-section__group-content">
                  {group.items.map((item, itemIndex) => (
                    <UsesCard title={item.title} content={item.description} key={itemIndex} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      }
    </section>
  );
};

UsesSection.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      groupName: PropTypes.string,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string,
          description: PropTypes.string,
        })
      ),
    })
  ),
};

UsesSection.defaultProps = {
  items: [],
};
export default UsesSection;
