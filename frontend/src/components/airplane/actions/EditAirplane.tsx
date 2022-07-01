import { useState } from "react";
import AirplaneInterface from "../../../AirplaneInterface";
import PrimaryButton from "../../buttons/PrimaryButton";
import Input from "../../inputs";
import Modal from "../../modal";

export default function EditAirplane(
  { airplane, close }: { airplane: AirplaneInterface, close: () => void }
) {
  const [ model, setModel ] = useState(airplane.model);
  const [ baggageLimit, setBaggageLimit ] = useState(airplane.baggage_limit);
  const [ seatLimit, setSeatLimit ] = useState(airplane.seat_limit);

  return (
    <Modal closeModal={close}>
      <form>
        <strong className={` text-2xl `}>
          {model}
        </strong>

        <Input 
          label={'Modelo'} 
          value={model} 
          onChange={(e: any) => setModel(e.target.value)}
        />

        <Input
          type={'number'}
          label={'Limite de Bagagens'} 
          value={baggageLimit} 
          onChange={(e: any) => setBaggageLimit(e.target.value)}
        />

        <Input
          type={'number'}
          label={'Limite de Assentos'} 
          value={seatLimit} 
          onChange={(e: any) => setSeatLimit(e.target.value)}
        />

        <div className={` pt-8 `}>
          <PrimaryButton type={'submit'}>
            Confirmar
          </PrimaryButton>
        </div>
      </form>
    </Modal>
  );
}