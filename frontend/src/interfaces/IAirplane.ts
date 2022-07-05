import ITravel from "./ITravel";

export default interface IAirplane {
  id: string,
  place: string,
  model: string,
  airline: string,
  baggage_limit: number,
  seat_limit: number,
  travels: ITravel[]
}