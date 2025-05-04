import type { AWS } from "@serverless/typescript";

const serverlessConfiguration: AWS = {
  service: "types-everywhere",
  plugins: ["serverless-offline", "serverless-esbuild"],
  package: {
    individually: true,
  },
  provider: {
    name: "aws",
    runtime: "nodejs22.x",
    region: process.env.AWS_DEFAULT_REGION,
  },
  build: {
    esbuild: false,
  },
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: "linked",
      keepNames: true,
      watch: {
        pattern: "src/**/*.ts",
      },
    },
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
    triggerReceiver: {
      handler: "./src/trigger-receiver.handler",
      events: [
        {
          httpApi: {
            path: "/trigger-receiver",
            method: "GET",
          },
        },
      ],
    },
  },
};

module.exports = serverlessConfiguration;
