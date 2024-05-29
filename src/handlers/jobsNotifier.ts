import axios from "axios";
import * as momentTz from "moment-timezone";
import RSSParser from "rss-parser";
import isWithinLastTime from "../utils/isWithinLastTime";
import {
  makeHTMLEmailContent,
  makeItemEmailHTML,
  makeItemEmailText,
  makeTextEmailContent,
  sendEmail,
} from "../utils/email";
import { UPWORK_FEED_URL } from "../utils/constants";
import { IItem, TypeItemsForNotify, TypeRRSResponse } from "utils/types";

/**
 * Handler function for notifying about new job postings from the Upwork RSS feed.
 *
 * This function performs the following steps:
 * 1. Fetches the RSS feed from Upwork.
 * 2. Parses the RSS feed to extract job items.
 * 3. Converts the publication date of each job item from UTC to local time.
 * 4. Filters the job items to include only those published within a specified time frame.
 * 5. Composes email content (both HTML and text) for the filtered job items.
 * 6. Sends an email notification if there are any new job items to notify.
 * 7. Logs the result of the notification attempt.
 */
const jobsNotifier = async () => {
  const rssParser = new RSSParser();
  const response = await axios.get(UPWORK_FEED_URL);
  const rssResponse: TypeRRSResponse = await rssParser.parseString(
    response.data
  );
  const items: IItem[] = rssResponse.items;
  const itemsForNotify: TypeItemsForNotify = [];

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    // Create a moment object representing UTC time
    const utcPublishTime = momentTz.utc(item.pubDate);

    // Convert UTC time to local time
    const localTime = utcPublishTime.clone().local();

    if (isWithinLastTime(localTime)) {
      itemsForNotify.push({
        html: makeItemEmailHTML(localTime, item),
        text: makeItemEmailText(localTime, item),
      });
    }
  }

  if (itemsForNotify.length > 0) {
    // send email

    await sendEmail({
      subject: "New Upwork Job Postings",
      html: makeHTMLEmailContent(
        itemsForNotify.map((item) => item.html).join("")
      ),
      text: makeTextEmailContent(
        itemsForNotify.map((item) => item.html).join("\n")
      ),
    });

    console.info(
      `Successfully sent email notification for ${itemsForNotify.length} matche(s)`
    );
  } else {
    // nothing to send
    console.info("Nothing to send.");
  }
};

export default jobsNotifier;
