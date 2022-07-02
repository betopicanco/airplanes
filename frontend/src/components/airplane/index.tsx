import { useState } from "react";
import AirplaneInterface from "../../AirplaneInterface";
import ChevronDown from "../icons/ChevronDown";
import ChevronUp from "../icons/ChevroUp";
import Td from "../table/Td";
import Actions from "./actions";
import CrawMembers from "./crawMembers";
import Passengers from "./passengers";

export default function AirplaneInfo(
    { airplane }: { airplane: AirplaneInterface }
) {
  const [ showCrawMembers, setShowCrawMembers ] = useState(false);
  const [ showPassengers, setShowPassengers ] = useState(false);
  const {
    id,
    place,
    model,
    airline, 
    baggage_limit: baggageLimit, 
    seat_limit: seatLimit, 
  } = airplane;

  const handleCrawMemberClick = () => {
    if(showPassengers) setShowPassengers(false);
    setShowCrawMembers(!showCrawMembers);
  }

  const handlePassengersClick = () => {
    if(showCrawMembers) setShowCrawMembers(false);
    setShowPassengers(!showPassengers);
  }

  // const crawMembersTd = (
  //   <div className={` flex justify-center `} onClick={handleCrawMemberClick}>
  //     { crawMembers.length }
        
  //     <span className={` p-1 `}>
  //       {showCrawMembers ? (
  //         <ChevronUp style={` h-6 w-6 stroke-2 `}/>
  //       ) : (
  //         <ChevronDown style={` h-6 w-6 stroke-2 `}/>
  //       )}
  //     </span>
  //   </div>
  // );
  // const passengersTd = (
  //   <div className={` flex justify-center `} onClick={handlePassengersClick}>
  //     { passengers.length }

  //     <span>
  //       {showPassengers ? (
  //         <ChevronUp style={` h-6 w-6 stroke-2 `}/>
  //       ) : (
  //         <ChevronDown style={` h-6 w-6 stroke-2 `}/>
  //       )}
  //     </span>
  //   </div>
  // );

  return (
    <>
      <tr key={id}>
        <Td>
          {place}
        </Td>

        <Td>
          {model}
        </Td>

        <Td>
          {airline}
        </Td>

        <Td>
          {baggageLimit}
        </Td>

        <Td>
          {seatLimit}
        </Td>

        <Td>
          {<Actions airplane={airplane}/>}
        </Td>
      </tr>

      {/* {showCrawMembers && (
        <CrawMembers model={model} crawMembers={crawMembers}/>
      )}

      {showPassengers && (
        <Passengers model={model} passengers={passengers}/>
      )} */}
    </>
  );
}