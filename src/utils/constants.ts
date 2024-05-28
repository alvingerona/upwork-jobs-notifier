/**
 * This file contains constants used throughout the application.
 * It includes configuration for fetching the Upwork RSS feed,
 * as well as email settings and other application-wide constants.
 */

// URL for fetching the Upwork RSS feed for job postings.
// The URL includes parameters to filter jobs by specific criteria such as category, skills, and recency.
export const UPWORK_FEED_URL: string =
  "https://www.upwork.com/ab/feed/jobs/rss?category2_uid=531770282580668418&ontology_skill_uid=1031626773660942336&paging=NaN-undefined&payment_verified=1&proposals=10-14&q=react&sort=recency&api_params=1&securityToken=feacf55f8ed768ce83bbde9280f997dd628211cb16eca0bddf4a78883cb696202bf0148c0ea6bac2e41e23428e423131a8926d2174b6a858ad60ebd692d287e2&userUid=424150074540802048&orgUid=424150074544996353";

// Email address to send notifications to.
// This value is taken from the environment variables.
export const EMAIL_TO: string = process.env.EMAIL_TO ?? "";

// Email address from which notifications will be sent.
// This value is taken from the environment variables.
export const EMAIL_FROM: string = process.env.EMAIL_FROM ?? "";

// API key for SendGrid, used for sending emails.
// This value is taken from the environment variables.
export const EMAIL_SENDGRID_API_KEY: string =
  process.env.EMAIL_SENDGRID_API_KEY ?? "";

// Interval for querying the Upwork RSS feed, in minutes.
// The value 30 indicates that the feed should be checked every 30 minutes.
export const QUERY_INTERVAL = 30; // 30 is 30 minutes
