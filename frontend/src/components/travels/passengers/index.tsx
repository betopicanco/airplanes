import ITraveller from "../../../interfaces/ITraveller";
import Td from "../../table/Td";

export default function PassengersTuple({ traveller }: { traveller: ITraveller }) {
  const { 
    name,
    email,
  } = traveller;

  return (
    <tr>
      <Td>
        {name}
      </Td>

      <Td>
        {email}
      </Td>
    </tr>
  );
}