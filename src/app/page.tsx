import { Button } from "@/components/ui/button";
import React from "react";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col justify-center gap-4 items-center">
      <h2 className="text-5xl font-bold">Nyano Nepal</h2>
      <p className="text-sm max-w-7xl text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam similique
        sequi dignissimos tenetur voluptatem eos, odio, iste ratione fuga
        perspiciatis dolores sit earum, consequuntur voluptates voluptatum saepe
        veniam est possimus.
      </p>
      <Button size="lg">Learn More</Button>
    </main>
  );
};

export default Home;
