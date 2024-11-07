import PropTypes from 'prop-types';
import AddIcon from '@mui/icons-material/Add';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function SkillsInput({ skillsData, onChange, onAdd, onRemove }) {
  const skillsList = skillsData.map((skillset) => {
    const index = skillsData.indexOf(skillset);
    return (
      <li key={index} data-key={index} className="input-card">
        <div className="input-card-header">
          <h3 className="input-card-heading">{skillset.label ? skillset.label : "Skillset "+(index+1)}</h3>
          <button className="delete-btn" onClick={() => onRemove(index)}>
            <DeleteForeverIcon className="delete-icon" />
          </button>
        </div>
        <div className="input-group">
          <label className="input-label" htmlFor="label">Label</label>
          <input
            className="input"
            type="text"
            id="label"
            name="label"
            defaultValue={skillset.label}
            onChange={onChange}
          />
        </div>
        <div className="input-group">
          <label className="input-label" htmlFor="skills">Skills</label>
          <input
            className="input"
            type="text"
            id="skills"
            name="skills"
            defaultValue={skillset.list}
            onChange={onChange}
          />
          <span className="input-caption">* Separate skills with a comma.</span>
        </div>
      </li>
    )
  });

  return (
    <section className="input-section">
      <div className="input-header">
        <h2 className="input-title">Skills</h2>
      </div>
      <ul className="input-list">{skillsList}</ul>
      <button className="add-btn" onClick={() => onAdd()}>
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