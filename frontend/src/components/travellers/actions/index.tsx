import { useState } from "react";
import ITraveller from "../../../interfaces/ITraveller";
import PencilIcon from "../../icons/PencilIcon";
import TrashIcon from "../../icons/TrashIcon";
import CreateEditTraveller from "./CreateEditTraveller";
import DeleteTraveller from "./DeleteTraveller";

export default function TravellerActions({ traveller }: { traveller: ITraveller }) {
  const [ showDelete, setShowDelete ] = useState(false);
  const [ showEdit, setShowEdit ] = useState(false);

  return (
    <div className={` flex justify-center `}>
      <span className={` py-1 px-2 mx-2 hover:cursor-pointer `} onClick={() => setShowEdit(true)}>
        <PencilIcon style={` h-6 w-6 stroke-indigo-500 `}/>
      </span>

      {showEdit && (
        <CreateEditTraveller
          traveller={traveller}
          close={() => setShowEdit(false)}
        />
      )}

      <span className={` py-1 px-2 mx-2 hover:cursor-pointer `} onClick={() => setShowDelete(true)}>
        <TrashIcon style={` h-6 w-6 stroke-red-400 `}/>
      </span>

      {showDelete && (
        <DeleteTraveller
          id={traveller.id}
          name={traveller.name}
          close={() => setShowDelete(false)}
        />
      )}
    </div>
  );
}