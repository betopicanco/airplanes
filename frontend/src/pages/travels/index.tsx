import { NextPage } from "next";
import { redirect } from "next/dist/server/api-utils";
import { useEffect, useState } from "react";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import H1 from "../../components/headings/H1";
import LayoutDefault from "../../components/layout";
import BgDefault from "../../components/layout/BgDefault";
import Table from "../../components/table";
import TBody from "../../components/table/TBody";
import Thead from "../../components/table/Thead";
import TravelTuple from "../../components/travels";
import CreateTravel from "../../components/travels/actions/CreateTravel";
import ITravel from "../../interfaces/ITravel";
import api from "../../services/api";

// Busca pela lista de viagens no banco
export async function getServerSideProps() {
  const travels = await api.get('/travels/').then(res => {
    return res.data;
  }).catch(err => console.error(err));

  return {
    props: {
      travels
    }
  }
}

export default function Travels({ travels }: { travels: ITravel[] }) {
  const [showCreate, setShowCreate] = useState(false);

  return (
    <BgDefault>
      <LayoutDefault>
        <main className={` 
          mx-8 sm:mx-24 mt-20 pt-12 
        `}>
          <div className={` mb-8 flex justify-between `}>
            <span>
              <H1>
                Viagens
              </H1>
            </span>

            {showCreate && (
              <CreateTravel close={() => setShowCreate(false)} />
            )}

            <PrimaryButton onClick={() => setShowCreate(true)}>
              Adicionar
            </PrimaryButton>
          </div>

          <div className={` w-3/5 mx-auto `}>
            <Table>
              <Thead headers={[
                'Avião',
                'Data',
              ]} />
              <TBody>
                {(travels.length) && travels.map((travel, index) => {
                  return (
                    <TravelTuple
                      key={index}
                      travel={travel}
                    />
                  );
                })}
              </TBody>
            </Table>
          </div>
        </main>
      </LayoutDefault>
    </BgDefault>
  );
}