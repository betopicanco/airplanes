import { useState } from "react";
import ITraveller from "../../../interfaces/ITraveller";
import api from "../../../services/api";
import PrimaryButton from "../../buttons/PrimaryButton";
import Input from "../../inputs";
import Date from "../../inputs/Date";
import Modal from "../../modal";

export default function CreateEditTraveller(
  {close, traveller}: {close: () => void, traveller?: ITraveller} 
) {
  const [ name, setName ] = useState(traveller ? traveller.name : '');
  const [ email, setEmail ] = useState(traveller ? traveller.email : '');
  const [ birth, setBirth ] = useState(traveller?.birth);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if(traveller) {
      // Edita o avião
      await api.put(`/travellers/${traveller.id}`, {
        name,
        birth,
      }).then(res => {
        window.location.reload();
      }).catch(err => console.error(err))

    } else {
      // Cria um novo avião
      await api.post('/travellers/', {
        name,
        email,
        birth,
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
          label={'Nome'} 
          value={name} 
          onChange={(e: any) => setName(e.target.value)}
        />

        <Input 
          type={'email'}
          label={'Email'} 
          value={email} 
          onChange={(e: any) => setEmail(e.target.value)}
        />

        <Date
          label={'Data de Nascimento'}
          value={birth ? birth.toString() : ''}
          handleChange={(e: any) => setBirth(e.target.value)}
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