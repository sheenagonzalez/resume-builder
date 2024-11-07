import { PropTypes } from "prop-types";
import AddIcon from '@mui/icons-material/Add';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function ExperienceInput({ experienceData, onChange, onAdd, onRemove }) {
  const experienceList = experienceData.map((experience) => {
    const index = experienceData.indexOf(experience);
    return (
      <li key={index} data-key={index} className="input-card">
        <div className="input-group">
          <label className="input-label" htmlFor="position">Position</label>
          <input
            className="input"
            type="text"
            id="position"
            name="position"
            defaultValue={experience.position}
            onChange={onChange}
          />
        </div>
        <div className="input-group">
          <label className="input-label" htmlFor="employer">Employer</label>
          <input
            className="input"
            type="text"
            id="employer"
            name="employer"
            defaultValue={experience.employer}
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
            defaultValue={experience.startDate}
            onChange={onChange}
          />
        </div>
        <div className="input-group">
          <label className="input-label" htmlFor="endDate">End date</label>
          <input
            className="input"
            type="month"
            id="endDate"
            name="endDate"
            defaultValue={experience.endDate}
            onChange={onChange}
          />
        </div>
        <div className="input-group">
          <label className="input-label" htmlFor="isCurrent">Currently working here</label>
          <input
            className="input"
            type="checkbox"
            id="isCurrent"
            name="isCurrent"
            defaultValue={experience.isCurrent}
            onChange={onChange}
          />
        </div>
        <div className="input-group">
          <label className="input-label" htmlFor="location">Location</label>
          <input
            className="input"
            type="month"
            id="location"
            name="location"
            defaultValue={experience.location}
            onChange={onChange}
          />
        </div>
        <div className="input-group">
          <label className="input-label" htmlFor="summary">Summary</label>
          <input
            className="input"
            type="textarea"
            id="summary"
            name="summary"
            defaultValue={experience.summary}
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
        <h2 className="input-title">Experience</h2>
      </div>
      <ul className="input-list">{experienceList}</ul>
      <button onClick={onAdd}>
        <AddIcon className="add-icon" />
        <span className="add-label">Add one more experience</span>
      </button>
    </section>
  )
}

ExperienceInput.propTypes = {
  experienceData: PropTypes.array,
  onChange: PropTypes.func,
  onAdd: PropTypes.func,
  onRemove: PropTypes.func,
}

export default ExperienceInput;