import TableProps from "./TableProps";

export default function TBody({ children }: TableProps) {
  return (
    <tbody className={` bg-white/75 text-lg  `}>
      { children }
    </tbody>
  );
}