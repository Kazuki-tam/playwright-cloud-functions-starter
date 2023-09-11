// types.d.ts
declare module "playwright-aws-lambda" {
  import type { Browser, LaunchOptions, Page } from "playwright-core";
  export { Browser, LaunchOptions, Page };
  export function launchChromium(options?: LaunchOptions): Promise<Browser>;
}
