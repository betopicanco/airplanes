export default interface AirplaneInterface {
  id: string,
  model: string,
  baggage_limit: number,
  seat_limit: number,
  craw_members: {
    position: string,
    name: string,
    email: string,
  }[],
  passengers: {
    name: string,
    email: string,
  }[]
}