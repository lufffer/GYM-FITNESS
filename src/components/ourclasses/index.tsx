import React from "react";
import { motion } from "framer-motion";

import H1 from "../h1";
import Class from "./Class";

import Props from "./index.types";
import SelectedPage from "../../index.types";
import { title } from "process";

const OurClasses = ({ setSelectedPage, data }: Props) => {
  const arr = data.allMarkdownRemark.edges;
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <H1>OUR CLASSES</H1>
            <p className="py-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Excepturi necessitatibus hic fugiat sapiente dicta culpa! Dolore
              corporis assumenda doloremque iure dolores incidunt fugiat cum
              unde, eum laudantium? Exercitationem, illum similique.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {arr.map((data) => (
              <Class
                title={data.node.frontmatter!.title}
                description={data.node.frontmatter!.description}
                image={data.node.frontmatter!.Image}
                imagealt={data.node.frontmatter!.image_alt}
                key={data.node.frontmatter!.title}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
