import PropTypes from 'prop-types';
import AddIcon from '@mui/icons-material/Add';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import LinksInput from './LinksInput.jsx'

function ProjectsInput({ projectsData, onChange, onAdd, onRemove }) {
  const projectsList = projectsData.map((project) => {
    const index = projectsData.indexOf(project);
    return (
      <li key={index} data-key={index} className="input-card">
        <div className="input-group">
          <label className="input-label" htmlFor="title">Title</label>
          <input
            className="input"
            type="text"
            id="title"
            name="title"
            defaultValue={project.title}
            onChange={onChange}
          />
        </div>
        <LinksInput
          linksData={project.links}
          onChange={onChange}
          onAdd={onAdd}
          onRemove={onRemove}
        />
        <div className="input-group">
          <label className="input-label" htmlFor="completionDate">Completion date</label>
          <input
            className="input"
            type="month"
            id="completionDate"
            name="completionDate"
            defaultValue={project.completionDate}
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
            defaultValue={project.description}
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
        <h2 className="input-title">Projects</h2>
      </div>
      <ul className="input-list">{projectsList}</ul>
      <button onClick={onAdd}>
        <AddIcon className="add-icon" />
        <span className="add-label">Add one more project</span>
      </button>
    </section>
  )
}

ProjectsInput.propTypes = {
  projectsData: PropTypes.array,
  onChange: PropTypes.func,
  onAdd: PropTypes.func,
  onRemove: PropTypes.func,
}

export default ProjectsInput;