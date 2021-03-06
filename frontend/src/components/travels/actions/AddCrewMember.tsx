import { useEffect, useState } from "react";
import ITraveller from "../../../interfaces/ITraveller";
import ITypeTraveller from "../../../interfaces/ITypeTraveller";
import api from "../../../services/api";
import SecondaryButton from "../../buttons/SecondaryButton";

export default function AddCrewMember({travel_id}: { travel_id: string }) {
  const [ travellers, setTravellers ] = useState<ITraveller[]>([]);
  const [ typesTraveller, setTypesTravellers ] = useState<ITypeTraveller[]>([]);

  useEffect(() => {
    api.get('/travellers/').then( res => {
      setTravellers(res.data);
    }).catch(err => console.error(err));

    api.get('/typestravellers/crew-members').then( res => {
      setTypesTravellers(res.data);
    })
  }, []);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const email_traveller = event.target.traveller.value;
    const type_traveller_id = event.target.type_traveller.value;

    api.post('/travels/traveller', {
      travel_id,
      email_traveller,
      type_traveller_id
    }).then(res => {
      window.location.reload();
    }).catch(err => console.error(err));
  }

  if(travellers && typesTraveller) {
    return (
      <form className={`my-2 flex justify-between`} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="type_traveller" className={`block font-bold`}>
            Cargo: 
          </label>
          <select required id={'type_traveller'} className={`
            py-2 px-4 mt-2
            border border-neutral-300 
            rounded-md shadow-md
          `}>
            {typesTraveller.map((type, index) => {
              return (
                <option key={index} value={type.id}>
                  {type.name}
                </option>
              );
            })}
          </select>
        </div>

        <div className={`mx-4`}>
          <label htmlFor={'traveller'} className={`block font-bold`}>
            Nome ou Email:
          </label>
          <input required list={'travellers_list'} id={'traveller'} className={`
            py-2 px-4 mt-2
            border border-neutral-300 
            rounded-md shadow-md
          `}/>
          <datalist id={'travellers_list'}>
            {travellers.map((traveller, index) => {
              return (
                <option key={index} value={traveller.email}>
                  {traveller.name}
                </option>
              );
            })}
          </datalist>
        </div>

        <div className={`mt-auto`}>
          <SecondaryButton type={'submit'}>
            Adicionar
          </SecondaryButton>
        </div>
      </form>
    );
  } else {
    return (
      <p>Carregando...</p>
    );
  }
}