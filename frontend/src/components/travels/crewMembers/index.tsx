import { useState } from "react";
import ITraveller from "../../../interfaces/ITraveller";
import TrashIcon from "../../icons/TrashIcon";
import Td from "../../table/Td";
import DeleteTraveller from "../actions/DeleteTraveller";

export default function CrewMembersTuple(
  { id, position, traveller }: { id: string, position: string, traveller: ITraveller }
) {
  const { 
    name,
    email,
  } = traveller;
  const [ showDelete, setShowDelete ] = useState(false);

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

      <Td>
        <span>
          <span className={` mx-auto `} onClick={() => setShowDelete(true)}>
            <TrashIcon
              style={`h-6 w-6 stroke-red-400`}
            />
          </span>

          {showDelete && (
            <DeleteTraveller 
              id={id}
              name={name}
              close={() => setShowDelete(false)}
            />
          )}
        </span>
      </Td>
    </tr>
  );
}