import React from "react";

const data = {
  FirstName: "Kartikeya",
  FooterDescription:
    "I appreciate your visit! Feel free to connect with me on various social media platforms; I'll respond within 24 hours.",
  ProjectTechnologies: [
    "NextJs 14",
    "TailwindCSS",
    "React Js",
    "CSS 5",
    "HTML 5",
    "JavaScript",
    "C",
    "C++",
    "PHP",
    "MySql",
    "Webflow",
    "PhpMailer",
    "Radix",
    "Shadcn UI",
    "Firebase",
    "Figma",
    "Adobe Illustrator",
    " Git & Github",
    "Docker",
    "Linux",
    "Windows",
    "Angular",
    "Adobe Illustrator",
    "Video Editing",
    "Content Creation/Curation",
    "BootStrap 5",
    "Framer Motion",
  ],
  FooterBadge: "Default Version",
  LastName: "Saini",
  HeroSubtitle:
    "Buld by a 2nd-year Information Science Engineering undergrad, I thrive as a Front-End Developer, notably contributing to Cisco ThingQBator where I built a responsive website for Project Shield. My innovative projects, like the Real-Time Stock Trading Simulation and Customized Mass Email Sender, showcase my expertise in web development. With a strong academic record and coding contest victories, I am passionate about crafting seamless and engaging user experiences.",
  SkillsTitle: "My",
  AboutTitleGradient: "Me",
  email: "kudlu2004@gmail.com",
  image: "https://avatars.githubusercontent.com/u/111000515?v=4",
  AboutImageLeft:
    "https://hi-kartik2004.github.io/Portfolio/assets/img/dp3_side_pose_v2.jpg",
  AboutBadge: "Proud Geek_",
  AboutImageCenter: "https://avatars.githubusercontent.com/u/111000515?v=4",
  SkillsTitleGradient: "Skills!",
  WhatsAppLink: "https://wa.me/916360006359",
  SkillsBadge: "Full Stack Developer | 3rd Year Undergrad",
  NavSubtitle: "Make and manage your portfolio in 5 minutes!",
  resumeLink:
    "https://hi-kartik2004.github.io/Portfolio/assets/pdf/Kartikeya_Resume_June_2023.pdf",
  skillsData: [
    {
      progress: 90,
      title: "C and C++",
      description:
        "Mastering the art of algorithmic design and problem-solving through the versatile languages of C and C++.",
      badgeText: "500+ DSA & CP Questions solved",
    },
    {
      progress: 90,
      badgeText: "Advanced",
      title: "HTML 5",
      description:
        "Crafting dynamic and responsive web pages with the latest features and capabilities of HTML 5.",
    },
    {
      badgeText: "Advanced",
      description:
        "Elevating user interfaces through the expressive styling and layout capabilities of CSS 5.",
      progress: 90,
      title: "CSS 5",
    },
    {
      title: "JavaScript",
      badgeText: "Intermediate",
      description:
        "Building interactive and engaging web experiences with the power of JavaScript.",
      progress: 75,
    },
    {
      progress: 75,
      badgeText: "Intermediate",
      title: "PHP",
      description:
        "Creating server-side applications and dynamic web content using the versatile scripting language PHP.",
    },
    {
      description:
        "Managing and querying databases seamlessly with the robust relational database system MySQL.",
      progress: 75,
      badgeText: "Intermediate",
      title: "MySQL",
    },
    {
      badgeText: "Intermediate",
      description:
        "Developing scalable and efficient web applications using the React framework with Next.js.",
      title: "Next.js",
      progress: 75,
    },
    {
      badgeText: "Intermediate",
      progress: 75,
      title: "Firebase",
      description:
        "Leveraging Firebase to integrate powerful backend services seamlessly into web and mobile applications.",
    },
    {
      description:
        "Crafting elegant and efficient user interfaces with the powerful Radix UI library.",
      badgeText: "Advanced",
      progress: 95,
      title: "Radix UI",
    },
    {
      badgeText: "Advanced",
      title: "Git & Github",
      description:
        "Ensuring version control mastery and collaborative development using Git and Github.",
      progress: 95,
    },
    {
      progress: 50,
      title: "Docker",
      description:
        "Embarking on containerization journeys with Docker for scalable and portable application deployment.",
      badgeText: "Beginner",
    },
    {
      badgeText: "Beginner",
      title: "Angular",
      progress: 50,
      description:
        "Exploring the Angular framework to build dynamic and feature-rich single-page applications.",
    },
    {
      description:
        "Transforming ideas into visually stunning designs with proficiency in Figma and Adobe Illustrator.",
      progress: 80,
      badgeText: "Advanced",
      title: "Figma & Adobe Illustrator",
    },
    {
      title: "Framer Motion",
      progress: 60,
      badgeText: "Intermediate",
      description:
        "Animating user interfaces and adding motion to web applications using the Framer Motion library.",
    },
    {
      badgeText: "Advanced",
      title: "Content Creation/Curation",
      progress: 90,
      description:
        "Curating compelling content and engaging media for a captivating digital presence.",
    },
  ],
  AboutDescription:
    "I'm excited to share a bit about myself with you. Thanks for showing interest! Below, you'll find a glimpse into my journey, experiences, and passion for coding. Feel free to explore, and if you have any questions or just want to connect, I'm all ears.",
  SkillsDescription:
    "Dive into the realm of my skill set—an ever-growing toolbox tailored for crafting digital wonders. From mastering languages like C++ and JavaScript to navigating frameworks like React and Next.js, my journey is an ongoing exploration of the tech landscape.",
  AboutMockCode:
    "const name = 'Kartikeya';\nDeveloper dev = new Developer(name);\n\nwhile (dev.isCoding()) {\n  dev.listenToMusic();\n  dev.openStackOverflow();\n  dev.drinkWater();\n}\n",
  AboutImageRight: "https://i.postimg.cc/8zTTKr1F/dp-may-23.jpg",
  NavName: "Kartikeya | CraftFolio",
  FooterSliderTitle:
    "Expect a response within 24 hours when you reach out via email!",
  ProjectTitleGradient: "Projects!",
  githubId: "hi-kartik2004",
  AboutOtherDescription:
    "\nDelving into the tech world, I've worn multiple hats – from being an\n        active\n        <span className='text-primary'>\n          \n          volunteer at IEEE to currently being a part of the Executive team at\n          Google Developer Student Clubs (GDSC).\n        </span>\n        It's not just about the code for me; it's about community and\n        collaboration. Excitingly,\n        <span className='text-primary'>\n          \n          I've been recommended by the Service Selection Board (SSB) for Officer\n          entry in the Indian Navy, a testament\n        </span>\n        to my teamwork and leadership skills.\n  ",
  ProjectDescription:
    "Following are some of the exciting endeavors I've embarked on. Each project reflects my dedication to coding and creating meaningful digital experiences. Take a tour, and if you're curious or have any thoughts to share, feel free to reach out.",
  ProjectTitle: "Default",
  HeroTitle: "Animated and Responsive portfolio in just 5min!",
  AboutTitle: "About",
  AboutMainDescription:
    "<p>\n  Having ventured into Frontend, Backend, and UI/UX design realms, akin to\n  the versatile All Rounders in cricket who excel in both bowling and\n  batting, \n  <span className='text-primary'>\n    I embrace the title of a Full Stack developer with a distinct flair\n    for Frontend intricacies 😁 \n  </span>\n</p>",
  FootTitle:
    "💖 Default version - Crafted with Next.js 14, Tailwind CSS, Framer Motion, Shadcn UI, Radix UI, and React Icons",
  projectDetails: [
    {
      projectHostedLink:
        "https://learn-stock-trading.000webhostapp.com/?home=firstTime",
      projectType: "fullstack",
      projectDescription:
        "Users can browse live stocks as per National stock exchange - India, when ever a user completes his/her signup he is credited Rs 1lac (virtual currency) and the user can use this virtual curreny to buy stocks, whenever the user sells the stocks, the amount credited is as per the latest stock prices.",
      projectImage:
        "https://user-images.githubusercontent.com/111000515/251038755-3eed0115-7085-4b5c-8bee-9952b18adc09.png",
      projectGithubLink: "https://github.com/hi-Kartik2004/TradingApp",
      projectTechStack: [
        "JavaScript",
        "PHP",
        "MySql",
        "HTML 5",
        "CSS 5",
        "Hack",
      ],
      projectName:
        "Trading Arena - Real Time Stock Trading Simulation / Stocks Playground",
      projectId: 0,
    },
    {
      projectGithubLink: "https://github.com/hi-Kartik2004/CodeFury-6.0",
      projectTechStack: [
        "Rest APIs",
        "AJAX",
        "JavaScript",
        "PHP",
        "MySql",
        "HTML 5",
        "CSS 5",
        "Hack",
      ],
      projectName: "Digital Clinic - A Web App Addressing Mental Health Issues",
      projectDescription:
        "Application Offers Mental Health Assessment, Social Media & Articles Summariser, Articles on imporving mental health & digital Wellbeing, Community Articles with edit and delete Functionality by the creator, Online Counselling or meetup Sessions Scheduler, with edit and delete Functionality by the creator, Admin Panel, Track Login history.",
      projectType: "fullstack",
      projectHostedLink:
        "https://digital-clinic.000webhostapp.com/?home=firstTime",
      projectImage:
        "https://user-images.githubusercontent.com/111000515/282149083-1d053699-0281-4c93-a6fb-2b646d7bbd1b.png",
      projectId: 1,
    },
    {
      projectTechStack: [
        "HTML 5",
        "CSS 5",
        "JavaScript",
        "Responsive Design",
        "SEO",
        "UED",
        "Scemantic HTML",
        "Animations",
      ],
      projectGithubLink: "https://github.com/SDSIG/Codefury_6.0",
      projectType: "frontend",
      projectImage: "https://i.postimg.cc/sDqdnrwS/image.png",
      projectId: 2,
      projectDescription:
        "Built an visually appealling Event website, where visitors could know more about the hackathon and also register for the same, increased the number of registrations by 30% as compared to the previous year.",
      projectName:
        "Event Website for CodeFury 6.0 - Annual National Level Hackathon",
      projectHostedLink: "https://codefury.in",
    },
    {
      projectGithubLink: "https://github.com/hi-Kartik2004/Portfolio",
      projectHostedLink: "https://hi-kartik2004.github.io/Portfolio",
      projectTechStack: [
        "GSAP Animation",
        "CSS 5",
        "JavaScript",
        "Modern Design",
        "Responsive Design",
        "Scemantic HTML",
      ],
      projectDescription:
        "My Personal Portfolio, where you can know more about myself, my skills, my projects, what I do and contact me.",
      projectId: 4,
      projectName: "Portfolio - My Personal Portfolio Website",
      projectType: "frontend",
      projectImage: "https://i.postimg.cc/mkr31K92/image.png",
    },
    {
      projectType: "backend",
      projectImage:
        "https://propertywiselaunceston.com.au/wp-content/themes/property-wise/images/thumbnail-default@2x.png",
      projectId: 3,
      projectTechStack: ["phpMailer", "PHP", "CSV", "MySql", "hostinger"],
      projectName:
        "Mass Email Sender - A Web App for sending customized mass emails",
      projectHostedLink: "",
      projectDescription:
        "Developed a Responsive web application where organisations can send customised mass mails in text and html format directly from a CSV file.\n • Reduced the time to send mass emails by 400% per email.",
      projectGithubLink: "https://github.com/hi-Kartik2004/Read-csv",
    },
    {
      projectDescription:
        "A Modern Furniture store, with Animations and over 10 pages with modern design with Parallax effect and a fully responsive design, with multiple components, contact form and a newsletter subscription form.",
      projectId: 5,
      projectType: "design",
      projectHostedLink: "https://hi-kartik2004.github.io/furniture-store",
      projectImage: "https://i.postimg.cc/NFVs7rK2/image.png",
      projectTechStack: ["Responsive User Design", "Webflow", "Ui/UX"],
      projectName:
        "Modern Furniture Store Frontend - A Web App for a Furniture Store",
    },
  ],
  linkedinUrl: "https://www.linkedin.com/in/kartikeya-saini-65504b240/",
  HeroGradient: "Create & Manage your impressive,",
  ProjectBadge: "hi-kartik2004",
};

export default data;
