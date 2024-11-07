import PropTypes from 'prop-types';
import { format, addMonths } from 'date-fns';
import AddIcon from '@mui/icons-material/Add';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function EducationInput({ educationData, onChange, onAdd, onRemove }) {
  const educationList = educationData.map((education) => {
    const index = educationData.indexOf(education);
    return (
      <li key={index} data-key={index} className="input-card">
        <div className="input-card-header">
          <h3 className="input-card-heading">{education.label ? education.label : "Institution "+(index+1)}</h3>
          <button className="delete-btn" onClick={() => onRemove(index)}>
            <DeleteForeverIcon className="delete-icon" />
          </button>
        </div>
        <div className="input-group">
          <label className="input-label" htmlFor={"institution-"+index}>Institution</label>
          <input
            className="input"
            type="text"
            id={"institution-"+index}
            name="institution"
            defaultValue={education.institution}
            onChange={onChange}
          />
        </div>
        <div className="input-group">
          <label className="input-label" htmlFor={"degree-"+index}>Degree</label>
          <input
            className="input"
            type="text"
            id={"degree-"+index}
            name="degree"
            defaultValue={education.degree}
            onChange={onChange}
          />
        </div>
        <div className="input-group">
          <label className="input-label" htmlFor={"startDate-"+index}>Start date</label>
          <input
            className="input"
            type="month"
            id={"startDate-"+index}
            name="startDate"
            defaultValue={format(addMonths(education.startDate, 1), 'yyyy-MM')}
            onChange={onChange}
          />
        </div>
        <div className="input-group">
          <label className="input-label" htmlFor={"endDate-"+index}>Expected/Graduation date</label>
          <input
            className="input"
            type="month"
            id={"endDate-"+index}
            name="endDate"
            defaultValue={format(addMonths(education.endDate, 1), 'yyyy-MM')}
            onChange={onChange}
          />
        </div>
        <div className="input-group">
          <label className="input-label" htmlFor={"location-"+index}>Location</label>
          <input
            className="input"
            type="text"
            id={"location-"+index}
            name="location"
            defaultValue={education.location}
            onChange={onChange}
          />
        </div>
        <div className="input-group">
          <label className="input-label" htmlFor={"description-"+index}>Description</label>
          <input
            className="input"
            type="textarea"
            id={"description-"+index}
            name="description"
            defaultValue={education.description}
            onChange={onChange}
          />
        </div>
      </li>
    )
  });

  return (
    <section className="input-section">
      <div className="input-header">
        <h2 className="input-title">Education</h2>
      </div>
      <ul className="input-list">{educationList}</ul>
      <button className="add-btn" onClick={() => onAdd()}>
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