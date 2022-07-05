interface DateProps {
  type?: 'date' | 'datetime-local'
  label: string,
  value: string | undefined,
  handleChange: (e: any) => void,
  required?: boolean
}

export default function Date(
  { label, value, required, handleChange, type = 'date' }: DateProps
) {
  return (
    <div className={` m-4 `}>
      <div className={` text-left w-full `}>
        <label className={` pr-2 font-bold `}>
          {label}:
        </label>
      </div>

      <input 
        type={type}
        value={value || ''} 
        required={required}
        onChange={handleChange}
        className={`
          py-2 px-4 
          border border-neutral-300 
          rounded-md shadow-md
        `}
      />
    </div>
  );
}