import PrimaryButton from "../../buttons/PrimaryButton";
import Modal from "../../modal";

export default function DeleteAirplane(
  { id, model, close }: { id: string, model: string, close: () => void }
) {
  return (
    <Modal closeModal={close}>
      <div>
        <strong className={` text-red-500 text-2xl `}>
          Deseja realmente excluir o avião { model }?
        </strong>

        <div className={` pt-8 `}>
          <PrimaryButton>
            Confirmar
          </PrimaryButton>
        </div>
      </div>
    </Modal>
  );
}