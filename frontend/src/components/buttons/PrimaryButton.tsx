import ButtonProps from "./ButtonProps";

export default function PrimaryButton({ type = 'button', children }: ButtonProps) {
  return (
    <button type={type} 
      className={` 
        bg-blue-900 text-white 
        p-4 
        rounded-lg shadow-md 
        active:bg-blue-800
      `}
    >
      { children }
    </button>
  );
}