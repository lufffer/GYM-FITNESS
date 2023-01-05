import React, { useEffect, useState } from "react";

import { HeadFC, graphql } from "gatsby";

import Navbar from "../components/navbar";
import Home from "../components/home";
import Benefits from "../components/benefits";
import OurClasses from "../components/ourclasses";
import ContactUs from "../components/contactus";
import Footer from "../components/footer";

import SelectedPage from "../index.types";

const IndexPage: React.FC<Queries.IndexPageQuery> = ({ data }) => {
  console.log(data);
  const [selectedPage, setSelectedPage] = useState(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }

      if (window.scrollY !== 0) {
        setIsTopOfPage(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="absolute top-0 left-0 min-h-full app bg-gray-20 z[-10]">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} data={data} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  );
};

export default IndexPage;

export const query = graphql`
  query IndexPage {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            image_alt
            description
            Image {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`;

export const Head: HeadFC = () => <title>Home Page</title>;
