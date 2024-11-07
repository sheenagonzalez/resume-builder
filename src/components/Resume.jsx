import PropTypes from 'prop-types';
import { format, addMonths } from 'date-fns';

function Resume({ resume }) {
  return (
    <div className="resume">
      <div className="resume-header">
        <h1 className="full-name">{resume.fname} {resume.lname}</h1>
        {resume.jobTitle && (<p className="job-title">{resume.jobTitle}</p>)}
        <p className="personal-details">
          <a className="email" href={"mailto:"+resume.email}>{resume.email}</a>
          {resume.phone && (<a className="phone" href={"tel:"+resume.phone}> | {resume.phone}</a>)} 
          {resume.links && resume.links.map((link, index) => (
            <span key={index} className="link"> | <a className="link-url" href={link.url}>{link.url}</a></span>
          ))}
        </p>
      </div>
      <div className="experience section">
        <h2 className="section-heading">Work Experience</h2>
        <hr className="divider" />
        <ul className="section-list">
          {resume.experience.map((exp, index) => (
            <li key={index} className="section-item">
              <div className="item-header">
                <div>
                  <h3 className="item-heading bold">{exp.position}</h3>
                  <p className="item-subheading bold">{exp.employer}</p>
                </div>
                <div>
                  {exp.startDate && (
                      <p className='item-dates bold'>
                        {format(addMonths(new Date(exp.startDate), 1), 'MMM yyyy')} - {' '}
                        {exp.endDate || !exp.isCurrent ? format(addMonths(new Date(exp.endDate), 1), 'MMM yyyy') : 'Present'}
                      </p>
                    )}
                  <p className="item-location bold">{exp.location}</p>
                </div>
              </div>
              <ul className="item-list">
                  {exp.summary.split('. ').map((item, ind) => (
                    <li key={ind} className="item-bullet">{item}</li>
                  ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <div className="education section">
        <h2 className="section-heading">Education</h2>
        <hr className="divider" />
        <ul className="section-list">
          {resume.education.map((edu, index) => (
            <li key={index} className="section-item">
              <div className="item-header">
                <div>
                  <h3 className="item-heading bold">{edu.institution}</h3>
                  <p className="item-subheading bold">{edu.degree}</p>
                </div>
                <div>
                  {edu.startDate && (
                      <p className='item-dates bold'>
                        {format(addMonths(new Date(edu.startDate), 1), 'MMM yyyy')} - {' '}
                        {edu.endDate ? format(addMonths(new Date(edu.endDate), 1), 'MMM yyyy') : 'Present'}
                      </p>
                    )}
                  <p className="item-location bold">{edu.location}</p>
                </div>
              </div>
              <ul className="item-list">
                  {edu.description.split('. ').map((item, ind) => (
                    <li key={ind} className="item-bullet">{item}</li>
                  ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <div className="projects section">
        <h2 className="section-heading">Projects</h2>
        <hr className="divider" />
        <ul className="section-list">
          {resume.projects.map((proj, index) => (
            <li key={index} className="section-item">
              <div className="item-header">
                <div>
                  <h3 className="item-heading bold">{proj.title}</h3>
                  {proj.links.map((link, ind) => (
                    <div key={ind}>
                      <a className="item-link" href={link.url}>{link.label}</a>{ind !== Object.keys(proj.links).length - 1 ? (<span> | </span>) : null}
                    </div>
                  ))}
                </div>
                <div>
                  {proj.completionDate && (
                      <p className='item-dates bold'>
                        {format(addMonths(new Date(proj.completionDate), 1), 'MMM yyyy')}
                      </p>
                    )}
                  <p className="item-location bold">{proj.location}</p>
                </div>
              </div>
              <ul className="item-list">
                  {proj.description.split('. ').map((item, ind) => (
                    <li key={ind} className="item-bullet">{item}</li>
                  ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <div className="skills section">
        <h2 className="section-heading">Skills</h2>
        <hr className="divider" />
        <ul className="section-list">
          {resume.skills.map((skillset, index) => (
            <li key={index} className="section-item">
              <div className="item-header">
                <p className="item-heading bold"><span className="bold">{skillset.label}:</span> {skillset.list.join(', ')}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Resume.propTypes = {
  resume: PropTypes.object,
}

export default Resume;