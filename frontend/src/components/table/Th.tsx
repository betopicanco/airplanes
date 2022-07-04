import TableProps from "./TableProps";

export default function Th({ children }: TableProps) {
  return (
    <th className={` 
      px-4 py-2  border-b-2 border-blue-800 text-xl 
    `}>
      { children }
    </th>
  );
}