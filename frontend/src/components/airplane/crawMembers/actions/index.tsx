import { useState } from "react";
import PencilIcon from "../../../icons/PencilIcon";
import TrashIcon from "../../../icons/TrashIcon";
import DeleteCrawMembers from "./DeleteCrawMember";
import EditCrawMember from "./EditCrawMember";

interface CrawMemberProps {
  position: string,
  name: string,
  email: string
}

export default function CrawMembersActions(
  { crawMember }: { crawMember: CrawMemberProps }
) {
  const [ showDelete, setShowDelete ] = useState(false);
  const [ showEdit, setShowEdit ] = useState(false);

  return (
    <div className={` flex justify-center `}>
      <span className={` py-1 px-2 mx-2 `} onClick={() => setShowEdit(true)}>
        <PencilIcon style={` h-6 w-6 stroke-indigo-500 `}/>
      </span>

      {showEdit && (
        <EditCrawMember crawMember={crawMember} close={() => setShowEdit(false)}/>
      )}

      <span 
        className={` py-1 px-2 mx-2 `} 
        onClick={() => setShowDelete(true)}>
        <TrashIcon style={` h-6 w-6 stroke-red-400 `}/>
      </span>

      {showDelete && (
        <DeleteCrawMembers name={crawMember.name} close={() => setShowDelete(false)}/>
      )}
    </div>
  )
}