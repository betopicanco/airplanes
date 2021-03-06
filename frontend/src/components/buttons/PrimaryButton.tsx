import ButtonProps from "./ButtonProps";

export default function PrimaryButton({ type = 'button', children, onClick }: ButtonProps) {
  return (
    <button 
      onClick={ onClick && (() => onClick())}
      type={type} 
      className={` 
        bg-blue-900 text-white 
        px-4 py-2 
        rounded-lg shadow-md 
        active:bg-blue-800
        outline outline-offset-2 outline-white
      `}
    >
      { children }
    </button>
  );
}