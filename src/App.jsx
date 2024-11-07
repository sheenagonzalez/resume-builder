import { useState, useEffect } from 'react'
import example from './example.jsx'
import './styles/normalize.css'
import './styles/App.css'
import AppHeader from './components/AppHeader.jsx'
import AppFooter from './components/AppFooter.jsx'
import PersonalInfoInput from './components/PersonalInfoInput.jsx'
import LinksInput from './components/LinksInput.jsx'
import EducationInput from './components/EducationInput.jsx'
import ExperienceInput from './components/ExperienceInput.jsx'
import ProjectsInput from './components/ProjectsInput.jsx'
import SkillsInput from './components/SkillsInput.jsx'
import Resume from './components/Resume.jsx'
import html2pdf from 'html2pdf.js'
import DownloadIcon from '@mui/icons-material/Download';

function App() {
  const [resume, setResume] = useState(example);

  useEffect(() => {
    setResume(prevState => ({
      ...prevState,
      links: resume.links,
      education: resume.education,
      experience: resume.experience,
      projects: resume.projects,
      skills: resume.skills,
    }));
  }, [resume.links, resume.education, resume.experience, resume.projects, resume.skills]);

  const changePersonalInfo = (e) => {
    setResume({ ...resume, [e.target.name]: e.target.value });
  }

  const changeLinks = (e) => {
    const { name, value } = e.target;
    const index = parseInt(e.target.closest('li').dataset.key, 10);
    setResume(prevState => ({
      ...prevState,
      links: prevState.links.map((link, ind) =>
        ind === index ? { ...link, [name]: value } : link
      )
    }));
  }

  const addLink = () => {
    const newLink = {
      label: '',
      url: '',
    };
    setResume({...resume, links: [...resume.links, newLink]});
  }

  const removeLink = (index) => {
    setResume({...resume, links: resume.links.filter((link, ind) => ind !== index)})
  }

  const changeEducation = (e) => {
    const { name, value } = e.target;
    const index = parseInt(e.target.closest('li').dataset.key, 10);
    setResume(prevState => ({
      ...prevState,
      education: prevState.education.map((edu, ind) =>
        ind === index ? { ...edu, [name]: value } : edu
      )
    }));
  }

  const addEducation = () => {
    const newEducation = {
      institution: '',
      degree: '',
      startDate: Date.now('MMM yyyy'),
      endDate: Date.now('MMM yyyy'),
      location: '',
      description: '',
    }
    setResume({...resume, education: [...resume.education, newEducation]})
  }

  const removeEducation = (index) => {
    setResume({...resume, education: resume.education.filter((edu, ind) => ind !== index)})
  }

  const changeExperience = (e) => {
    const { name, value } = e.target;
    const index = parseInt(e.target.closest('li').dataset.key, 10);
    setResume(prevState => ({
      ...prevState,
      experience: prevState.experience.map((exp, ind) =>
        ind === index ? { ...exp, [name]: value } : exp
      )
    }));
  }

  const addExperience = () => {
    const newExperience = {
      position: '',
      employer: '',
      startDate: Date.now('MMM yyyy'),
      endDate: Date.now('MMM yyyy'),
      isCurrent: false,
      location: '',
      description: '',
    }
    setResume({...resume, experience: [...resume.experience, newExperience]})
  }

  const removeExperience = (index) => {
    setResume({...resume, experience: resume.experience.filter((exp, ind) => ind !== index)})
  }

  const changeProjects = (e) => {
    const { name, value } = e.target;
    const index = parseInt(e.target.closest('li').dataset.key, 10);
    setResume(prevState => ({
      ...prevState,
      projects: prevState.projects.map((proj, ind) =>
        ind === index ? { ...proj, [name]: value } : proj
      )
    }));
  }

  const addProject = () => {
    const newProject = {
      title: '',
      links: [],
      completionDate: Date.now('MMM yyyy'),
      description: '',
    }
    setResume({...resume, projects: [...resume.projects, newProject]})
  }

  const removeProject = (index) => {
    setResume({...resume, projects: resume.projects.filter((proj, ind) => ind !== index)})
  }

  const changeSkills = (e) => {
    const { name, value } = e.target;
    const index = parseInt(e.target.closest('li').dataset.key, 10);
    setResume(prevState => ({
      ...prevState,
      skills: prevState.skills.map((skill, ind) =>
        ind === index ? { ...skill, [name]: value } : skill
      )
    }));
  }

  const addSkillset = () => {
    const newSkillset = {
      label: '',
      list: [],
    }
    setResume({...resume, skills: [...resume.skills, newSkillset]})
  }

  const removeSkillset = (index) => {
    setResume({...resume, skills: resume.skills.filter((skillset, ind) => ind !== index)})
  }
  
  const downloadPDF = () => {
    const element = document.querySelector('.resume');
    const opt = {
      margin: 1,
      filename: 'resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 1 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    };
    html2pdf().from(element).set(opt).save();
  }

  return (
    <div className="app-container">
      <div className="form-container">
        <AppHeader
          appTitle="EasyCV"
          appDescription="Build a simple, ATS-friendly resume within minutes. Simply enter your information and EasyCV automatically generates a .PDF file that you can download for free!"
        />
        <form className="form">
          <PersonalInfoInput
            fname={resume.fname}
            lname={resume.lname}
            jobTitle={resume.jobTitle}
            email={resume.email}
            phone={resume.phone}
            onChange={changePersonalInfo}
          />
          <LinksInput
            linksData={resume.links}
            onChange={changeLinks}
            onAdd={addLink}
            onRemove={removeLink}
          />
          <EducationInput
            educationData={resume.education}
            onChange={changeEducation}
            onAdd={addEducation}
            onRemove={removeEducation}
          />
          <ExperienceInput
            experienceData={resume.experience}
            onChange={changeExperience}
            onAdd={addExperience}
            onRemove={removeExperience}
          />
          <ProjectsInput
            projectsData={resume.projects}
            onChange={changeProjects}
            onAdd={addProject}
            onRemove={removeProject}
          />
          <SkillsInput
            skillsData={resume.skills}
            onChange={changeSkills}
            onAdd={addSkillset}
            onRemove={removeSkillset}
          />
        </form>
        <AppFooter
          holderName="Sheena Gonzalez"
          year="2024"
        />
      </div>
      <div className="resume-container">
        <Resume resume={resume} />
      </div>
      <button className="download-btn" onClick={downloadPDF}>
        <DownloadIcon className="download-icon" />
        <span className="download-label">Download PDF</span>
      </button>
    </div>
  )
}

export default App