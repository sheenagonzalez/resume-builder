import { PropTypes } from "prop-types";
import AddIcon from '@mui/icons-material/Add';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function LinksInput({ linksData, onChange, onAdd, onRemove }) {
  const linksList = linksData.map((link) => {
    const index = linksData.indexOf(link);
    return (
      <li key={index} data-key={index} className="input-card">
        <div className="input-group">
          <label className="input-label" htmlFor="label">Label</label>
          <input
            className="form-input"
            type="text"
            id="label"
            name="label"
            defaultValue={link.label}
            onChange={onChange}
          />
        </div>
        <div className="input-group">
          <label className="input-label" htmlFor="url">URL</label>
          <input
            className="form-input"
            type="url"
            id="url"
            name="url"
            defaultValue={link.url}
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
        <h2 className="input-title">Links</h2>
      </div>
      <ul className="input-list">{linksList}</ul>
      <button onClick={onAdd}>
        <AddIcon className="add-icon" />
        <span className="add-label">Add one more link</span>
      </button>
    </section>
  )
}

LinksInput.propTypes = {
  linksData: PropTypes.array,
  onChange: PropTypes.func,
  onAdd: PropTypes.func,
  onRemove: PropTypes.func,
}

export default LinksInput;