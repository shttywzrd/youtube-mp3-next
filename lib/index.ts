export function secondsToTimestamp(seconds: number) {
  return new Date(0, 0, 0, 0, 0, seconds).toLocaleTimeString("us");
}
