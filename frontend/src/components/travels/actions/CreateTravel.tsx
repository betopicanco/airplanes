import { useEffect, useState } from "react";
import AirplaneInterface from "../../../interfaces/IAirplane";
import api from "../../../services/api";
import PrimaryButton from "../../buttons/PrimaryButton";
import Input from "../../inputs";
import Modal from "../../modal";

export default function CreateTravel(
  { close }: { close: () => void }
) {
  const [ airplanes, setAirplanes ] = useState<AirplaneInterface[]>([]);
  const [ date, setDate ] = useState();
  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const airplane_id = event.target.airplane.value;
    await api.post('/travels/', {
      date,
      airplane_id
    })
      .then(res => window.location.reload())
      .catch(err => console.log(err))
  }

  useEffect(() => {
    api.get('/airplanes/').then(res => {
      setAirplanes(res.data);
    });
  }, [])

  const form = (
    <form onSubmit={handleSubmit}>
      <div className={` text-left w-full `}>
        <label className={` pr-2 font-bold `}>
          Avião:
        </label>
      </div>

        <select id={'airplane'} className={`
          py-2 px-4 my-2
          border border-neutral-300 
          rounded-md shadow-md
        `}>
          {airplanes.map((airplane) => {
            return (
              <option value={airplane.id}>
                {airplane.place} - {airplane.model}
              </option>
            );
          })}
        </select>
      

      <Input
        type={'date'}
        label={'Data'}
        onChange={(e: any) => setDate(e.target.value)}
      />


      <div className={` pt-8 text-center `}>
        <PrimaryButton type={'submit'}>
          Confirmar
        </PrimaryButton>
      </div>
    </form>
  );
  
  return (
    <Modal closeModal={close}>
      {airplanes.length ? (
        <>
          {form}
        </>
      ) : (
        <p>
          <strong>
            Ainda não há aviões disponíveis
          </strong>
        </p>
      )}
    </Modal>
  );
}