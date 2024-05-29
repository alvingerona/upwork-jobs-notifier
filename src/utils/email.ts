import sg from "@sendgrid/mail";
import {
  EMAIL_FROM,
  EMAIL_FROM_NAME,
  EMAIL_SENDGRID_API_KEY,
  EMAIL_TO,
} from "./constants";
import moment from "moment";
import { IItem } from "./types";

/**
 * Sends an email using SendGrid.
 * @param {Object} param0 - The email details.
 * @param {string} param0.subject - The subject of the email.
 * @param {string} param0.text - The plain text content of the email.
 * @param {string} param0.html - The HTML content of the email.
 */
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
    from: {
      email: EMAIL_FROM,
      name: EMAIL_FROM_NAME,
    },
    subject,
    text,
    html,
  };

  await sg.send(msg);
};

/**
 * Generates HTML content for a single job item.
 * @param {moment.Moment} localTime - The local time of the job publication.
 * @param {IItem} item - The job item.
 * @returns {string} - The HTML content for the job item.
 */
const makeItemEmailHTML = (localTime: moment.Moment, item: IItem) => {
  const title = item.title.replace(" - Upwork", "");
  return `<li><a href="${item.link}" target="_blank">${title} | ${extractBudget(
    item.contentSnippet
  )} | ${localTime.format("MMMM DD, YYYY hh:mmA")}</a></li>`;
};

/**
 * Generates plain text content for a single job item.
 * @param {moment.Moment} localTime - The local time of the job publication.
 * @param {IItem} item - The job item.
 * @returns {string} - The plain text content for the job item.
 */
const makeItemEmailText = (localTime: moment.Moment, item: IItem) => {
  const title = item.title.replace(" - Upwork", "");
  return `${title}[${item.link}] | ${extractBudget(
    item.contentSnippet
  )} | ${localTime.format("MMMM DD, YYYY hh:mmA")}`;
};

/**
 * Generates the plain text content for the email notification.
 * @param {string} items - The plain text content of all job items.
 * @returns {string} - The complete plain text email content.
 */
const makeTextEmailContent = (items: string) => {
  return `
  Below are the latest job postings matching your criteria:\n\n

  ${items}\n\n

  Thank you!
  `;
};

/**
 * Generates the HTML content for the email notification.
 * @param {string} items - The HTML content of all job items.
 * @returns {string} - The complete HTML email content.
 */
const makeHTMLEmailContent = (items: string) => {
  return `
  <p>Below are the latest job postings matching your criteria:</p>
  <ul>${items}</ul>
  <p>Thank you!</p>
  `;
};

/**
 * Extracts the budget amount from the job description.
 * @param {string} str - The job description string.
 * @returns {string} - The extracted budget amount or "-" if not found.
 */
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
