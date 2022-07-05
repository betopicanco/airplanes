import { useRouter } from "next/router";
import { useState } from "react";
import IAirplane from "../../interfaces/IAirplane";
import ParseDate from "../ParseDate";
import Table from "../table";
import TBody from "../table/TBody";
import Td from "../table/Td";
import Thead from "../table/Thead";
import Actions from "./actions";

export default function AirplaneTuple(
    { airplane }: { airplane: IAirplane }
) {
  const {
    place,
    model,
    airline, 
    baggage_limit: baggageLimit, 
    seat_limit: seatLimit,
    travels,
  } = airplane;
  const [ showTravels, setShowTravels ] = useState(false);
  const router = useRouter();
  const handleClick = () => {
    setShowTravels(!showTravels)
  }

  const travelsList = (
    <tr className={`text-center`}>
      <td></td>
      <td></td>
      <td colSpan={2}>
        <Table>
          <Thead
            headers={[
              'Viagens'
            ]}
          />
          <TBody>
            {travels.map((travel, index) => {
              return (
                <tr key={index} onClick={() => router.push(`/travels/${travel.id}`)} className={` 
                  hover:bg-indigo-100 
                  hover:underline
                  hover:cursor-pointer
                `}>
                  <Td>
                    <ParseDate date={travel.date}/>
                  </Td>
                </tr>
              );
            })}
          </TBody>
        </Table>
      </td>
      <td></td>
      <td></td>
    </tr>
  );

  return (
    <>
      <tr
        onClick={handleClick}
        className={` 
          hover:bg-indigo-100 
          hover:underline
          hover:cursor-pointer
        `}>
        <Td>
          {place}
        </Td>

        <Td>
          {model}
        </Td>

        <Td>
          {airline}
        </Td>

        <Td>
          {baggageLimit}
        </Td>

        <Td>
          {seatLimit}
        </Td>

        <Td>
          {<Actions airplane={airplane}/>}
        </Td>
      </tr>
      {showTravels && travelsList}
    </>
  );
}