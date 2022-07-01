import SecondaryButton from "../buttons/SecondaryButton";

interface ModalProps {
  children: JSX.Element,
  closeModal: () => void
}

export default function Modal({ children, closeModal }: ModalProps) {
  return (
    <div
      className={`
        justify-center items-center flex 
        overflow-x-hidden overflow-y-auto 
        fixed inset-0 z-50 
        outline-none focus:outline-none
        bg-transparent/30
      `}>
      <div
        className={` 
          relative w-auto my-6 mx-auto max-w-3xl 
        `}>
        <div
          className={`
            border-2 border-blue-800 
            rounded-lg shadow-lg 
            relative flex flex-col w-full
            bg-white outline-none focus:outline-none p-4
          `}>
          <div className="text-right p-1">
            <SecondaryButton onClick={() => closeModal}>
              Cancelar
            </SecondaryButton>
          </div>

          <div className={` py-8 px-4`}>
            { children }
          </div>
        </div>
      </div>
    </div>
  );
}