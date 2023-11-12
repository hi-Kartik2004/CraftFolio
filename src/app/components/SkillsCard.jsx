import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Progress } from "../components/ui/progress";

function SkillsCard({ badgeText, title, description, progress }) {
  return (
    <Card className="max-w-[350px] w-full bg-card hover:bg-primary-foreground duration-500">
      <CardHeader>
        <div>
          <Badge>{badgeText}</Badge>
        </div>
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-4">
        <span className="text-sm text-muted-foreground">Versitality</span>
        <Progress value={progress} />
      </CardContent>
    </Card>
  );
}

export default SkillsCard;
