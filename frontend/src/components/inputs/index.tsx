import InputProps from "./InputProps";

export default function Input({ type = 'text', value, label, onChange, min, required }: InputProps) {
  return (
    <div className={` m-4 `}>
      <div className={` text-left w-full `}>
        <label className={` pr-2 font-bold `}>
          {label}:
        </label>
      </div>

      <input 
        type={type} 
        min={min} 
        value={value} 
        onChange={(e) => onChange(e)}
        required={required}
        className={`
          py-2 px-4 
          border border-neutral-300 
          rounded-md shadow-md
        `}
      />
    </div>
  );
}