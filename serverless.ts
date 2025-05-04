import type { AWS } from "@serverless/typescript";

const serverlessConfiguration: AWS = {
  service: "aws-lambda-typescript",
  plugins: ["serverless-offline"],
  provider: {
    name: "aws",
    runtime: "nodejs22.x",
  },
  build: {
    esbuild: false,
  },
  functions: {
    sendTrigger: {
      handler: "./src/send-trigger.handler",
      events: [
        {
          httpApi: {
            path: "/send-trigger",
            method: "GET",
          },
        },
      ],
    },
  },
};

module.exports = serverlessConfiguration;
