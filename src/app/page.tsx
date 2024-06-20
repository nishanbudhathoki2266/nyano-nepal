import { Button } from "@/components/ui/button";
import Description from "@/components/ui/common/Description";
import Heading from "@/components/ui/common/Heading";
import Container from "@/components/ui/containers/Container";
import GridContainer from "@/components/ui/containers/GridContainer";
import React from "react";

const Home = () => {
  return (
    <main>
      <Container size="sm">
        <GridContainer>
          <main className="col-span-full min-h-screen flex flex-col justify-center items-start gap-4">
            <Heading isHero>Donate surplus clothes today</Heading>
            <Description className="max-w-6xl">
              Transform Nepali lives by donating your gently used clothes
              through our platform. Help us spread warmth and support to those
              in need across Nepal. Together, we can make a meaningful
              difference.
            </Description>
            <Button size="xl" className="mt-2">
              Ignite Hope
            </Button>
          </main>
        </GridContainer>
      </Container>
    </main>
  );
};

export default Home;
