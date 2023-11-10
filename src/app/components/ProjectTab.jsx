import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { GoLinkExternal } from "react-icons/go";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { TabsContent } from "../components/ui/tabs";
import { Badge } from "./ui/badge";

function ProjectTab({ projectDetails, value }) {
  return (
    <TabsContent
      value={value}
      className="w-full flex flex-wrap gap-8 justify-center items-center"
    >
      {
        // filter the projectDetails array based on the projectType with value frontend
        projectDetails
          .filter((project) => project.projectType === value || value === "all")
          .map((project) => {
            return (
              <Card className="bg-card  max-w-[400px] w-full">
                <CardHeader>
                  <div className="mb-2 flex justify-between">
                    <Badge className="bg-right-gradient">
                      {project.projectType}
                    </Badge>

                    <div className="flex gap-4 justify-center">
                      <Link href={`${project.projectGithubLink}`}>
                        <BsGithub size={25} />
                      </Link>

                      <Link href={`${project.projectHostedLink}`}>
                        <GoLinkExternal size={25} />
                      </Link>
                    </div>
                  </div>

                  <CardTitle className="text-lg">
                    <Link href={project.projectHostedLink}>
                      {project.projectName}
                    </Link>
                  </CardTitle>
                  <CardDescription>
                    {project.projectDescription}
                    <div className="mt-4 flex gap-2 flex-wrap">
                      {project.projectTechStack.map((tech) => {
                        return <Badge>{tech}</Badge>;
                      })}
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src={project.projectImage}
                    alt={project.projectName}
                    className="bg-secondary-foreground rounded-md h-[200px] w-full object-cover"
                  />
                </CardContent>
              </Card>
            );
          })
      }
    </TabsContent>
  );
}

export default ProjectTab;
