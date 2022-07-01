import PrimaryButton from "../../../buttons/PrimaryButton";
import Modal from "../../../modal";

export default function DeleteCrawMembers(
  { name, close }: { name: string, close: () => void }
) {
  return (
    <Modal closeModal={close}>
      <div>
        <strong className={` text-red-500 text-2xl `}>
          Deseja realmente excluir o tripulante { name }?
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