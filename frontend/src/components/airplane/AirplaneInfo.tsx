import { useState } from "react";
import AirplaneInterface from "../../AirplaneInterface";
import ChevronDown from "../icons/ChevronDown";
import ChevronUp from "../icons/ChevroUp";
import Td from "../table/Td";
import CrawMembers from "./CrawMembers";
import Passengers from "./Passengers";

export default function AirplaneInfo(
    { airplane }: { airplane: AirplaneInterface }
) {
  const [ showCrawMembers, setShowCrawMembers ] = useState(false);
  const [ showPassengers, setShowPassengers ] = useState(false);

  const handleCrawMemberClick = () => {
    if(showPassengers) setShowPassengers(false);
    setShowCrawMembers(!showCrawMembers);
  }

  const handlePassengersClick = () => {
    if(showCrawMembers) setShowCrawMembers(false);
    setShowPassengers(!showPassengers);
  }

  const crawMembersTd = (
    <div className={` flex justify-center `} onClick={handleCrawMemberClick}>
      { airplane.craw_members.length }
        
      <span className={` p-1 `}>
        {showCrawMembers ? (
          <ChevronUp style={` h-6 w-6 stroke-2 `}/>
        ) : (
          <ChevronDown style={` h-6 w-6 stroke-2 `}/>
        )}
      </span>
    </div>
  );
  const passengersTd = (
    <div className={` flex justify-center `} onClick={handlePassengersClick}>
      { airplane.passengers.length }

      <span>
        {showPassengers ? (
          <ChevronUp style={` h-6 w-6 stroke-2 `}/>
        ) : (
          <ChevronDown style={` h-6 w-6 stroke-2 `}/>
        )}
      </span>
    </div>
  );

  return (
    <>
      <tr key={airplane.id}>
        <Td>
          {airplane.model}
        </Td>

        <Td>
          {airplane.baggage_limit}
        </Td>

        <Td>
          {airplane.seat_limit}
        </Td>

        <Td>
          {crawMembersTd}
        </Td>

        <Td>
          {passengersTd}
        </Td>
      </tr>

      {showCrawMembers && (
        <CrawMembers model={airplane.model} crawMembers={airplane.craw_members}/>
      )}

      {showPassengers && (
        <Passengers model={airplane.model} passengers={airplane.passengers}/>
      )}
    </>
  );
}