import PropTypes from 'prop-types';
import { format, addMonths } from 'date-fns';
import AddIcon from '@mui/icons-material/Add';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import LinksInput from './LinksInput.jsx'

function ProjectsInput({ projectsData, onChange, onAdd, onRemove }) {
  const projectsList = projectsData.map((project) => {
    const index = projectsData.indexOf(project);
    return (
      <li key={index} data-key={index} className="input-card project">
        <div className="input-card-header">
          <h3 className="input-card-heading">{project.title ? project.title : "Project "+(index+1)}</h3>
          <button className="delete-btn" onClick={() => onRemove(index)}>
            <DeleteForeverIcon className="delete-icon" />
          </button>
        </div>
        <div className="input-group">
          <label className="input-label" htmlFor={"title-"+index}>Title</label>
          <input
            className="input"
            type="text"
            id={"title-"+index}
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
          <label className="input-label" htmlFor={"completionDate-"+index}>Completion date</label>
          <input
            className="input"
            type="month"
            id={"completionDate-"+index}
            name="completionDate"
            defaultValue={format(addMonths(project.completionDate, 1), 'yyyy-MM')}
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
            defaultValue={project.description}
            onChange={onChange}
          />
        </div>
      </li>
    )
  });

  return (
    <section className="input-section">
      <div className="input-header">
        <h2 className="input-title">Projects</h2>
      </div>
      <ul className="input-list">{projectsList}</ul>
      <button className="add-btn" onClick={() => onAdd()}>
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