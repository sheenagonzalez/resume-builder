import { PropTypes } from "prop-types";
import AddIcon from '@mui/icons-material/Add';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function EducationInput({ educationData, onChange, onAdd, onRemove }) {
  const educationList = educationData.map((education) => {
    const index = educationData.indexOf(education);
    return (
      <li key={index} data-key={index} className="input-card">
        <div className="input-group">
          <label className="input-label" htmlFor="institution">Institution</label>
          <input
            className="input"
            type="text"
            id="institution"
            name="institution"
            defaultValue={education.institution}
            onChange={onChange}
          />
        </div>
        <div className="input-group">
          <label className="input-label" htmlFor="degree">Degree</label>
          <input
            className="input"
            type="text"
            id="degree"
            name="degree"
            defaultValue={education.degree}
            onChange={onChange}
          />
        </div>
        <div className="input-group">
          <label className="input-label" htmlFor="startDate">Start date</label>
          <input
            className="input"
            type="month"
            id="startDate"
            name="startDate"
            defaultValue={education.startDate}
            onChange={onChange}
          />
        </div>
        <div className="input-group">
          <label className="input-label" htmlFor="endDate">Expected/Graduation date</label>
          <input
            className="input"
            type="month"
            id="endDate"
            name="endDate"
            defaultValue={education.endDate}
            onChange={onChange}
          />
        </div>
        <div className="input-group">
          <label className="input-label" htmlFor="location">Location</label>
          <input
            className="input"
            type="text"
            id="location"
            name="location"
            defaultValue={education.location}
            onChange={onChange}
          />
        </div>
        <div className="input-group">
          <label className="input-label" htmlFor="description">Description</label>
          <input
            className="input"
            type="textarea"
            id="description"
            name="description"
            defaultValue={education.description}
            onChange={onChange}
          />
        </div>
        <button className="delete-btn" onClick={() => onRemove(index)}>
          <DeleteForeverIcon className="delete-icon" />
          <span className="delete-label">Delete</span>
        </button>
      </li>
    )
  });

  return (
    <section className="input-section">
      <div className="input-header">
        <h2 className="input-title">Education</h2>
      </div>
      <ul className="input-list">{educationList}</ul>
      <button onClick={onAdd}>
        <AddIcon className="add-icon" />
        <span className="add-label">Add one more education</span>
      </button>
    </section>
  )
}

EducationInput.propTypes = {
  educationData: PropTypes.array,
  onChange: PropTypes.func,
  onAdd: PropTypes.func,
  onRemove: PropTypes.func,
}

export default EducationInput;