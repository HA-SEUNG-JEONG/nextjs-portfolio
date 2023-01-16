import Link from "next/link";
import DarkModeToggleButtion from "./DarkModeToggleButtion";

const Header = () => {
  return (
    <header className="body-font text-gray-600 dark:bg-slate-800">
      <div className="container mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row">
        <Link
          href="/"
          className="title-font mb-4 flex items-center font-medium text-gray-900 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="h-10 w-10 rounded-full bg-indigo-500 p-2 text-white"
            viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl text-[#343232] dark:text-[#DEDCE8]">
            정하승의 포트폴리오
          </span>
        </Link>

        <nav className="flex flex-wrap items-center justify-center space-x-6 text-xl font-bold md:ml-auto">
          <Link href="/">
            <span className="text-[#343232] hover:text-gray-500 dark:text-[#DEDCE8] dark:hover:text-gray-400">
              Home
            </span>
          </Link>
          <Link href="/projects">
            <span className="text-[#343232] hover:text-gray-500 dark:text-[#DEDCE8] dark:hover:text-gray-400">
              Projects
            </span>
          </Link>
          <Link className="" href="/skills">
            <span className="text-[#343232] hover:text-gray-500 dark:text-[#DEDCE8] dark:hover:text-gray-400">
              Skills
            </span>
          </Link>
          <Link href="/experiences">
            <span className="text-[#343232] hover:text-gray-500 dark:text-[#DEDCE8] dark:hover:text-gray-400">
              Other Experience
            </span>
          </Link>
          <DarkModeToggleButtion />
        </nav>
      </div>
    </header>
  );
};

export default Header;
