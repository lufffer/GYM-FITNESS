import SelectedPage from "../../index.types";

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
};

export default Props;
