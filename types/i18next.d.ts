import { i18nOptions } from "@/libs/i18n-next/i18n-config";

import banner from "@/locales/en/banner.json";
import common from "@/locales/en/common.json";
import courses from "@/locales/en/courses.json";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: typeof i18nOptions.defaultNS;
    resources: {
      banner: typeof banner;
      common: typeof common;
      courses: typeof courses;
    };
  }
}

