import { useState } from "react";
import PrimaryButton from "../../../buttons/PrimaryButton";
import Input from "../../../inputs";
import Modal from "../../../modal";

interface EditCrawMemberProps {
  crawMember: {
    position: string,
    name: string,
    email: string
  },
  close: () => void
}

export default function EditCrawMember(
  { crawMember, close }: EditCrawMemberProps
) {
  const [ position, setPosition ] = useState(crawMember.position);
  const [ name, setName ] = useState(crawMember.name);
  const [ email, setEmail ] = useState(crawMember.email);

  return (
    <Modal closeModal={close}>
      <form>
        <strong className={` text-2xl `}>
          {name}
        </strong>

        <Input 
          label={'Cargo'} 
          value={position} 
          onChange={(e: any) => setPosition(e.target.value) }
        />

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