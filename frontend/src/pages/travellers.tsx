import { NextPage } from "next";
import { useEffect, useState } from "react";
import PrimaryButton from "../components/buttons/PrimaryButton";
import H1 from "../components/headings/H1";
import LayoutDefault from "../components/layout";
import BgDefault from "../components/layout/BgDefault";
import Table from "../components/table";
import TBody from "../components/table/TBody";
import Thead from "../components/table/Thead";
import TravellerTuple from "../components/travellers";
import CreateEditTraveller from "../components/travellers/actions/CreateEditTraveller";
import ITraveller from "../interfaces/ITraveller";
import api from "../services/api";

const Travellers: NextPage = () => {
  const [ showCreate, setShowCreate ] = useState(false);
  const [ travellers, setTravellers ] = useState<ITraveller[]>([]);

  useEffect(() => {
    api.get('/travellers/').then(res => {
      setTravellers(res.data);
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
              Passageiros e Tripulação
            </H1>

            {showCreate && (
              <CreateEditTraveller close={() => setShowCreate(false)}/>
            )}

            <PrimaryButton onClick={() => setShowCreate(true)}>
              Adicionar
            </PrimaryButton>
          </div>

          <Table>
            <Thead headers={[
              'Nome',
              'Email',
              'Data de Nascimento',
              'Ações'
            ]}/>
            <TBody>
              {travellers.map((traveller, index) => {
                return (
                  <TravellerTuple key={index} traveller={traveller}/>
                );
              })}
            </TBody>
          </Table>
        </div>
      </LayoutDefault>
    </BgDefault>
  );
}

export default Travellers;