import { useRouter } from "next/router";
import ParseDate from "../ParseDate";
import Td from "../table/Td";

interface TravelProps {
  id: string,
  airplane: {
    id: string
    place: string
    model: string
  },
  date: Date
}

export default function TravelTuple({ id, airplane, date }: TravelProps) {
  const router = useRouter();

  return (
    <>
      <tr onClick={() => router.push(`/travels/${id}`)} className={` 
      hover:bg-indigo-100 text-bold
        hover:underline
        hover:cursor-pointer
      `}>
        <Td>
          {`${airplane.place} - ${airplane.model}`}
        </Td>

        <Td>
          {<ParseDate date={date}/>}
        </Td>
       </tr>
    </>
  );
}