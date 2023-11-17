import SectionHeading from "@/app/components/SectionHeading";
import React from "react";
import { Button } from "@/app/components/ui/button";
import EditPortfolio from "@/app/components/EditPortfolio";

function EditPortfolioPage() {
  return (
    <section className="container">
      <div>
        <SectionHeading
          title="Edit your"
          badge="Your area"
          gradientText="Portfolio"
        />
        <p className="text-muted-foreground">
          <Button variant="link" className="p-0 pr-2">
            How to make your portfolio?
          </Button>
          Not Sure how to get started or are you new to coding, don't worry what
          you are about to do isn't coding, but we suggest you watch this 2min
          video for better understanding.{" "}
        </p>
      </div>

      <EditPortfolio />
    </section>
  );
}

export default EditPortfolioPage;
