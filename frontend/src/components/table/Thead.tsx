import Th from "./Th";

export default function Thead({ headers }: { headers: string[] }) {
  return (
    <thead className={'bg-white'}>
      <tr>
        {headers.map((header, index) => {
          return (
            <Th key={index}>
              { header }
            </Th>
          );
        })}
      </tr>
    </thead>
  );
}