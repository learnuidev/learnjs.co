import { i18nOptions } from "@/libs/i18n-next/i18n-config";

import banner from "@/locales/en/banner.json";
import blueprint from "@/locales/en/blueprint.json";
import common from "@/locales/en/common.json";
import courseDetails from "@/locales/en/courseDetails.json";
import courses from "@/locales/en/courses.json";
import nothing from "@/locales/en/nothing.json";
import v from "@/locales/en/v.json";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: typeof i18nOptions.defaultNS;
    resources: {
      banner: typeof banner;
      blueprint: typeof blueprint;
      common: typeof common;
      courseDetails: typeof courseDetails;
      courses: typeof courses;
      nothing: typeof nothing;
      v: typeof v;
    };
  }
}

