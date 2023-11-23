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
import { motion } from "framer-motion";

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
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 10 },
                }}
              >
                <Card className="bg-card  max-w-[400px] w-full hover:bg-primary-foreground duration-500">
                  <CardHeader>
                    <div className="mb-2 flex justify-between">
                      <Badge className="bg-right-gradient">
                        {project.projectType}
                      </Badge>

                      <div className="flex gap-4 justify-center">
                        {project.projectGithubLink && (
                          <Link
                            href={`${project.projectGithubLink}`}
                            target="_blank"
                          >
                            <BsGithub size={25} />
                          </Link>
                        )}
                        {project.projectHostedLink && (
                          <Link
                            href={`${project.projectHostedLink}`}
                            target="_blank"
                          >
                            <GoLinkExternal size={25} />
                          </Link>
                        )}
                      </div>
                    </div>

                    <CardTitle className="text-lg">
                      <Link href={project.projectHostedLink} target="_blank">
                        {project.projectName}
                      </Link>
                    </CardTitle>
                    <div className="text-sm text-muted-foreground">
                      {project.projectDescription}
                      <div className="mt-4 flex gap-2 flex-wrap">
                        {project.projectTechStack.map((tech) => {
                          return <Badge>{tech}</Badge>;
                        })}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <img
                      src={project.projectImage}
                      alt={project.projectName}
                      className="bg-secondary-foreground rounded-md h-[200px] w-full object-cover object-top"
                    />
                  </CardContent>
                </Card>
              </motion.div>
            );
          })
      }
    </TabsContent>
  );
}

export default ProjectTab;
