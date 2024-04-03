import './Navbar.css';
import PropTypes from 'prop-types';

function Navbar({ links }) {
  return (
    <nav data-testid="nav" className={'navbar'}>
      <ul data-testid="ul" >
        {links?.map((link, index) => (
          <li key={index} data-testid={`li${index}`}>
            <a data-testid={`a${index}`} href={link.url} className="link">
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

Navbar.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Navbar;
