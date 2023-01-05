import SelectedPage from "../../index.types";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
  data: Queries.IndexPageQuery;
};

export default Props;
