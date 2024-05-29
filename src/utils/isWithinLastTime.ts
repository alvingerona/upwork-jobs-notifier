import moment from "moment";
import { QUERY_INTERVAL } from "./constants";

/**
 * Checks if a given moment is within the last specified time interval.
 *
 * This function determines whether the provided time (`momentToCheck`) falls
 * within the last `QUERY_INTERVAL` minutes from the current time.
 *
 * @param {moment.Moment} momentToCheck - The time to check against the current time.
 * @returns {boolean} - True if the time difference is within the QUERY_INTERVAL, otherwise false.
 */
function isWithinLastTime(momentToCheck: moment.Moment) {
  // Get the current time
  const now = moment();
  // Get a certain time ago
  const aTimeAgo = moment().subtract(QUERY_INTERVAL, "minutes");

  // Check if the difference is less than or equal to QUERY_INTERVAL minutes
  const isValid = momentToCheck.isBetween(aTimeAgo, now);

  return isValid;
}

export default isWithinLastTime;
