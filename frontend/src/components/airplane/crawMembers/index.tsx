import PencilIcon from "../../icons/PencilIcon";
import TrashIcon from "../../icons/TrashIcon";
import Table from "../../table";
import Td from "../../table/Td";
import Thead from "../../table/Thead";
import Actions from "../actions";
import CrawMembersActions from "./actions";

interface CrawMembersProps {
  crawMembers: {
    position: string,
    name: string,
    email: string
  }[],
  model: string
}

export default function CrawMembers({ model, crawMembers }: CrawMembersProps) {
  const actions = (
    <div className={` flex justify-center `}>
      <span className={` py-1 px-2 `}>
        <PencilIcon style={` h-6 w-6 stroke-purple-600 `}/>
      </span>

      <span className={` py-1 px-2 `}>
        <TrashIcon style={` h-6 w-6 stroke-red-400 `}/>
      </span>
    </div>
  );

  return (
    <tr className={` border-y border-blue-800 `}>
      <td></td>
      <td colSpan={4}>
        <div className={` 
          text-center bg-white border-x-2 border-t-2 border-blue-800 text-xl
          py-2
        `}>
          <strong>
            Tripulação { model }
          </strong>
        </div>
        <Table fixed={false}>
          <Thead headers={[
            'Cargo', 'Nome', 'Email', 'Ações'
          ]}/>
          <tbody>
            {crawMembers.map((crawMember, index) => {
              return (
                <tr key={index}>
                  <Td>
                    { crawMember.position }
                  </Td>

                  <Td>
                    { crawMember.name }
                  </Td>

                  <Td>
                    { crawMember.email }
                  </Td>

                  <Td>
                    <CrawMembersActions crawMember={crawMember}/>
                  </Td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </td>
      <td></td>
    </tr>
  );
}