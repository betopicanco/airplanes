import ButtonProps from "./ButtonProps";

export default function SecondaryButton({ type, children, onClick }: ButtonProps) {
  return (
    <button 
      onClick={ onClick && onClick()}
      type={type} 
      className={` 
        bg-white text-blue-900
        border-2 border-blue-800 
        p-2 
        rounded-lg shadow-md 
        active:bg-blue-800 active:text-white
      `}
    >
      <strong>
        { children }
      </strong>
    </button>
  );
}