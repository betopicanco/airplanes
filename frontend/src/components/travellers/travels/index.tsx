import { useEffect, useState } from "react";
import api from "../../../services/api";
import Table from "../../table";
import TBody from "../../table/TBody";
import Thead from "../../table/Thead";
import TravelTravellersTuple from "./TravelTravellersTuple";

interface ITravelTraveller {
  travel: {
    id: string,
    date: Date
  },
  type_traveller: {
    name: string
  }
}

export default function TravelTravellerTable(
  { traveller_id }: { traveller_id: string }
) {
  const [ travelsTraveller, setTravelsTraveller ] = useState<ITravelTraveller[]>([]);
  
  useEffect(() => {
    api.get(`travellers/${traveller_id}`).then(res => {
      setTravelsTraveller(res.data?.travel_travellers);
    });
  }, []);

  return (
    <Table>
      <Thead
        headers={[
          'Data',
          'Tipo'
        ]}
      />
      <TBody>
        {travelsTraveller.map((travel_traveller) => {
          return (
            <TravelTravellersTuple
              id={travel_traveller.travel.id}
              date={travel_traveller.travel.date}
              type={travel_traveller.type_traveller.name}
            />
          );
        })}
      </TBody>
    </Table>
  );
}