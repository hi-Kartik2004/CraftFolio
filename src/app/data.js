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
  linkedinId: "https://www.linkedin.com/in/kartikeya-saini-65504b240/",
  WhatsAppLink: "https://wa.me/916360006359",
  email: "kudlu2004@gmail.com",
  HeroTitle: () => (
    <>
      Lorem ipsum dolor sit amet{" "}
      <span className="bg-gradient-to-br from-left-gradient to-right-gradient text-clip bg-clip-text text-transparent">
        adipisicing
      </span>{" "}
      elit. Voluptate dolores facilis omnis?
    </>
  ),
  HeroSubtitle: () => (
    <React.Fragment className="text-muted-foreground">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate dolores
      facilis omnis? sit amet consectetur adipisicing elit. Voluptate dolores
      facilis omnis? sit amet consectetur adipisicing elit. Voluptate dolores
      facilis omnis?
    </React.Fragment>
  ),
  AboutBadge: "Proud Geek_",
  AboutTitle: "About",
  AboutTitleGradient: "Me",
  AboutDescription:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptat dolores facilis omnis?  sit amet consectetur adipisicing elit. Voluptat dolores facilis omnis?",
  AboutImageLeft:
    "https://hi-kartik2004.github.io/Portfolio/assets/img/dp3_side_pose_v2.jpg",
  AboutImageCenter: "https://avatars.githubusercontent.com/u/111000515?v=4",
  AboutImageRight:
    "https://media-maa2-2.cdn.whatsapp.net/v/t61.24694-24/349035960_938959620717155_2274104282359227756_n.jpg?ccb=11-4&oh=01_AdQ6Rtl8GUNVubjPEGKZfqp0ti7m6DswGst_M0nvcQAbsQ&oe=655CCFAE&_nc_sid=e6ed6c&_nc_cat=110",
  AboutMainDescription: () => (
    <React.Fragment className="text-muted-foreground">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptat
        dolores{" "}
        <span className="text-primary">
          facilis omnis? sit amet consectetur adipisicing elit. Voluptat dolores{" "}
        </span>
        facilis omnis?{" "}
      </p>
    </React.Fragment>
  ),

  AboutOtherDescription: () => {
    return (
      <React.Fragment className="text-muted-foreground">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        <span className="text-primary">
          {" "}
          dolores facilis omnis? sit amet consectetur adipisicing elit.
          Voluptate{" "}
        </span>
        dolores facilis omnis? sit amet consectetur adipisicing elit. Voluptate
        dolores facilis omnis?
      </React.Fragment>
    );
  },

  AboutMockCode: "import something\n do something\n Next Line here\n",
  ProjectBadge: "hi-kartik2004",
  ProjectTitle: "My",
  ProjectTitleGradient: "Projects!",
  ProjectDescription:
    "lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptat dolores facilis omnis? sit amet consectetur adipisicing elit. Voluptat dolores facilis omnis?",
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
  ],
  projectDetails: [
    {
      projectId: 0,
      projectName: "Project1",
      projectDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iure molestiae necessitatibus.",
      projectImage:
        "https://user-images.githubusercontent.com/111000515/251038755-3eed0115-7085-4b5c-8bee-9952b18adc09.png",
      projectType: "fullstack",
      projectTechStack: ["react", "nextjs", "tailwindcss"],
      projectGithubLink: "https://github.com/hi-kartik2004",
      projectHostedLink: "https://hi-kartik2004.github.io/Portfolio",
    },
    {
      projectId: 0,
      projectName: "Project1",
      projectDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iure molestiae necessitatibus.",
      projectImage:
        "https://user-images.githubusercontent.com/111000515/251038755-3eed0115-7085-4b5c-8bee-9952b18adc09.png",
      projectType: "fullstack",
      projectTechStack: ["react", "nextjs", "tailwindcss"],
      projectGithubLink: "https://github.com/hi-kartik2004",
      projectHostedLink: "https://hi-kartik2004.github.io/Portfolio",
    },
    {
      projectId: 1,
      projectName: "Project1",
      projectDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iure molestiae necessitatibus.",
      projectImage:
        "https://user-images.githubusercontent.com/111000515/282149083-1d053699-0281-4c93-a6fb-2b646d7bbd1b.png",
      projectType: "fullstack",
      projectTechStack: ["react", "nextjs", "tailwindcss"],
      projectGithubLink: "https://github.com/hi-kartik2004",
      projectHostedLink: "https://hi-kartik2004.github.io/Portfolio",
    },
    {
      projectId: 2,
      projectName: "Project2",
      projectDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iure molestiae necessitatibus.",
      projectImage: "https://i.postimg.cc/sDqdnrwS/image.png",
      projectType: "frontend",
      projectTechStack: ["react", "nextjs", "tailwindcss"],
      projectGithubLink: "https://github.com/hi-kartik2004",
      projectHostedLink: "https://hi-kartik2004.github.io/Portfolio",
    },
    {
      projectId: 5,
      projectName: "Project5",
      projectDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iure molestiae necessitatibus.",
      projectImage: "https://i.postimg.cc/NFVs7rK2/image.png",
      projectType: "frontend",
      projectTechStack: ["react", "nextjs", "tailwindcss"],
      projectGithubLink: "https://github.com/hi-kartik2004",
      projectHostedLink: "https://hi-kartik2004.github.io/Portfolio",
    },

    {
      projectId: 4,
      projectName: "frontend",
      projectDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iure molestiae necessitatibus.",
      projectImage: "https://i.postimg.cc/mkr31K92/image.png",
      projectType: "frontend",
      projectTechStack: ["react", "nextjs", "tailwindcss"],
      projectGithubLink: "https://github.com/hi-kartik2004",
      projectHostedLink: "https://hi-kartik2004.github.io/Portfolio",
    },
    {
      projectId: 3,
      projectName: "Project3",
      projectDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iure molestiae necessitatibus.",
      projectImage:
        "https://propertywiselaunceston.com.au/wp-content/themes/property-wise/images/thumbnail-default@2x.png",
      projectType: "backend",
      projectTechStack: ["react", "nextjs", "tailwindcss"],
      projectGithubLink: "https://github.com/hi-kartik2004",
      projectHostedLink: "https://hi-kartik2004.github.io/Portfolio",
    },
  ],
  SkillsBadge: "Full Stack Developer | 3rd Year Undergrad",
  SkillsTitle: "My",
  SkillsTitleGradient: "Skills!",
  SkillsDescription:
    "lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptat dolores facilis omnis? sit amet consectetur adipisicing elit. Voluptat dolores facilis omnis?",
  skillsData: [
    {
      badgeText: "500+ DSA & CP Questions solved",
      title: "C and C++",
      description: "lorem niing nirngi nrin ginri gnirn ignring irnign irng",
      progress: 90,
    },
    {
      badgeText: "Advanced",
      title: "HTML 5",
      description: "lorem niing nirngi nrin ginri gnirn ignring irnign irng",
      progress: 90,
    },
    {
      badgeText: "Advanced",
      title: "CSS 5",
      description: "lorem niing nirngi nrin ginri gnirn ignring irnign irng",
      progress: 90,
    },
    {
      badgeText: "Intermediate",
      title: "JavaScript",
      description: "lorem niing nirngi nrin ginri gnirn ignring irnign irng",
      progress: 75,
    },
    {
      badgeText: "Intermediate",
      title: "PHP",
      description: "lorem niing nirngi nrin ginri gnirn ignring irnign irng",
      progress: 75,
    },
    {
      badgeText: "Intermediate",
      title: "MySql",
      description: "lorem niing nirngi nrin ginri gnirn ignring irnign irng",
      progress: 75,
    },
    {
      badgeText: "Intermediate",
      title: "NextJs",
      description: "lorem niing nirngi nrin ginri gnirn ignring irnign irng",
      progress: 75,
    },
    {
      badgeText: "Intermediate",
      title: "Firebase",
      description: "lorem niing nirngi nrin ginri gnirn ignring irnign irng",
      progress: 75,
    },
    {
      badgeText: "Advanced",
      title: "Radix",
      description: "lorem niing nirngi nrin ginri gnirn ignring irnign irng",
      progress: 95,
    },
    {
      badgeText: "Advanced",
      title: "Git & Github",
      description: "lorem niing nirngi nrin ginri gnirn ignring irnign irng",
      progress: 95,
    },
    {
      badgeText: "Beginner",
      title: "Docker",
      description: "lorem niing nirngi nrin ginri gnirn ignring irnign irng",
      progress: 50,
    },
    {
      badgeText: "Beginner",
      title: "Angular",
      description: "lorem niing nirngi nrin ginri gnirn ignring irnign irng",
      progress: 50,
    },
    {
      badgeText: "Advanced",
      title: "Figma & Adobe Illustrator",
      description: "lorem niing nirngi nrin ginri gnirn ignring irnign irng",
      progress: 80,
    },
    {
      badgeText: "Intermediate",
      title: "Video Editing",
      description: "lorem niing nirngi nrin ginri gnirn ignring irnign irng",
      progress: 60,
    },
    {
      badgeText: "Advanced",
      title: "Content Creation/Curation",
      description: "lorem niing nirngi nrin ginri gnirn ignring irnign irng",
      progress: 90,
    },
  ],
  FooterBadge: "Thanks for visiting!",
  FooterTitle: "Kartikeya Saini",
  FooterDescription:
    "I am available on almost every social media. You can message me, I will reply within 24 hours.",
  FooterSliderTitle:
    "I will try to get in touch with you within 24 hours on your email!",
  FootTitle:
    "💖 Build using Nextjs 14, Tailwind CSS, Shadcn UI and React Icons",
};

export default data;
