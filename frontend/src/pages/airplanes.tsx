import { NextPage } from "next";
import { useEffect, useState } from "react";
import AirplaneInfo from "../components/airplane";
import CreateEditAirplane from "../components/airplane/actions/CreateEditAirplane";
import PrimaryButton from "../components/buttons/PrimaryButton";
import H1 from "../components/headings/H1";
import LayoutDefault from "../components/layout";
import BgDefault from "../components/layout/BgDefault";
import Table from "../components/table";
import TBody from "../components/table/TBody";
import Thead from "../components/table/Thead";
import api from "../services/api";

const Airplanes: NextPage = () => {
  const [ showCreate, setShowCreate ] = useState(false);
  const [ airplanes, setAirplanes ] = useState([]);

  useEffect(() => {
    api.get('/airplanes/').then(res => {
      setAirplanes(res.data);
    });
  }, []);

  return (
    <BgDefault>
      <LayoutDefault>
        <div className={` 
          mx-8 sm:mx-24 mt-20 pt-12
        `}>
          <div className={` mb-8 flex justify-between `}>
            <H1>
              Aviões
            </H1>

            {showCreate && (
              <CreateEditAirplane close={() => setShowCreate(false)}/>
            )}

            <PrimaryButton onClick={() => setShowCreate(true)}>
              Adicionar
            </PrimaryButton>
          </div>

          <Table>
            <Thead headers={[
              'Placa',
              'Modelo',
              'Companhia Aérea',
              'Limite de Bagagem', 
              'Limite de Assentos',
              'Ações'
            ]}/>
            <TBody>
              {airplanes.map((airplane, index) => {
                return (
                  <AirplaneInfo airplane={airplane} key={index}/>
                );
              })}
            </TBody>
          </Table>
        </div>
      </LayoutDefault>
    </BgDefault>
  );
}

export default Airplanes;