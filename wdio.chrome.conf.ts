import { config as baseConfig } from "./wdio.conf";

const chromeArgs =
  process.env.NODE_ENV === "test"
    ? [
        "--disable-gpu",
        "--no-sandbox",
        "--window-size=1920,1080",
        "--disable-dev-shm-usage",
        "--headless",
      ]
    : [
        "--headless",
        "--disable-gpu",
        "--no-sandbox",
        "--window-size=1920,1080",
      ];

export const config = {
  ...baseConfig,

  capabilities: [
    {
      browserName: "chrome",
      webSocketUrl: false,
      "goog:chromeOptions": { args: chromeArgs },
    },
  ],
};
