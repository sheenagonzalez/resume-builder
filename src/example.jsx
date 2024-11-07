const example = {
  fname: "Sheena",
  lname: "Gonzalez",
  jobTitle: "Software Developer & UX Designer",
  email: "shngonzalez@gmail.com",
  links: [
    {
      label: "Portfolio",
      url: "https://sheena.dev",
    },
    {
      label: "GitHub",
      url: "https://github.com/sheenagonzalez",
    },
    {
      label: "LinkedIn",
      url: "https://linkedin.com/in/sheena-gonzalez",
    },
  ],
  education: [
    {
      institution: "University of California, Berkeley",
      degree: "B.A. in Cognitive Science",
      startDate: new Date(2016, 8),
      endDate: new Date(2020, 5),
      location: "Berkeley, CA",
      description: "Minor in Computer Science",
    },
    {
      institution: "DePaul University",
      degree: "M.S. in Computer Science",
      startDate: new Date(2025, 1),
      endDate: new Date(2026, 12),
      location: "Chicago, IL",
      description: "(Will pursue) Part-time; Online",
    },
  ],
  experience: [
    {
      position: "Front-end Developer & Designer",
      employer: "Blissy, LLC",
      startDate: new Date(2021, 3),
      endDate: new Date(2023, 10),
      isCurrent: false,
      location: "Burbank, CA",
      summary: "Built and optimized e-commerce components, boosting conversion rates by 7.5% and reducing bounce rates by 21%. Implemented SEO strategies like site speed optimization and backlinks, doubling monthly visitors to 1M within a year. Developed targeted landing pages with A/B testing using Webflow, significantly increasing online presence and sales. Customized Shopify storefront tailored to business and user needs using Liquid, CSS, Vanilla JS and jQuery. Assisted CTO with adapting changes and new features to existing cart and checkout systems using PHP. Integrated third-party tools and apps for agile implementations of new features on Shopify store. Led site and app product launches and promotional discounts, maintaining regular updates and troubleshooting. Fostered a productive work ethic using agile methodology, cross-department collaboration and mentorship efforts. Enhanced code quality through conducting code reviews, following documentation practices, and automating processes. Collaborated with copywriter to implement user improvements and new functionalities to blog pages, increasing SEO.",
    },
    {
      position: "Software Engineer Intern",
      employer: "Marqui Labs",
      startDate: new Date(2020, 10),
      endDate: new Date(2021, 2),
      isCurrent: false,
      location: "Los Gatos, CA",
      summary: "Recreated NARI website from scratch into a single page application using Vue.js, cutting render time by 50%. Implemented a custom-built REST API with a search interface using Node.js, boosting query efficiency and UX. Conducted stakeholder interviews to identify user pain points and key areas for improvements. Designed Figma mock-ups and prototypes for effective stakeholder presentations.",
    },
    {
      position: "Web Designer Intern",
      employer: "Creative Digital Agency",
      startDate: new Date(2020, 11),
      endDate: new Date(2021, 2),
      isCurrent: false,
      location: "San Ramon, CA",
      summary: "Integrated cutting edge design trends to create a brand new website, elevating brand identity. Conceptualized and designed interactive website prototypes using Figma for both desktop and mobile views. Conducted weekly meetings for design presentation, feedback and to ensure seamless handoff to developer and client.Designed a press kit, letterhead, envelope, and business cards for post-launch print marketing.",
    },
  ],
  projects: [
    {
      title: "Easy CV",
      links: [
        {
          label: "View code",
          url: "https://github.com/sheenagonzalez/resume-builder",
        },
        {
          label: "Live preview",
          url: "https://easycvresumebuilder.netlify.app",
        },
      ],
      completionDate: new Date(2024, 11),
      description: "A React web application where users can input their information and generate a resumé in .pdf format",
    },
    {
      title: "MangaPin",
      links: [
        {
          label: "View code",
          url: "https://github.com/sheenagonzalez/mangapin",
        },
        {
          label: "Live preview",
          url: "https://sheenagonzalez.github.io/mangapin",
        },
      ],
      completionDate: new Date(2024, 10),
      description: "A small digital library of manga recommendations built using Vue.js and integrated with Kitsu API via axios",
    },
  ],
  skills: [
    {
      label: "Coding",
      list: ["HTML", "CSS", "JavaScript", "React.js", "Vue.js", "Liquid", "Java", "Kotlin", "PHP", "SQL", "Git", "GitHub", "REST APIs", "Netlify", "Android Studio", "Unity"],
    },
    {
      label: "Design",
      list: ["Figma", "Adobe Creative Suite", "Webflow", "Lottie Animations", "Wireframing", "Prototyping", "Usability Testing", "A/B Testing", "User Interviews", "Heuristic Evaluation", "Competitive Analysis"]
    }
  ]
}

export default example;