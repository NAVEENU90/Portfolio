import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext.jsx";

const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === "dark";

    return (
        <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl border border-black/[0.06] dark:border-white/[0.08] bg-white/80 dark:bg-white/[0.04] text-slate-700 dark:text-ink-muted hover:border-green-500/30 hover:text-green-600 dark:hover:text-green-400 transition-all duration-300 overflow-hidden"
        >
            <motion.div
                key={theme}
                initial={{ rotate: -90, scale: 0, opacity: 0 }}
                animate={{ rotate: 0, scale: 1, opacity: 1 }}
                exit={{ rotate: 90, scale: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
            >
                {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </motion.div>
        </button>
    );
};

export default ThemeSwitcher;
