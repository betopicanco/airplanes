import ITraveller from "../../../interfaces/ITraveller";
import Td from "../../table/Td";

export default function CrewMembersTuple(
  { position, traveller }: { position: string, traveller: ITraveller }
) {
  const { 
    name,
    email,
  } = traveller;

  return (
    <tr>
      <Td>
        {position}
      </Td>

      <Td>
        {name}
      </Td>

      <Td>
        {email}
      </Td>
    </tr>
  );
}