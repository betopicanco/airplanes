import api from "../../../services/api";
import PrimaryButton from "../../buttons/PrimaryButton";
import Modal from "../../modal";

interface IDeleteTraveller {
  id: string,
  name: string,
  close: () => void
}

export default function DeleteTraveller({ id, name, close }: IDeleteTraveller) {
  const handleDelete = async () => {
    await api.delete(`travellers/${id}`)
      .then(res => window.location.reload())
      .catch(err => console.error(err))
  }

  return (
    <Modal closeModal={close}>
      <form onSubmit={handleDelete}>
        <strong className={` text-red-500 text-2xl `}>
          Deseja realmente excluir { name }?
        </strong>

        <div className={` pt-8 `}>
          <PrimaryButton type={'submit'}>
            Confirmar
          </PrimaryButton>
        </div>
      </form>
    </Modal>
  );
}