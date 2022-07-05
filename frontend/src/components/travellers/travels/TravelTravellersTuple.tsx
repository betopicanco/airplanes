import { useRouter } from "next/router";
import ParseDate from "../../ParseDate";
import Td from "../../table/Td";

export default function TravelTravellersTuple(
  { id, date, type }: { id: string, date: Date, type: string }
) {
  const router = useRouter();

  return (
    <>
      <tr onClick={() => router.push(`/travels/${id}`)} className={` 
      hover:bg-indigo-100 text-bold
        hover:underline
        hover:cursor-pointer
      `}>
        <Td>
          <ParseDate date={date}/>
        </Td>

        <Td>
          {type}
        </Td>
      </tr>
    </>
  );
}