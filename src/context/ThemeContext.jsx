import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext({
    theme: "dark",
    toggleTheme: () => { },
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        if (typeof window !== "undefined") {
            return localStorage.getItem("portfolio-theme") || "dark";
        }
        return "dark";
    });

    useEffect(() => {
        const root = document.documentElement;
        if (theme === "dark") {
            root.classList.add("dark");
            root.style.colorScheme = "dark";
            document.body.style.backgroundColor = "#0a0a0f";
            document.body.style.color = "#e2e8f0";
        } else {
            root.classList.remove("dark");
            root.style.colorScheme = "light";
            document.body.style.backgroundColor = "#f1f5f9";
            document.body.style.color = "#1e293b";
        }
        localStorage.setItem("portfolio-theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContext;
