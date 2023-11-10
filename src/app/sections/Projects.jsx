"use client";
import { BsGithub } from "react-icons/bs";
import ProjectTab from "../components/ProjectTab";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs";

function Projects() {
  const projectDetails = [
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
    // {
    //   projectId: 6,
    //   projectName: "Project3",
    //   projectDescription:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iure molestiae necessitatibus.",
    //   projectImage:
    //     "https://hi-kartik2004.github.io/Portfolio/assets/img/wie_v13-02.png",
    //   projectType: "design",
    //   projectTechStack: ["react", "nextjs", "tailwindcss"],
    //   projectGithubLink: "https://github.com/hi-kartik2004",
    //   projectHostedLink: "https://hi-kartik2004.github.io/Portfolio",
    // },
    // {
    //   projectId: 7,
    //   projectName: "Project3",
    //   projectDescription:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iure molestiae necessitatibus.",
    //   projectImage:
    //     "https://i.postimg.cc/cC9QZTrg/image.png",
    //   projectType: "design",
    //   projectTechStack: ["react", "nextjs", "tailwindcss"],
    //   projectGithubLink: "https://github.com/hi-kartik2004",
    //   projectHostedLink: "https://hi-kartik2004.github.io/Portfolio",
    // },
  ];

  return (
    <section className="container">
      <div>
        <Badge className="gap-2 justify-center mb-2">
          <BsGithub /> hi-kartik2004
        </Badge>
        <h2 className=" mb-2 text-2xl font-bold">
          My{" "}
          <span className=" bg-gradient-to-b from-left-gradient to-right-gradient text-clip bg-clip-text text-transparent">
            Projects ;)
          </span>
        </h2>
        <p className="text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi expedita
          laboriosam quidem!
        </p>
      </div>

      <div className="mt-10">
        <Tabs defaultValue="all">
          <div className="flex justify-center">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="fullstack">Full Stack</TabsTrigger>
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="design">Design</TabsTrigger>
            </TabsList>
          </div>

          <div className="my-6">
            <ProjectTab projectDetails={projectDetails} value="all" />
            <ProjectTab projectDetails={projectDetails} value="frontend" />
            <ProjectTab projectDetails={projectDetails} value="fullstack" />
            <ProjectTab projectDetails={projectDetails} value="backend" />
            <ProjectTab projectDetails={projectDetails} value="design" />
          </div>
        </Tabs>
      </div>
    </section>
  );
}

export default Projects;
