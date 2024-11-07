const example = {
  fname: "Jane",
  lname: "Smith",
  jobTitle: "Software Engineer",
  email: "janesmith@example.com",
  phone: "+1 (999) 888-7777",
  links: [
    {
      label: "Portfolio",
      url: "https://janesmith.com",
    },
    {
      label: "LinkedIn",
      url: "https://linkedin.com/in/jane-smith",
    },
    {
      label: "GitHub",
      url: "https://github.com/jane-smith",
    },
  ],
  education: [
    {
      institution: "University of California, Berkeley",
      degree: "Bachelor's Degree in Computer Science",
      startDate: new Date(2016, 8),
      endDate: new Date(2020, 5),
      location: "Berkeley, CA",
      description: "Graduated with Honors; Won CalHacks 6.0; CS Scholar",
    },
  ],
  experience: [
    {
      position: "Software Engineer",
      employer: "Google",
      startDate: new Date(2020, 6),
      endDate: null,
      isCurrent: true,
      location: "San Francisco, CA",
      summary: "",
    },
    {
      position: "Software Engineer Intern",
      employer: "Meta",
      startDate: new Date(2019, 1),
      endDate: new Date(2019, 6),
      isCurrent: false,
      location: "Silicon Valley, CA",
      summary: "",
    },
  ],
  projects: [
    {
      title: "Socialize.io",
      links: [
        {
          label: "View code",
          url: "https://github.com",
        },
        {
          label: "Live link",
          url: "https://google.com",
        },
      ],
      completionDate: new Date(2018, 12),
      description: "Social networking website with profiles, posts, and messaging features, built using React.js",
    },
  ],
  skills: [
    {
      label: "Languages",
      list: ["HTML", "CSS", "JavaScript", "React.js", "Java", "Python", "PostgreSQL"],
    },
    {
      label: "Tools",
      list: ["AWS", "APIs", "Docker", "Git", "GitHub"]
    }
  ]
}

export default example;