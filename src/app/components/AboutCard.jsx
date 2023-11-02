import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { BsCodeSlash } from "react-icons/bs";
import { Button } from "../components/ui/button";

function AboutCard({ title, description, buttonMsg, icon }) {
  return (
    <Card className="bg-secondary">
      <CardHeader>
        <CardTitle className="flex gap-4 items-center">
          {icon === "BsCodeSlash" && <BsCodeSlash className="h-12 w-12" />}
          <p className="text-lg">{title}</p>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>
          <p className="text-sm">{description}</p>
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Button>{buttonMsg}</Button>
      </CardFooter>
    </Card>
  );
}

export default AboutCard;
