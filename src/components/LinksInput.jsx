import PropTypes from 'prop-types';
import AddIcon from '@mui/icons-material/Add';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function LinksInput({ linksData, onChange, onAdd, onRemove }) {
  const linksList = linksData.map((link) => {
    const index = linksData.indexOf(link);
    return (
      <li key={index} data-key={index} className="input-card link">
        <div className="input-card-header">
          <h3 className="input-card-heading">{link.label ? link.label : "Link "+(index+1)}</h3>
          <button className="delete-btn" onClick={() => onRemove(index)}>
            <DeleteForeverIcon className="delete-icon" />
          </button>
        </div>
        <div className="input-group input-group--small">
          <label className="input-label" htmlFor="label">Label</label>
          <input
            className="input"
            type="text"
            id="label"
            name="label"
            defaultValue={link.label}
            onChange={onChange}
          />
        </div>
        <div className="input-group input-group--small">
          <label className="input-label" htmlFor="url">URL</label>
          <input
            className="input"
            type="url"
            id="url"
            name="url"
            defaultValue={link.url}
            onChange={onChange}
          />
        </div>
      </li>
    )
  });

  return (
    <section className="input-section">
      <div className="input-header">
        <h2 className="input-title">Links</h2>
      </div>
      <ul className="input-list">{linksList}</ul>
      <button className="add-btn" onClick={() => onAdd()}>
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