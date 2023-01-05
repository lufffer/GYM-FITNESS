import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SelectedPage from "../../index.types";

import { Props } from "./Link.type";

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "");
  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage}
      ? "text-primary-500"
      : "" transition duration-500 hover:text-primary-300`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage as SelectedPage)}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
