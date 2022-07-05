import { useState } from "react";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import Input from "../../../components/inputs";
import LayoutDefault from "../../../components/layout";
import BgDefault from "../../../components/layout/BgDefault";
import ParseDate from "../../../components/ParseDate";
import Table from "../../../components/table";
import TravelTravellerTable from "../../../components/travellers/travels";
import ITraveller from "../../../interfaces/ITraveller";
import api from "../../../services/api";

export async function getServerSideProps() {
  const travellers = await api.get('/travellers').then(res => {
    return res.data;
  }).catch(err => console.error(err));

  return {
    props: {
      travellers
    }
  }
}

export default function SearchTraveller({ travellers }: { travellers: ITraveller[] }) {
  const [search, setSearch] = useState<string>('');
  const [traveller, setTraveller] = useState<ITraveller | undefined>();
  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const lowerSearch = search.toLocaleLowerCase();

    if (search.length > 0) {
      const result =  travellers.find((traveller) => {
        const isEmail = traveller.email.toLocaleLowerCase().includes(lowerSearch);
        const isName = traveller.name.toLocaleLowerCase().includes(lowerSearch);

        return isEmail || isName;
      });

      result ? setTraveller(result) : setTraveller(undefined);
    } else {
      setTraveller(undefined);
    }
  }

  return (
    <BgDefault>
      <LayoutDefault>
        <main className={` 
          mx-8 sm:mx-24 mt-20 pt-12
        `}>
          <div className={` mb-8 `}>
            <form onSubmit={handleSubmit} className={` flex `}>
              <div className={` mr-4 `}>
                <Input
                  label={'Passageiro ou Tripulante'}
                  type={'text'}
                  value={search}
                  onChange={(e: any) => setSearch(e.target.value)}
                />
              </div>

              <div className={` my-auto `}>
                <PrimaryButton type={'submit'}>
                  Buscar
                </PrimaryButton>
              </div>
            </form>

            {traveller && (
              <div>
                <section className={` m-4 p-4 bg-white md:w-1/2 rounded-lg`}>
                  <ul>
                    <li>
                      Nome: <strong> {traveller.name} </strong>
                    </li>

                    <li>
                      Email: <strong> {traveller.email} </strong>
                    </li>

                    <li>
                      Data de Nascimento: <strong><ParseDate date={traveller.birth}/></strong>
                    </li>
                  </ul>
                </section>

                <div className={` md:w-1/3 `}>
                  <h2 className={`text-white text-2xl my-4`}>
                    <strong>
                      Viagens:
                    </strong>
                  </h2>

                  <TravelTravellerTable traveller_id={traveller.id}/>
                </div>
              </div>
            )}
          </div>
        </main>
      </LayoutDefault>
    </BgDefault>
  );
}