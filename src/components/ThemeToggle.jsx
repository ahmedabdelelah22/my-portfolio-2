import { useTheme } from "../context/themeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-8 rounded-full bg-slate-200 dark:bg-slate-700 transition-colors"
    >
      <span
        className={`absolute top-1 w-6 h-6 rounded-full bg-white flex items-center justify-center text-sm transition-all duration-300 ${
          theme === "dark" ? "translate-x-6" : "translate-x-1"
        }`}
      >
        {theme === "dark" ? "🌙" : "☀️"}
      </span>
    </button>
  );
}