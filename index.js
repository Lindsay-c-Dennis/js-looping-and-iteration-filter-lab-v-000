// Code your solution in this file
function findMatching(drivers, string) {
  return drivers.filter(driver => driver === string.downcase);
}