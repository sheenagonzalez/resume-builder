import { PropTypes } from "prop-types";

function Resume({ resume }) {
  return (
    <div className="resume">
      {resume && (
        <div className="resume-header">
          <h1 className="full-name">{resume.fname} {resume.lname}</h1>
          <p className="job-title">{resume.jobTitle}</p>
          <p className="personal-details">
            <span className="email">{resume.email}</span>
            <span className="phone">{resume.phone}</span>
            {resume.links.map((link, index) => (
              <span key={index} className="link"></span>
            ))}
          </p>
        </div>
      )} 
    </div>
  );
}

Resume.propTypes = {
  resume: PropTypes.object,
}

export default Resume;