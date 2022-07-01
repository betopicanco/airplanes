import TableProps from "./TableProps";

export default function Table({ children }: TableProps) {
  return (
    <table className={` 
      border-2 border-blue-800 table-fixed w-full 
    `}>
      { children }
    </table>
  );
}