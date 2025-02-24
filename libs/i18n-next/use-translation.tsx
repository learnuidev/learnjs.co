import { Namespace } from "i18next";
import {
  useTranslation as useReactI18nTranslation,
  UseTranslationOptions,
} from "react-i18next";
import { _DefaultNamespace } from "react-i18next/TransWithoutContext";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
function useCustomTranslation<Ns extends Namespace = _DefaultNamespace>(
  namespace?: Ns,
  options?: UseTranslationOptions<undefined>
) {
  const translationResult = useReactI18nTranslation(namespace, options);

  return translationResult;
}

export { useCustomTranslation as useTranslation };
