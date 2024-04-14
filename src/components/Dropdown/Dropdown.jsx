import { useState } from 'react';
import './Dropdown.css';
import PropTypes from 'prop-types';

const Dropdown = ({ onPreview, onEdit, onClone, onDelete }) => {
  const isOpen = false;
  function handleDelete() {
    if (!window.confirm('Are you sure you want to delete this?')) {
      return;
    }
    onDelete();
  }
  const [dropdown, setDropdown] = useState(isOpen);
  function handleDropdown() {
    setDropdown(dropdown === false ? true : false);
  }
  return (
    <div data-testid={'dropdown'} className="dropdown">
      <button onClick={handleDropdown} data-testid={'menuButton'} className="dropdown-btn">
        Menu
      </button>
      {dropdown && (
        <div className="dropdown-container">
          <button onClick={onPreview} data-testid={'previewButton'} className="dropdown-item">
            Preview
          </button>
          <button onClick={onEdit} data-testid={'editButton'} className="dropdown-item">
            Edit
          </button>
          <button onClick={onClone} data-testid={'cloneButton'} className="dropdown-item">
            Clone
          </button>
          <div className="dropdown-divider"></div>
          <button onClick={handleDelete} data-testid={'deleteButton'} className="dropdown-item danger">
            Delete
          </button>
        </div>
      )}

      {isOpen && <div className="dropdown-container">Finish me</div>}
    </div>
  );
};

Dropdown.propTypes = {
  onPreview: PropTypes.func,
  onEdit: PropTypes.func,
  onClone: PropTypes.func,
  onDelete: PropTypes.func,
};

Dropdown.defaultProps = {
  onPreview: () => {},
  onEdit: () => {},
  onClone: () => {},
  onDelete: () => {},
};

export default Dropdown;
