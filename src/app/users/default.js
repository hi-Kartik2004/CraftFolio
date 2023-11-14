import React from "react";

const data = {
  NavName: "Kartikeya Saini",
  FirstName: "Kartikeya",
  LastName: "Saini",
  NavSubtitle: "B.Tech, ISE UVCE (Batch of 2025)",
  image: "https://avatars.githubusercontent.com/u/111000515?v=4",
  resumeLink:
    "https://hi-kartik2004.github.io/Portfolio/assets/pdf/Kartikeya_Resume_June_2023.pdf",
  githubId: "hi-kartik2004",
  linkedinUrl: "https://www.linkedin.com/in/kartikeya-saini-65504b240/",
  WhatsAppLink: "https://wa.me/916360006359",
  email: "kudlu2004@gmail.com",
  HeroTitle: () => (
    <>
      <span className="bg-gradient-to-br from-left-gradient to-right-gradient text-clip bg-clip-text text-transparent">
       Default Page,
      </span>{" "}
      <br className="hidden md:inline-block" />
      <p className="mt-1">Building Tomorrow's Digital Landscape.</p>
    </>
  ),
  HeroSubtitle: () => (
    <React.Fragment className="text-muted-foreground">
      As a 2nd-year Information Science Engineering undergrad, I thrive as a
      Front-End Developer, notably contributing to Cisco ThingQBator where I
      built a responsive website for Project Shield. My innovative projects,
      like the Real-Time Stock Trading Simulation and Customized Mass Email
      Sender, showcase my expertise in web development. With a strong academic
      record and coding contest victories, I'm passionate about crafting
      seamless and engaging user experiences.
    </React.Fragment>
  ),
  AboutBadge: "Proud Geek_",
  AboutTitle: "About",
  AboutTitleGradient: "Default",
  AboutDescription:
    "I'm excited to share a bit about myself with you. Thanks for showing interest! Below, you'll find a glimpse into my journey, experiences, and passion for coding. Feel free to explore, and if you have any questions or just want to connect, I'm all ears.",
  AboutImageLeft:
    "https://hi-kartik2004.github.io/Portfolio/assets/img/dp3_side_pose_v2.jpg",
  AboutImageCenter: "https://avatars.githubusercontent.com/u/111000515?v=4",
  AboutImageRight:
    "https://media-maa2-2.cdn.whatsapp.net/v/t61.24694-24/349035960_938959620717155_2274104282359227756_n.jpg?ccb=11-4&oh=01_AdQ6Rtl8GUNVubjPEGKZfqp0ti7m6DswGst_M0nvcQAbsQ&oe=655CCFAE&_nc_sid=e6ed6c&_nc_cat=110",
  AboutMainDescription: () => (
    <React.Fragment className="text-muted-foreground">
      <p>
        Having ventured into Frontend, Backend, and UI/UX design realms, akin to
        the versatile All Rounders in cricket who excel in both bowling and
        batting,{" "}
        <span className="text-primary">
          I embrace the title of a Full Stack developer with a distinct flair
          for Frontend intricacies 😁{" "}
        </span>
      </p>
    </React.Fragment>
  ),

  AboutOtherDescription: () => {
    return (
      <React.Fragment className="text-muted-foreground">
        Delving into the tech world, I've worn multiple hats – from being an
        active{" "}
        <span className="text-primary">
          {" "}
          volunteer at IEEE to currently being a part of the Executive team at
          Google Developer Student Clubs (GDSC).
        </span>{" "}
        It's not just about the code for me; it's about community and
        collaboration. Excitingly,{" "}
        <span className="text-primary">
          {" "}
          I've been recommended by the Service Selection Board (SSB) for Officer
          entry in the Indian Navy, a testament{" "}
        </span>
        to my teamwork and leadership skills.
      </React.Fragment>
    );
  },

  AboutMockCode: `const name = 'Kartikeya';
  Developer dev = new Developer(name);

  while (dev.isCoding()) {
    dev.listenToMusic();
    dev.openStackOverflow(); 
    dev.drinkWater();
  }
`,
  ProjectBadge: "hi-kartik2004",
  ProjectTitle: "Default",
  ProjectTitleGradient: "Projects!",
  ProjectDescription:
    "Following are some of the exciting endeavors I've embarked on. Each project reflects my dedication to coding and creating meaningful digital experiences. Take a tour, and if you're curious or have any thoughts to share, feel free to reach out.",
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
  projectDetails: [
    {
      projectId: 0,
      projectName:
        "Trading Arena - Real Time Stock Trading Simulation / Stocks Playground",
      projectDescription:
        "Users can browse live stocks as per National stock exchange - India, when ever a user completes his/her signup he is credited Rs 1lac (virtual currency) and the user can use this virtual curreny to buy stocks, whenever the user sells the stocks, the amount credited is as per the latest stock prices.",
      projectImage:
        "https://user-images.githubusercontent.com/111000515/251038755-3eed0115-7085-4b5c-8bee-9952b18adc09.png",
      projectType: "fullstack",
      projectTechStack: [
        "JavaScript",
        "PHP",
        "MySql",
        "HTML 5",
        "CSS 5",
        "Hack",
      ],
      projectGithubLink: "https://github.com/hi-Kartik2004/TradingApp",
      projectHostedLink:
        "https://learn-stock-trading.000webhostapp.com/?home=firstTime",
    },
    {
      projectId: 1,
      projectName: "Digital Clinic - A Web App Addressing Mental Health Issues",
      projectDescription:
        "Application Offers Mental Health Assessment, Social Media & Articles Summariser, Articles on imporving mental health & digital Wellbeing, Community Articles with edit and delete Functionality by the creator, Online Counselling or meetup Sessions Scheduler, with edit and delete Functionality by the creator, Admin Panel, Track Login history.",
      projectImage:
        "https://user-images.githubusercontent.com/111000515/282149083-1d053699-0281-4c93-a6fb-2b646d7bbd1b.png",
      projectType: "fullstack",
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
      projectGithubLink: "https://github.com/hi-Kartik2004/CodeFury-6.0",
      projectHostedLink:
        "https://digital-clinic.000webhostapp.com/?home=firstTime",
    },
    {
      projectId: 2,
      projectName:
        "Event Website for CodeFury 6.0 - Annual National Level Hackathon",
      projectDescription:
        "Built an visually appealling Event website, where visitors could know more about the hackathon and also register for the same, increased the number of registrations by 30% as compared to the previous year.",
      projectImage: "https://i.postimg.cc/sDqdnrwS/image.png",
      projectType: "frontend",
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
      projectHostedLink: "https://codefury.in",
    },
    {
      projectId: 4,
      projectName: "Portfolio - My Personal Portfolio Website",
      projectDescription:
        "My Personal Portfolio, where you can know more about myself, my skills, my projects, what I do and contact me.",
      projectImage: "https://i.postimg.cc/mkr31K92/image.png",
      projectType: "frontend",
      projectTechStack: [
        "GSAP Animation",
        "CSS 5",
        "JavaScript",
        "Modern Design",
        "Responsive Design",
        "Scemantic HTML",
      ],
      projectGithubLink: "https://github.com/hi-Kartik2004/Portfolio",
      projectHostedLink: "https://hi-kartik2004.github.io/Portfolio",
    },
    {
      projectId: 3,
      projectName:
        "Mass Email Sender - A Web App for sending customized mass emails",
      projectDescription:
        "Developed a Responsive web application where organisations can send customised mass mails in text and html format directly from a CSV file.\n • Reduced the time to send mass emails by 400% per email.",
      projectImage:
        "https://propertywiselaunceston.com.au/wp-content/themes/property-wise/images/thumbnail-default@2x.png",
      projectType: "backend",
      projectTechStack: ["phpMailer", "PHP", "CSV", "MySql", "hostinger"],
      projectGithubLink: "https://github.com/hi-Kartik2004/Read-csv",
      projectHostedLink: "",
    },
    {
      projectId: 5,
      projectName:
        "Modern Furniture Store Frontend - A Web App for a Furniture Store",
      projectDescription:
        "A Modern Furniture store, with Animations and over 10 pages with modern design with Parallax effect and a fully responsive design, with multiple components, contact form and a newsletter subscription form.",
      projectImage: "https://i.postimg.cc/NFVs7rK2/image.png",
      projectType: "design",
      projectTechStack: ["Responsive User Design", "Webflow", "Ui/UX"],
      projectHostedLink: "https://hi-kartik2004.github.io/furniture-store",
    },
  ],
  SkillsBadge: "Full Stack Developer | 3rd Year Undergrad",
  SkillsTitle: "Default",
  SkillsTitleGradient: "Skills!",
  SkillsDescription:
    "Dive into the realm of my skill set—an ever-growing toolbox tailored for crafting digital wonders. From mastering languages like C++ and JavaScript to navigating frameworks like React and Next.js, my journey is an ongoing exploration of the tech landscape.",
  skillsData: [
    {
      badgeText: "500+ DSA & CP Questions solved",
      title: "C and C++",
      description:
        "Mastering the art of algorithmic design and problem-solving through the versatile languages of C and C++.",
      progress: 90,
    },
    {
      badgeText: "Advanced",
      title: "HTML 5",
      description:
        "Crafting dynamic and responsive web pages with the latest features and capabilities of HTML 5.",
      progress: 90,
    },
    {
      badgeText: "Advanced",
      title: "CSS 5",
      description:
        "Elevating user interfaces through the expressive styling and layout capabilities of CSS 5.",
      progress: 90,
    },
    {
      badgeText: "Intermediate",
      title: "JavaScript",
      description:
        "Building interactive and engaging web experiences with the power of JavaScript.",
      progress: 75,
    },
    {
      badgeText: "Intermediate",
      title: "PHP",
      description:
        "Creating server-side applications and dynamic web content using the versatile scripting language PHP.",
      progress: 75,
    },
    {
      badgeText: "Intermediate",
      title: "MySQL",
      description:
        "Managing and querying databases seamlessly with the robust relational database system MySQL.",
      progress: 75,
    },
    {
      badgeText: "Intermediate",
      title: "Next.js",
      description:
        "Developing scalable and efficient web applications using the React framework with Next.js.",
      progress: 75,
    },
    {
      badgeText: "Intermediate",
      title: "Firebase",
      description:
        "Leveraging Firebase to integrate powerful backend services seamlessly into web and mobile applications.",
      progress: 75,
    },
    {
      badgeText: "Advanced",
      title: "Radix UI",
      description:
        "Crafting elegant and efficient user interfaces with the powerful Radix UI library.",
      progress: 95,
    },
    {
      badgeText: "Advanced",
      title: "Git & Github",
      description:
        "Ensuring version control mastery and collaborative development using Git and Github.",
      progress: 95,
    },
    {
      badgeText: "Beginner",
      title: "Docker",
      description:
        "Embarking on containerization journeys with Docker for scalable and portable application deployment.",
      progress: 50,
    },
    {
      badgeText: "Beginner",
      title: "Angular",
      description:
        "Exploring the Angular framework to build dynamic and feature-rich single-page applications.",
      progress: 50,
    },
    {
      badgeText: "Advanced",
      title: "Figma & Adobe Illustrator",
      description:
        "Transforming ideas into visually stunning designs with proficiency in Figma and Adobe Illustrator.",
      progress: 80,
    },
    {
      badgeText: "Intermediate",
      title: "Framer Motion",
      description:
        "Animating user interfaces and adding motion to web applications using the Framer Motion library.",
      progress: 60,
    },
    {
      badgeText: "Advanced",
      title: "Content Creation/Curation",
      description:
        "Curating compelling content and engaging media for a captivating digital presence.",
      progress: 90,
    },
  ],

  FooterBadge: "Default Version",
  FooterDescription:
    "I appreciate your visit! Feel free to connect with me on various social media platforms; I'll respond within 24 hours.",
  FooterSliderTitle:
    "Expect a response within 24 hours when you reach out via email!",
  FootTitle:
    "💖 Default version - Crafted with Next.js 14, Tailwind CSS, Framer Motion, Shadcn UI, Radix UI, and React Icons",
};

export default data;
