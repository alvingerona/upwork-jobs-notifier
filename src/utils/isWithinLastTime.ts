import moment from "moment";
import { QUERY_INTERVAL } from "./constants";

function isWithinLastTime(momentToCheck: moment.Moment) {
  // Get the current time
  const now = moment();

  // Calculate the difference in minutes
  const diffInMinutes = now.diff(momentToCheck, "minutes");

  // Check if the difference is less than or equal to QUERY_INTERVAL minutes
  return diffInMinutes <= QUERY_INTERVAL;
}

export default isWithinLastTime;
