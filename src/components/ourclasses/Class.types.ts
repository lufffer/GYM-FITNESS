import { IGatsbyImageData } from "gatsby-plugin-image";

type Props = {
  title: string | null;
  description: string | null;
  imagealt: string | null;
  image: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    } | null;
  } | null;
};

export default Props;
