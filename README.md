# Upwork Job Notifier

This project is a serverless application that periodically checks the Upwork RSS feed for new job postings related to React and sends email notifications for the new job listings. The application is built using Node.js and is deployed on AWS using the Serverless Framework.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [License](#license)

## Features

- Fetches job postings from the Upwork RSS feed.
- Filters job postings based on their publication time.
- Sends email notifications for new job postings using SendGrid.
- Scheduled to run every 30 minutes.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/upwork-job-notifier.git
   cd upwork-job-notifier
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

3. Set up environment variables:
   Create a `.env` file in the root of the project and add the following:
   ```env
   EMAIL_TO=your_email@example.com
   EMAIL_FROM=your_email@example.com
   EMAIL_SENDGRID_API_KEY=your_sendgrid_api_key
   ```

## Configuration

The configuration for the serverless application is specified in the `serverless.yml` file. Key configuration includes:

- **Service**: Name of the service (`upwork-job-notifier`).
- **Provider**: AWS provider with Node.js runtime.
- **Environment Variables**: Email configuration for SendGrid.
- **Plugins**: TypeScript and dotenv plugins.
- **Functions**: Lambda function `jobsNotifierHandler` scheduled to run every 30 minutes.

## Usage

To deploy the application to AWS using the Serverless Framework, run:

```bash
serverless deploy
```

## To invoke the function locally for testing
```
yarn invoke-jobs-notifier
```