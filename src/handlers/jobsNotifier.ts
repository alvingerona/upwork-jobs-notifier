import axios from "axios";
import * as momentTz from "moment-timezone";
import * as RSSParser from "rss-parser";
import isWithinLastTime from "../utils/isWithinLastTime";

const UPWORK_FEED_URL =
  "https://www.upwork.com/ab/feed/jobs/rss?category2_uid=531770282580668418&ontology_skill_uid=1031626773660942336&paging=NaN-undefined&payment_verified=1&proposals=10-14&q=react&sort=recency&api_params=1&securityToken=feacf55f8ed768ce83bbde9280f997dd628211cb16eca0bddf4a78883cb696202bf0148c0ea6bac2e41e23428e423131a8926d2174b6a858ad60ebd692d287e2&userUid=424150074540802048&orgUid=424150074544996353";

const jobsNotifier = async (event, context) => {
  const rssParser = new RSSParser();
  const response = await axios.get(UPWORK_FEED_URL);
  const items = (await rssParser.parseString(response.data)).items;
  const itemsForNotify = [];

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    // Create a moment object representing UTC time
    const utcPublishTime = momentTz.utc(item.pubDate);

    // Convert UTC time to local time
    const localTime = utcPublishTime.clone().local();

    if (isWithinLastTime(localTime)) {
      // @ts-ignore
      itemsForNotify.push(item);
    }
  }

  console.log({ itemsForNotify });
};

export default jobsNotifier;
