import PropTypes from 'prop-types';
import { format, addMonths } from 'date-fns';
import AddIcon from '@mui/icons-material/Add';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function ExperienceInput({ experienceData, onChange, onAdd, onRemove }) {
  const experienceList = experienceData.map((experience) => {
    const index = experienceData.indexOf(experience);
    return (
      <li key={index} data-key={index} className="input-card">
        <div className="input-card-header">
          <h3 className="input-card-heading">{experience.employer ? experience.employer : "Experience "+(index+1)}</h3>
          <button className="delete-btn" onClick={() => onRemove(index)}>
            <DeleteForeverIcon className="delete-icon" />
          </button>
        </div>
        <div className="input-group">
          <label className="input-label" htmlFor={"position-"+index}>Position</label>
          <input
            className="input"
            type="text"
            id={"position-"+index}
            name="position"
            defaultValue={experience.position}
            onChange={onChange}
          />
        </div>
        <div className="input-group input-group--small">
          <label className="input-label" htmlFor={"employer-"+index}>Employer</label>
          <input
            className="input"
            type="text"
            id={"employer-"+index}
            name="employer"
            defaultValue={experience.employer}
            onChange={onChange}
          />
        </div>
        <div className="input-group input-group--small">
          <label className="input-label" htmlFor={"location-"+index}>Location</label>
          <input
            className="input"
            type="text"
            id={"location-"+index}
            name="location"
            defaultValue={experience.location}
            onChange={onChange}
          />
        </div>
        <div className="input-group input-group--small">
          <label className="input-label" htmlFor={"startDate-"+index}>Start date</label>
          <input
            className="input"
            type="month"
            id={"startDate-"+index}
            name="startDate"
            defaultValue={format(addMonths(experience.startDate, 1), 'yyyy-MM')}
            onChange={onChange}
          />
        </div>
        <div className="input-group input-group--small">
          <label className="input-label" htmlFor={"endDate-"+index}>End date</label>
          <input
            className="input"
            type="month"
            id={"endDate-"+index}
            name="endDate"
            defaultValue={format(addMonths(experience.endDate, 1), 'yyyy-MM')}
            onChange={onChange}
          />
        </div>
        <div className="input-group">
          <label className="input-label" htmlFor={"summary-"+index}>Summary</label>
          <input
            className="input"
            type="textarea"
            id={"summary-"+index}
            name="summary"
            defaultValue={experience.summary}
            onChange={onChange}
          />
        </div>
        <div className="input-group input-group--small">
          <label className="input-label" htmlFor={"isCurrent-"+index}>Currently working here</label>
          <input
            className="input"
            type="checkbox"
            id={"isCurrent-"+index}
            name="isCurrent"
            defaultValue={experience.isCurrent}
            onChange={onChange}
          />
        </div>
      </li>
    )
  });

  return (
    <section className="input-section">
      <div className="input-header">
        <h2 className="input-title">Experience</h2>
      </div>
      <ul className="input-list">{experienceList}</ul>
      <button className="add-btn" onClick={() => onAdd()}>
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