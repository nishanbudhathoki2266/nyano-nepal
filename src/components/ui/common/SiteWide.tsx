"use client";

import React, { Fragment } from "react";

import Heading from "./Heading";
import footers from "../../../content/Footer";
import Link from "next/link";
import GridContainer from "../containers/GridContainer";

const SiteWide = () => {
  return (
    <GridContainer>
      {footers.map((footer) => (
        <div
          className="col-span-full md:col-span-2 lg:col-span-4 flex flex-col justify-start"
          key={footer.heading}
        >
          <Heading isTertiary className="mb-4">
            {footer.heading}
          </Heading>

          <ul className="flex flex-col justify-center gap-2">
            {footer.links
              ? footer.links.map((link) => (
                  <li key={link.link}>
                    <Link href={link.href} className="text-sm md:text-base">
                      {link.link}
                    </Link>
                  </li>
                ))
              : footer.texts.map((text) => (
                  <li key={text.text}>
                    <p onClick={text.onclick} className="text-sm md:text-base">
                      {text.text}
                    </p>
                  </li>
                ))}
          </ul>
        </div>
      ))}
    </GridContainer>
  );
};

export default SiteWide;
