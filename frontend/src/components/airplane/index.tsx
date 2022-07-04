import IAirplane from "../../interfaces/IAirplane";
import Td from "../table/Td";
import Actions from "./actions";

export default function AirplaneInfo(
    { airplane }: { airplane: IAirplane }
) {
  const {
    place,
    model,
    airline, 
    baggage_limit: baggageLimit, 
    seat_limit: seatLimit, 
  } = airplane;

  return (
    <tr className={` hover:bg-indigo-100 `}>
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
  );
}