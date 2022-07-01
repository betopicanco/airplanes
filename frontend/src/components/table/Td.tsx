import TableProps from "./TableProps";

export default function Td({ children }: TableProps) {
  return (
    <td className={` px-4 py-2 text-center `}>
      { children }
    </td>
  );
}