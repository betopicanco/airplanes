import { useState } from "react";
import PrimaryButton from "../../../buttons/PrimaryButton";
import Input from "../../../inputs";
import Modal from "../../../modal";

interface EditPassengerProps {
  passenger: {
    name: string,
    email: string
  },
  close: () => void
}

export default function EditPassenger(
  { passenger, close }: EditPassengerProps
) {
  const [ name, setName ] = useState(passenger.name);
  const [ email, setEmail ] = useState(passenger.email);

  return (
    <Modal closeModal={close}>
      <form>
        <strong className={` text-2xl `}>
          {name}
        </strong>

        <Input 
          label={'Nome'} 
          value={name} 
          onChange={(e: any) => setName(e.target.value) }
        />

        <Input
          type={'email'}
          label={'Email'} 
          value={email} 
          onChange={(e: any) => setEmail(e.target.value) }
        />

        <div className={` pt-8 `}>
          <PrimaryButton type={'submit'}>
            Confirmar
          </PrimaryButton>
        </div>
      </form>
    </Modal>
  )
}