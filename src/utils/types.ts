import RSSParser from "rss-parser";

export interface IItem {
  link: string;
  title: string;
  pubDate: string;
  "content:encoded": string;
  contentSnippet: string;
}

export interface IAPIGatewayEvent {
  body: string | null;
  headers: { [name: string]: string };
  httpMethod: string;
  isBase64Encoded: boolean;
  path: string;
  pathParameters: { [name: string]: string } | null;
  queryStringParameters: { [name: string]: string } | null;
  stageVariables: { [name: string]: string } | null;
}

export interface IContext {
  awsRequestId: string;
  callbackWaitsForEmptyEventLoop: boolean;
  functionName: string;
  functionVersion: string;
  invokedFunctionArn: string;
  logGroupName: string;
  logStreamName: string;
  memoryLimitInMB: string;
}

export type TypeRRSResponse = {
  items: any;
} & RSSParser.Output<{
  [key: string]: any;
}>;

export type TypeItemsForNotify = Array<{
  html: string;
  text: string;
}>;
