import { GetServerSidePropsContext } from "next";
import SecondaryButton from "../../components/buttons/SecondaryButton";
import H1 from "../../components/headings/H1";
import LayoutDefault from "../../components/layout";
import BgDefault from "../../components/layout/BgDefault";
import ParseDate from "../../components/ParseDate";
import AddCrewMember from "../../components/travels/actions/AddCrewMember";
import AddPassenger from "../../components/travels/actions/AddPassenger";
import ITravel from "../../interfaces/ITravel";
import api from "../../services/api";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const id = context.params?.id;
  const travel = await api.get(`/travels/${id}`).then(res => {
    return res.data;
  });

  if (!travel) {
    return {
      redirect: {
        destination: '/travels/'
      }
    }
  }

  return {
    props: {
      travel
    }
  }
}

export default function ShowTravel({ travel }: { travel: ITravel }) {
  const { id, airplane, date } = travel;

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
            <div>
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
                {/* {crewMembersTable} */}
              </div>
            </div>
            <div>
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
                {/* {passengersTable} */}
              </div>
            </div>
          </div>
        </main>
      </LayoutDefault>
    </BgDefault>
  );
}