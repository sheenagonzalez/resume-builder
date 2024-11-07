import { PropTypes } from "prop-types";
import AddIcon from '@mui/icons-material/Add';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function SkillsInput({ skillsData, onChange, onAdd, onRemove }) {
  const skillsList = skillsData.map((skillset) => {
    const index = skillsData.indexOf(skillset);
    return (
      <li key={index} data-key={index} className="input-card">
        <div className="input-group">
          <label className="input-label" htmlFor="label">Label</label>
          <input
            className="form-input"
            type="text"
            id="label"
            name="label"
            defaultValue={skillset.label}
            onChange={onChange}
          />
        </div>
        <div className="input-group">
          <label className="input-label" htmlFor="skills">Skills</label>
          <span className="input-caption">Separate skills with a comma.</span>
          <input
            className="form-input"
            type="text"
            id="skills"
            name="skills"
            defaultValue={skillset.list}
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
        <h2 className="input-title">Skills</h2>
      </div>
      <ul className="input-list">{skillsList}</ul>
      <button onClick={onAdd}>
        <AddIcon className="add-icon" />
        <span className="add-label">Add one more skillset</span>
      </button>
    </section>
  )
}

SkillsInput.propTypes = {
  skillsData: PropTypes.array,
  onChange: PropTypes.func,
  onAdd: PropTypes.func,
  onRemove: PropTypes.func,
}

export default SkillsInput;