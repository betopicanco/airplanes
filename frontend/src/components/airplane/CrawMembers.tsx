import Table from "../table";
import Td from "../table/Td";
import Thead from "../table/Thead";

interface CrawMembersProps {
  crawMembers: {
    position: string,
    name: string,
    email: string
  }[],
  model: string
}

export default function CrawMembers({ model, crawMembers }: CrawMembersProps) {
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
        <Table>
          <Thead headers={[
            'Cargo', 'Nome', 'Email', 'Ações'
          ]}/>
          <tbody>
            {crawMembers.map((craw_member, index) => {
              return (
                <tr key={index}>
                  <Td>
                    {craw_member.position}
                  </Td>

                  <Td>
                    {craw_member.name}
                  </Td>

                  <Td>
                    {craw_member.email}
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