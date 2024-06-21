import { Button } from "@/components/ui/button";
import Description from "@/components/ui/common/Description";
import Heading from "@/components/ui/common/Heading";
import StatsCard from "@/components/ui/common/StatsCard";
import Container from "@/components/ui/containers/Container";
import GridContainer from "@/components/ui/containers/GridContainer";
import about from "@/content/About";
import hero from "@/content/Hero";
import stats from "@/content/Stats";
import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <Container size="sm">
      <main className="col-span-full min-h-screen flex flex-col justify-center items-start gap-4 py-6 lg:py-8">
        <Heading isHero>{hero.title}</Heading>
        <Description className="max-w-6xl">{hero.description}</Description>
        <Button size="xl" className="mt-2">
          {hero.cta.text}
        </Button>

        <GridContainer className="mt-8 w-full mx-auto">
          {stats.map((stat) => (
            <StatsCard
              key={stat.id}
              stat={stat.stat}
              description={stat.description}
            />
          ))}
        </GridContainer>
      </main>

      <section className="py-6 lg:py-8">
        <GridContainer>
          <div className="flex flex-col justify-center items-start gap-4 col-span-full xl:col-span-4">
            <Heading>{about.title}</Heading>
            <Description>
              <strong>
                {about.description.split(" ").slice(0, 2).join(" ")}
              </strong>{" "}
              {about.description.split(" ").slice(2).join(" ")}
            </Description>

            <Button size="xl" className="mt-2">
              {about.cta.text}
            </Button>
          </div>

          {about.images.map((image) => (
            <figure
              key={image.id}
              className="relative aspect-square overflow-hidden rounded-md col-span-full md:col-span-2 lg:col-span-6 xl:col-span-4"
            >
              <Image src={image.src} alt={image.alt} fill objectFit="cover" />
            </figure>
          ))}
        </GridContainer>
      </section>
    </Container>
  );
};

export default Home;
