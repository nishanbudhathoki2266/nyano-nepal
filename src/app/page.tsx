import { Button } from "@/components/ui/button";
import Container from "@/components/ui/containers/Container";
import GridContainer from "@/components/ui/containers/GridContainer";
import React from "react";

const Home = () => {
  return (
    <main>
      <Container size="sm">
        <GridContainer>
          <main className="col-span-full min-h-screen flex flex-col justify-center items-start gap-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold capitalize">
              Donate surplus clothes today
            </h1>
            <p className="text-sm md:text-base lg:text-lg max-w-6xl">
              Transform Nepali lives by donating your gently used clothes
              through our platform. Help us spread warmth and support to those
              in need across Nepal. Together, we can make a meaningful
              difference.
            </p>
            <Button size="xl">Ignite Hope</Button>
          </main>
        </GridContainer>
      </Container>
    </main>
  );
};

export default Home;
