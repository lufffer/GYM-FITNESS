import React from "react";
import { motion } from "framer-motion";

import H1 from "../h1";
import Benefit from "./Benefit";

import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";

import Props from "./index.types";
import SelectedPage from "../../index.types";
import { StaticImage } from "gatsby-plugin-image";
import ActionButton from "../../features/ActionButton";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.25 },
  },
};

const benefits = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of Art Facilities",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus esse possimus quod. Eligendi earum labore porro ratione deserunt, hic cumque.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus esse possimus quod. Eligendi earum labore porro ratione deserunt, hic cumque.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus esse possimus quod. Eligendi earum labore porro ratione deserunt, hic cumque.",
  },
];

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div onViewportEnter={() => SelectedPage.Benefits}>
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <H1>MORE THAN JUST A GYM.</H1>
          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </motion.div>
        <motion.div
          className="md:flex items-center justify-between gap-8 mt-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          <div className="md:w-[50%]">
            <StaticImage
              className="mx-auto"
              alt="benefits page graphics"
              src="../../images/BenefitsPageGraphic.png"
              placeholder="blurred"
            />
          </div>
          <div className="relative md:w-[50%]">
            <div className="before:absolute before:-top-20 before:-left-20 before:z-10 before:content-abstractwaves">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <H1>
                  MILLION OF HAPPY MEMBERS GETTING{" "}
                  <span className="text-primary-500">FIT</span>
                </H1>
              </motion.div>
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam voluptatum, sit pariatur sint quaerat non nemo iusto
                nisi quidem delectus dignissimos, eos quisquam inventore beatae
                ipsam. Fugit earum possimus provident!
              </p>
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati, excepturi magni ipsum eum ipsa iure explicabo minus
                neque molestias amet consequatur aut itaque cumque eligendi
                nostrum corporis non temporibus molestiae.
              </p>
            </motion.div>
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
