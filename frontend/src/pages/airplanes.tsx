import { NextPage } from "next";
import LayoutDefault from "../components/layout";
import BgDefault from "../components/layout/BgDefault";

const Airplanes: NextPage = () => {
  return (
    <BgDefault>
      <LayoutDefault>
        <h1>Aviões</h1>
      </LayoutDefault>
    </BgDefault>
  );
}

export default Airplanes;