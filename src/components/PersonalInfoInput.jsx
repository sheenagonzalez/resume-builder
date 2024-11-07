import PropTypes from 'prop-types';
function PersonalInfoInput({ fname, lname, jobTitle, email, phone, onChange }) {
  return (
    <section className="input-section personal-info">
      <div className="input-header">
        <h2 className="input-title">Personal Information</h2>
      </div>
      <div className="input-group input-group--small required">
        <label className="input-label" htmlFor="fname">First name <span className="asterisk">&#42;</span></label>
        <input
          className="input"
          type="text"
          id="fname"
          name="fname"
          defaultValue={fname}
          onChange={onChange}
          required />
      </div>
      <div className="input-group input-group--small required">
        <label className="input-label" htmlFor="lname">Last name <span className="asterisk">&#42;</span></label>
        <input
          className="input"
          type="text"
          id="lname"
          name="lname"
          defaultValue={lname}
          onChange={onChange}
          required />
      </div>
      <div className="input-group">
        <label className="input-label" htmlFor="jobTitle">Job title</label>
        <input
          className="input"
          type="text"
          id="jobTitle"
          name="jobTitle"
          defaultValue={jobTitle}
          onChange={onChange}
        />
      </div>
      <div className="input-group">
        <label className="input-label" htmlFor="email">Email <span className="asterisk">&#42;</span></label>
        <input
          className="input"
          type="email"
          id="email"
          name="email"
          defaultValue={email}
          onChange={onChange}
          required
        />
      </div>
      <div className="input-group">
        <label className="input-label" htmlFor="phone">Phone</label>
        <input
          className="input"
          type="phone"
          id="phone"
          name="phone"
          defaultValue={phone}
          onChange={onChange}
        />
      </div>
    </section>
  )
}

PersonalInfoInput.propTypes = {
  fname: PropTypes.string.isRequired,
  lname: PropTypes.string.isRequired,
  jobTitle: PropTypes.string,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string,
  onChange: PropTypes.func,
}

export default PersonalInfoInput;