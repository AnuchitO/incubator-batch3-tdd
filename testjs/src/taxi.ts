export const Taxi = (distance: number, waitingTime: number): number => {
  return minimumFare(fare(distance, waitingTime))
}

export const calculateFare = (
  distance: number,
  waitingTime: number
): number => {
  return 2 * distance + waitingTime
}

export const roundDistance = (distance: number): number => {
  return Math.ceil(distance * 2) / 2
}

export const roundWaitingTime = (waitingTime: number): number => {
  return Math.ceil(waitingTime)
}

export const fare = (distance: number, waitingTime: number): number => {
  return calculateFare(roundDistance(distance), roundWaitingTime(waitingTime))
}

export const minimumFare = (f: number): number => {
  return Math.max(f, 8)
}
