import useLocalStorage from "./useLocalStorage";

const themeConfig = {
  dark: {
    color: "white",
    background: "black",
  },
  light: {
    color: "black",
    background: "#F1EFF2",
  },
};

const useTheme = () => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  const toggle = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  return {
    theme: themeConfig[theme],
    toggle,
  };
};

export default useTheme;
