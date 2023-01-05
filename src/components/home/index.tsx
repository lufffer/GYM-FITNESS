// React
import React, { useEffect, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

// My hooks
import useMediaQuery from "../../hooks/useMediaQuery";

// My components
import ActionButton from "../../features/ActionButton";

// Gatsby
import { StaticImage } from "gatsby-plugin-image";

// Types
import { Props } from "./index.type";
import SelectedPage from "../../index.types";
import { motion } from "framer-motion";

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediaScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      <motion.div
        className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        <div className="z-10 mt-32 md:basis-3/5">
          <motion.div
            className="mc:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                <StaticImage
                  alt="home-page-text"
                  src="../../images/HomePageText.png"
                  placeholder="none"
                  imgStyle={{ transition: "none" }}
                />
              </div>
            </div>
            <p className="mt-8 text-sm">
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
          </motion.div>
          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-600"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>
        <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
          <StaticImage
            alt="home-pageGraphic"
            src="../../images/HomePageGraphic.png"
            placeholder="blurred"
          />
        </div>
      </motion.div>
      {isAboveMediaScreens && (
        <div className="h-[150px] w-full bg-primary-100 py-10">
          <div className="mx-auto w-5/6">
            <div className="flex w-3/5 items-center justify-between gap-8">
              <StaticImage
                alt="redbull-sponsor"
                src="../../images/SponsorRedBull.png"
                placeholder="blurred"
              />
              <StaticImage
                alt="forbes-sponsor"
                src="../../images/SponsorForbes.png"
                placeholder="blurred"
              />
              <StaticImage
                alt="Fortune-sponsor"
                src="../../images/SponsorFortune.png"
                placeholder="blurred"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
