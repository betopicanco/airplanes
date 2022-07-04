import AirplaneInterface from "./IAirplane"

export default interface ITravel {
  id: string,
  airplane: AirplaneInterface
  date: Date,
}