import moment from "moment";
import { QUERY_INTERVAL } from "./constants";

/**
 * Checks if a given moment is within the last specified time interval.
 *
 * This function calculates the difference between the current time and the
 * provided time (`momentToCheck`). If this difference is less than or equal
 * to the `QUERY_INTERVAL` (in minutes), the function returns true.
 *
 * @param {moment.Moment} momentToCheck - The time to check against the current time.
 * @returns {boolean} - True if the time difference is within the QUERY_INTERVAL, otherwise false.
 */
function isWithinLastTime(momentToCheck: moment.Moment) {
  // Get the current time
  const now = moment();

  // Calculate the difference in minutes
  const diffInMinutes = now.diff(momentToCheck, "minutes");

  // Check if the difference is less than or equal to QUERY_INTERVAL minutes
  const isValid = diffInMinutes <= QUERY_INTERVAL;

  return isValid;
}

export default isWithinLastTime;
