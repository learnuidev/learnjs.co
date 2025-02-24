import { LanguageSwitcher } from "@/libs/i18n-next/language-switcher";
import { ToggleThemeDropdown } from "./toggle-theme-dropdown";

export const NavBar = () => {
  return (
    <nav className="flex items-center justify-between">
      <ToggleThemeDropdown />
      <LanguageSwitcher />
    </nav>
  );
};
