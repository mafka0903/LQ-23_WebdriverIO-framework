import { config as baseConfig } from "./wdio.conf";

export const config = {
  ...baseConfig,
  capabilities: [
    {
      maxInstances: 1,
      browserName: "firefox",
      "moz:firefoxOptions": {
        args: ["-headless"],
      },
    },
  ],
};
