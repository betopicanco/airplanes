import { useRouter } from "next/router";
import ITravel from "../../interfaces/ITravel";
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

export default function TravelTuple({ travel }: { travel: ITravel }) {
  const router = useRouter();

  return (
    <>
      <tr onClick={() => router.push(`/travels/${travel?.id}`)} className={` 
      hover:bg-indigo-100 text-bold
        hover:underline
        hover:cursor-pointer
      `}>
        <Td>
          {`${travel.airplane?.place} - ${travel.airplane?.model}`}
        </Td>

        <Td>
          {<ParseDate date={travel?.date}/>}
        </Td>
       </tr>
    </>
  );
}