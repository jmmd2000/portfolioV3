import { CiSun, CiCloudMoon } from "react-icons/ci";
import { PiComputerTower } from "react-icons/pi";
import { useTheme, Theme } from "@/components/ui/theme-provider";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    const newTheme: Theme =
      theme === "light" ? "dark" : theme === "dark" ? "system" : "light";
    setTheme(newTheme);
  };

  const getIconForTheme = () => {
    switch (theme) {
      case "light":
        return <CiSun size={32} />;
      case "dark":
        return (
          <CiCloudMoon
            color="white"
            size={32}
          />
        );
      default:
        return (
          <PiComputerTower
            size={32}
            color="white"
          />
        );
    }
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="fixed bottom-4 right-4 p-2 rounded-full bg-gray-900 text-gray-50 hover:bg-gray-900/90 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:focus:ring-gray-300"
    >
      {getIconForTheme()}
    </button>
  );
}
