import { useEffect, useState } from "react";
// import "./App.css";

function BtnTheme() {
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }

    return "light";
  });

  useEffect(() => {
    if (theme == "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme == "light" ? "dark" : "light"));
  };

  return (
    <main>
      <div className="h-screen flex justify-center items-center dark:bg-neutral-900">
        <button
          className="bg-slate-200 px-4 py-2 hover:bg-slate-300 dark:bg-slate-950 dark:text-white dark:hover:bg-slate-900"
          onClick={handleChangeTheme}
        >
          change theme
        </button>
      </div>
    </main>
  );
}

export default BtnTheme;