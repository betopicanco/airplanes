import { GetServerSidePropsContext } from "next";
import H1 from "../../components/headings/H1";
import LayoutDefault from "../../components/layout";
import BgDefault from "../../components/layout/BgDefault";
import ParseDate from "../../components/ParseDate";
import Table from "../../components/table";
import TBody from "../../components/table/TBody";
import Thead from "../../components/table/Thead";
import AddCrewMember from "../../components/travels/actions/AddCrewMember";
import AddPassenger from "../../components/travels/actions/AddPassenger";
import CrewMembersTuple from "../../components/travels/crewMembers";
import PassengersTuple from "../../components/travels/passengers";
import ITravel from "../../interfaces/ITravel";
import ITraveller from "../../interfaces/ITraveller";
import ITypeTraveller from "../../interfaces/ITypeTraveller";
import api from "../../services/api";

interface ShowTravelProps {
  travel: ITravel,
  travelTravellers: {
    passengers: {
      id: string,
      traveller: any,
      type_traveller: ITypeTraveller
    }[],
    crewMembers: {
      id: string,
      traveller: ITraveller,
      type_traveller: ITypeTraveller
    }[]
  }
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const id = context.params?.id;
  const { 
    travel, 
    travel_travellers_ids: travel_travellers
  } = await api.get(`/travels/${id}`).then(res => res.data);

  if (!travel) {
    return {
      redirect: {
        destination: '/travels/'
      }
    }
  }
  
  const travelTravellers = await api.post('/traveltravellers/',{
    travel_travellers: travel_travellers
  }).then(res => res.data);

  return {
    props: {
      travel,
      travelTravellers
    }
  }
}

export default function ShowTravel(
  { travel, travelTravellers }: ShowTravelProps
) {
  const { id, airplane, date } = travel;
  const { passengers, crewMembers } = travelTravellers;
  const crewMembersTable = (
    <Table>
      <Thead
        headers={[
          'Cargo',
          'Nome',
          'Email',
          'Ações'
        ]}
      />
      <TBody>
        {crewMembers.map((crewMember, index) => {
          return (
            <CrewMembersTuple
              id={crewMember.id}
              key={index}
              position={crewMember.type_traveller.name}
              traveller={crewMember.traveller}
            />
          );
        })}
      </TBody>
    </Table>
  );
  const passengersTable = (
    <Table>
      <Thead
        headers={[
          'Nome',
          'Email',
          'Ações'
        ]}
      />
      <TBody>
        {passengers.map((passenger, index) => {
          return (
            <PassengersTuple
              id={passenger.id}
              key={index}
              traveller={passenger.traveller}
            />
          );
        })}
      </TBody>
    </Table>
  );

  return (
    <BgDefault>
      <LayoutDefault>
        <main className={` 
          mx-8 sm:mx-24 mt-20 pt-12 
        `}>
          <div className={` 
            flex justify-between 
            font-bold bg-white 
            py-2 px-4 rounded-md
          `}>
            <div>
              <H1>
                {`${airplane.place} - ${airplane.model}`}
              </H1>
            </div>

            <div className={`my-auto`}>
              <ParseDate date={date} />
            </div>
          </div>

          <div className={`px-2`}>
            <div className={` py-8 `}>
              <h2 className={` font-bold my-4 `}>
                <span className={`text-white text-2xl `}>
                  Tripulantes
                </span>
              </h2>

              <div className={`md:w-2/5`}>
                <AddCrewMember
                  travel_id={id}
                />
              </div>

              <div className={` pt-6 `}>
                {(crewMembers.length > 0) && crewMembersTable}
              </div>
            </div>

            <div className={` py-8 `}>
              <h2 className={` font-bold my-4 block`}>
                <span className={`text-white text-2xl `}>
                  Passageiros
                </span>
              </h2>

              <div className={`md:w-2/5`}>
                <AddPassenger
                  travel_id={id}
                />
              </div>

              <div className={` pt-6 w-2/3 mx-auto `}>
                {(passengers.length > 0) && passengersTable}
              </div>
            </div>
          </div>
        </main>
      </LayoutDefault>
    </BgDefault>
  );
}