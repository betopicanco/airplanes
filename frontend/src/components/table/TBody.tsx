import TableProps from "./TableProps";

export default function TBody({ children }: TableProps) {
  return (
    <tbody className={` bg-white/80 text-lg  `}>
      { children }
    </tbody>
  );
}