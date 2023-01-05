import React from "react";

import Props from "./index.types";

const H1 = ({ children }: Props) => {
  return (
    <h1 className="basis-3/5 font-montserrat text-3xl font-bold">{children}</h1>
  );
};

export default H1;
