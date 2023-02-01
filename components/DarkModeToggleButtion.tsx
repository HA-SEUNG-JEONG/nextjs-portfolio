import { useTheme } from "next-themes";

const DarkModeToggleButtion = () => {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <button
        title="toggle" //title로 11% 접근성 증가 87-97
        type="button"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="mt-4  inline-flex items-center rounded border-0 bg-gray-300 py-1 px-3 text-base hover:bg-gray-400 hover:text-orange-500 focus:outline-none
    dark:bg-slate-600 dark:hover:bg-slate-700 dark:text-slate-400  dark:hover:text-yellow-300 md:mt-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="visible h-5 w-5 dark:invisible dark:h-0 dark:w-0"
          viewBox="0 0 20 20"
          fill="currentColor">
          <path
            fillRule="evenodd"
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            clipRule="evenodd"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="visible h-0 w-0 dark:visible dark:h-5 dark:w-5"
          viewBox="0 0 20 20"
          fill="currentColor">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      </button>
    </>
  );
};

export default DarkModeToggleButtion;
