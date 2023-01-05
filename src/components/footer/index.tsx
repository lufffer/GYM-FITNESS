import { StaticImage } from "gatsby-plugin-image";

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <StaticImage alt="logo" src="../../images/Logo.png" />
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa porro
            laboriosam tenetur alias ipsam minima iure modi eveniet commodi
            nulla numquam dicta, quaerat explicabo asperiores libero rerum ad
            accusamus officia!
          </p>
          <small>&copy; Evogym All Rights Reserved.</small>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Lorem, ipsum dolor.</p>
          <p className="my-5">Et gravida id et etiam</p>
          <p>Ullamcorper vivamus</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Tempus metus mattis risus volutpat egestas.</p>
          <p>(333)425-6825</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
