import { config as baseConfig } from "./wdio.conf";

const chromeArgs =
  process.env.NODE_ENV === "test"
    ? ["--disable-gpu", "--no-sandbox", "--window-size=1920,1080"]
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
      "goog:chromeOptions": { args: chromeArgs },
    },
  ],
};
