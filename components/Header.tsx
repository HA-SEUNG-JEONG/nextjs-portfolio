import Link from "next/link";
import DarkModeToggleButtion from "./DarkModeToggleButtion";

const Header = () => {
  return (
    <header className="body-font text-gray-600">
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
          <span className="ml-3 text-xl">정하승의 포트폴리오</span>
        </Link>

        <nav className="bg-primary flex flex-wrap items-center justify-center space-x-6 text-xl font-bold md:ml-auto">
          <Link className="hover:text-gray-300" href="/">
            홈
          </Link>
          <Link className="hover:text-gray-300" href="/project">
            프로젝트
          </Link>
          <Link className="hover:text-gray-300" href="/skill">
            스킬
          </Link>
          <DarkModeToggleButtion />
        </nav>
      </div>
    </header>
  );
};

export default Header;
