import { Provider } from "react-redux";
import store from "../store/store";
import "../styles/globals.css";
import "../styles/font.css";
import { ThemeProvider } from "next-themes";
import { useEffect } from "react";

const MyApp = ({ Component, pageProps }) => {
  // const { theme, setTheme } = useTheme();
  // useEffect(() => {
  //   const root = document.documentElement;
  //   if (theme === "light") {
  //     root.style.setProperty("--primary-color", "#0070f3");
  //     root.style.setProperty("--secondary-color", "#ff0080");
  //     root.style.setProperty("--background-color", "#f3f3f3");
  //     root.style.setProperty("--text-color", "#000000");
  //   } else if (theme === "dark") {
  //     root.style.setProperty("--primary-color", "#00adb5");
  //     root.style.setProperty("--secondary-color", "#ff80ab");
  //     root.style.setProperty("--background-color", "#121212");
  //     root.style.setProperty("--text-color", "#ffffff");
  //   }
  // }, [theme]);
  return (
    <ThemeProvider attribute="class">
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
};

export default MyApp;
