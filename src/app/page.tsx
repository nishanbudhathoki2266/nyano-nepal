import { Button } from "@/components/ui/button";
import Description from "@/components/ui/common/Description";
import Heading from "@/components/ui/common/Heading";
import StatsCard from "@/components/ui/common/StatsCard";
import Container from "@/components/ui/containers/Container";
import GridContainer from "@/components/ui/containers/GridContainer";
import React from "react";

const Home = () => {
  return (
    <main>
      <Container size="sm">
        <main className="col-span-full min-h-screen flex flex-col justify-center items-start gap-4 py-6 lg:py-8">
          <Heading isHero>Donate surplus clothes today</Heading>
          <Description className="max-w-6xl">
            Transform Nepali lives by donating your gently used clothes through
            our platform. Help us spread warmth and support to those in need
            across Nepal. Together, we can make a meaningful difference.
          </Description>
          <Button size="xl" className="mt-2">
            Ignite Hope
          </Button>

          <GridContainer className="mt-8 w-full mx-auto">
            {/* TODO: Loop over the content and render */}
            <StatsCard
              stat="10000+"
              description="Over 10,000 clothes donated, providing warmth across Nepal"
            />
            <StatsCard
              stat="2000+"
              description="Donated over 2000 times, impacting lives in Nepal."
            />
            <StatsCard
              stat="700+"
              description="700+ donors supporting communities in Nepal."
            />
            <StatsCard
              stat="120+"
              description="120+ agents ensuring efficient donation distribution."
            />
          </GridContainer>
        </main>
      </Container>
    </main>
  );
};

export default Home;
