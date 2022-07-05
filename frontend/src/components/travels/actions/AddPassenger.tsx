import { useEffect, useState } from "react";
import ITraveller from "../../../interfaces/ITraveller";
import ITypeTraveller from "../../../interfaces/ITypeTraveller";
import api from "../../../services/api";
import SecondaryButton from "../../buttons/SecondaryButton";

interface AddPassengerProps {
  travel_id: string;
}

export default function AddPassenger({ travel_id }: AddPassengerProps) {
  const [ travellers, setTravellers ] = useState<ITraveller[]>([]);
  const [ typeTraveller, setTypeTraveller ] = useState<ITypeTraveller>();
  useEffect(() => {
    api.get('/travellers/').then( res => {
      setTravellers(res.data);
    })
      .catch(err => console.error(err));

    api.get('/typestravellers').then( res => {
      const passengerType = res.data.find((type: { name: string }) => {
        return type.name == 'PASSAGEIRO(A)'
      })

      setTypeTraveller(passengerType);
    })
  }, []);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const email_traveller = event.target.traveller.value;
    const type_traveller_id = typeTraveller?.id;

    const data = {
      travel_id,
      email_traveller,
      type_traveller_id
    }

    await api.post('/travels/traveller', data).then(res => {
      window.location.reload();
    }).catch(err => console.error(err));
  }

  if(travellers && typeTraveller) {
    return (
      <form className={`my-2 flex justify-between`} onSubmit={handleSubmit}>
        <div className={`mr-8`}>
          <label htmlFor={'traveller'} className={`block font-bold`}>
            Email do Passageiro:
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