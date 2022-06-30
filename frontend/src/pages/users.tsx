import { NextPage } from "next";
import LayoutDefault from "../components/layout";
import BgDefault from "../components/layout/BgDefault";

const Users: NextPage = () => {
  return (
    <BgDefault>
      <LayoutDefault>
        <p>Usuários</p>
      </LayoutDefault>
    </BgDefault>
  );
}

export default Users;