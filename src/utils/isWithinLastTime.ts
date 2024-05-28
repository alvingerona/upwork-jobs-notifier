import * as moment from "moment";

function isWithinLastTime(momentToCheck) {
  // Get the current time
  const now = moment();

  // Calculate the difference in minutes
  const diffInMinutes = now.diff(momentToCheck, "minutes");

  // Check if the difference is less than or equal to 30 minutes
  return diffInMinutes <= 30;
}

export default isWithinLastTime;