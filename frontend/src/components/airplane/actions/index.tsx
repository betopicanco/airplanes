import { useState } from "react";
import AirplaneInterface from "../../../interfaces/IAirplane";
import PencilIcon from "../../icons/PencilIcon";
import TrashIcon from "../../icons/TrashIcon";
import DeleteAirplane from "./DeleteAirplane";
import CreateEditAirplane from "./CreateEditAirplane";

export default function Actions({ airplane }: {airplane: AirplaneInterface}) {
  const { id, model } = airplane;
  const [ showDelete, setShowDelete ] = useState(false);
  const [ showEdit, setShowEdit ] = useState(false);

  return (
    <div className={` flex justify-center `}>
      <span className={` py-1 px-2 mx-2 `} onClick={() => setShowEdit(true)}>
        <PencilIcon style={` h-6 w-6 stroke-indigo-500 `}/>
      </span>

      {showEdit && (
        <CreateEditAirplane 
          airplane={airplane} 
          close={() => setShowEdit(false)}
        />
      )}

      <span className={` py-1 px-2 mx-2 `} onClick={() => setShowDelete(true)}>
        <TrashIcon style={` h-6 w-6 stroke-red-400 `}/>
      </span>

      {showDelete && (
        <DeleteAirplane model={model} id={id} close={() => setShowDelete(false)}/>
      )}
    </div>
  );
}