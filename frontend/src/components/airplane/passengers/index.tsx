import Table from "../../table";
import Td from "../../table/Td"
import Thead from "../../table/Thead";
import PassengersActions from "./actions";

interface PassengersProps {
  passengers: {
    name: string,
    email: string,
  }[],
  model: string
}

export default function Passengers({ model, passengers }: PassengersProps) {
  return (
    <tr className={` border-y border-blue-800 `}>
      <td></td>
      <td colSpan={4}>
        <div className={` 
          text-center bg-white border-x-2 border-t-2 border-blue-800 text-xl
          py-2
        `}>
          <strong>
            Passageiros { model }
          </strong>
        </div>
        <Table fixed={false}>
          <Thead headers={[
            'Nome', 'Email', 'Ações'
          ]}/>
          <tbody>
            {passengers.map((passenger, index) => {
              return (
                <tr key={index}>
                  <Td>
                    { passenger.name }
                  </Td>

                  <Td>
                    { passenger.email }
                  </Td>

                  <Td>
                    <PassengersActions passenger={passenger}/>
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