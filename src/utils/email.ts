import sg from "@sendgrid/mail";
import { EMAIL_FROM, EMAIL_SENDGRID_API_KEY, EMAIL_TO } from "./constants";
import moment from "moment";
import { IItem } from "./types";

const sendEmail = async ({
  subject,
  text,
  html,
}: {
  subject: string;
  text: string;
  html: string;
}) => {
  sg.setApiKey(EMAIL_SENDGRID_API_KEY);

  const msg = {
    to: EMAIL_TO,
    from: EMAIL_FROM,
    subject,
    text,
    html,
  };

  const response = await sg.send(msg);
};

const makeItemEmailHTML = (localTime: moment.Moment, item: IItem) => {
  const title = item.title.replace(" - Upwork", "");
  return `<li><a href="${item.link}" target="_blank">${title} | ${extractBudget(
    item.contentSnippet
  )} | ${localTime.format("MMMM DD, YYYY hh:mmA")}</a></li>`;
};

const makeItemEmailText = (localTime: moment.Moment, item: IItem) => {
  const title = item.title.replace(" - Upwork", "");
  return `${title}[${item.link}] | ${extractBudget(
    item.contentSnippet
  )} | ${localTime.format("MMMM DD, YYYY hh:mmA")}`;
};

const makeTextEmailContent = (items: string) => {
  return `
  thank you!\n\n

  ${items}
  `;
};

const makeHTMLEmailContent = (items: string) => {
  return `
  thank you !<br/>
  <ul>${items}</ul>
  `;
};

const extractBudget = (str: string) => {
  const budgetMatch = str.match(/Budget: \$([\d,]+)/);

  if (budgetMatch) {
    const budgetAmount = budgetMatch[1].replace(/,/g, "");
    return budgetAmount.replace("\n", "");
  }

  return "-";
};

export {
  sendEmail,
  makeItemEmailHTML,
  makeItemEmailText,
  makeTextEmailContent,
  makeHTMLEmailContent,
};
