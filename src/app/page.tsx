import { Button } from "@/components/ui/button";
import Description from "@/components/ui/common/Description";
import Heading from "@/components/ui/common/Heading";
import StatsCard from "@/components/ui/common/StatsCard";
import Container from "@/components/ui/containers/Container";
import GridContainer from "@/components/ui/containers/GridContainer";
import about from "@/content/About";
import hero from "@/content/Hero";
import services from "@/content/Services";
import stats from "@/content/Stats";
import Image from "next/image";
import React from "react";
import ServicesCard from "@/components/ui/common/ServicesCard";
import projects from "@/content/Projects";
import ProjectsCard from "@/components/ui/common/ProjectsCard";
import partners from "@/content/Partners";

const Home = () => {
  return (
    <>
      <main className="pt-6 pb-8 bg-gray-200">
        <Container
          size="sm"
          className="col-span-full min-h-screen flex flex-col justify-center items-start gap-4"
        >
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
        </Container>
      </main>

      <section className="py-8 lg:py-20">
        <Container size="sm">
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
        </Container>
      </section>

      <section className="py-8 lg:py-20 bg-gray-200">
        <Container size="sm">
          <GridContainer>
            <Heading className="col-span-full text-center mb-2">
              {services.title}
            </Heading>

            {services.services.map((service) => (
              <ServicesCard
                key={service.id}
                icon={<service.icon />}
                title={service.title}
                description={service.description}
              />
            ))}
          </GridContainer>
        </Container>
      </section>

      <section className="py-8 lg:py-20">
        <Container size="sm">
          <GridContainer>
            <Heading className="col-span-full mb-2">{projects.title}</Heading>

            {projects.projects.map((project) => (
              <ProjectsCard
                key={project.id}
                image={project.image}
                title={project.title}
                description={project.description}
              />
            ))}
          </GridContainer>
        </Container>
      </section>

      <section className="py-8 lg:py-20 bg-gray-200">
        <Container size="sm">
          <GridContainer>
            <Heading className="col-span-full text-center mb-2">
              {partners.title}
            </Heading>

            {partners.partners.map((partner) => (
              <div
                key={partner.id}
                className="relative aspect-square col-span-2 sm:col-span-1 lg:col-span-3 xl:col-span-2"
              >
                <Image
                  src={partner.image.src}
                  alt={partner.image.alt}
                  fill
                  objectFit="cover"
                />
              </div>
            ))}
          </GridContainer>
        </Container>
      </section>
    </>
  );
};

export default Home;
