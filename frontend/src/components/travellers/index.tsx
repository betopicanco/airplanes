import ITraveller from "../../interfaces/ITraveller";
import ParseDate from "../ParseDate";
import Td from "../table/Td";
import TravellerActions from "./actions";

export default function TravellerTuple({traveller}: {traveller: ITraveller}) {
  const {
    name,
    email,
    birth
  } = traveller;
  
  return (
    <>
      <tr className={` 
      hover:bg-indigo-100
      `}>
        <Td>
          {name}
        </Td>

        <Td>
          {email}
        </Td>

        <Td>
          {<ParseDate date={birth}/>}
        </Td>

        <Td>
          <TravellerActions 
            traveller={traveller}
          />
        </Td>
      </tr>
    </>
  );
}