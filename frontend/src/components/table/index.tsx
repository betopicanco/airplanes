
interface TableProps {
  children: JSX.Element[],
  fixed?: boolean | undefined
}

export default function Table({ children, fixed = true }: TableProps) {
  let style = 'border border-blue-800 w-full  ' ;
  style += fixed ? 'table-fixed' : 'table-auto';
  
  return (
    <table className={style}>
      { children }
    </table>
  );
}