import { useState } from "react";
import AirplaneInterface from "../../../interfaces/IAirplane";
import api from "../../../services/api";
import PrimaryButton from "../../buttons/PrimaryButton";
import Input from "../../inputs";
import Modal from "../../modal";

export default function CreateEditAirplane(
  { airplane, close }: { airplane?: AirplaneInterface, close: () => void }
) {
  const [ place, setPlace ] = useState(airplane?.place);
  const [ model, setModel ] = useState(airplane?.model);
  const [ airline, setAirline ] = useState(airplane?.airline);
  const [ baggage_limit, setBaggageLimit ] = useState(airplane?.baggage_limit);
  const [ seat_limit, setSeatLimit ] = useState(airplane?.seat_limit);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if(airplane) {
      // Edita o avião
      await api.put(`/airplanes/${airplane.id}`, {
        model,
        airline,
        baggage_limit,
        seat_limit 
      })
        .then(res => {
          console.log(res.data)
          window.location.reload();
        })
        .catch(err => console.error(err))
    } else {
      // Cria um novo avião
      await api.post('/airplanes/', {
        place,
        model,
        airline,
        baggage_limit,
        seat_limit 
      })
        .then(res => {
          console.log(res.data)
          window.location.reload();
        })
        .catch(err => console.error(err))
    }
  }

  return (
    <Modal closeModal={close}>
      <form onSubmit={handleSubmit}>
        <Input 
          label={'Placa'} 
          value={place} 
          onChange={(e: any) => setPlace(e.target.value)}
        />

        <Input 
          label={'Modelo'} 
          value={model} 
          onChange={(e: any) => setModel(e.target.value)}
        />

        <Input 
          label={'Companhia Aérea'} 
          value={airline} 
          onChange={(e: any) => setAirline(e.target.value)}
        />

        <Input
          type={'number'}
          label={'Limite de Bagagens'} 
          value={baggage_limit} 
          onChange={(e: any) => setBaggageLimit(e.target.value)}
        />

        <Input
          type={'number'}
          label={'Limite de Assentos'} 
          value={seat_limit} 
          onChange={(e: any) => setSeatLimit(e.target.value)}
        />

        <div className={` pt-8 text-center `}>
          <PrimaryButton type={'submit'}>
            Confirmar
          </PrimaryButton>
        </div>
      </form>
    </Modal>
  );
}