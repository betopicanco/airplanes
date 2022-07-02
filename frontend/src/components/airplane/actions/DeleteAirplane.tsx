import api from "../../../services/api";
import PrimaryButton from "../../buttons/PrimaryButton";
import Modal from "../../modal";

export default function DeleteAirplane(
  { id, model, close }: { id: string, model: string, close: () => void }
) {
  const handleDelete = async () => {
    await api.delete(`/airplanes/${id}`)
      .then(res => window.location.reload())
      .catch(err => console.error(err))

  }

  return (
    <Modal closeModal={close}>
      <form onSubmit={handleDelete}>
        <strong className={` text-red-500 text-2xl `}>
          Deseja realmente excluir o avião { model }?
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