import { NextPage } from "next";
import AirplaneInfo from "../components/airplane/AirplaneInfo";
import H1 from "../components/headings/H1";
import LayoutDefault from "../components/layout";
import BgDefault from "../components/layout/BgDefault";
import Table from "../components/table";
import TBody from "../components/table/TBody";
import Thead from "../components/table/Thead";

const Airplanes: NextPage = () => {

  const airplanes = [
    {
      id: '1',
      model: 'Boieng 777',
      baggage_limit: 577,
      seat_limit: 80,
      craw_members: [
        {
          position: 'Piloto',
          name: 'Miguel Farias',
          email: 'miguelfarias@email.com',
        },
        {
          position: 'Co-Piloto',
          name: 'Maria Clara',
          email: 'mariaclara@email.com',
        }
      ],
      passengers: [
        {
          name: 'Roberto Picanço',
          email: 'betopicanco@gmail.com',
        }
      ]
    }
  ];

  return (
    <BgDefault>
      <LayoutDefault>
        <div className={` 
          mx-8 sm:mx-24 mt-20 pt-12
        `}>
          <div className={` mb-8 `}>
            <H1>
              Aviões
            </H1>
          </div>

          <Table>
            <Thead headers={[
              'Modelo', 
              'Limite de Bagagem', 
              'Limite de Assentos', 
              'Tripulação', 
              'Passageiros',
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