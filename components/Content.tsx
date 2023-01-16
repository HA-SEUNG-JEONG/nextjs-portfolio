import Link from "next/link";
import React from "react";
import Animation from "./Animation";

const Content = () => {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center overflow-y-hidden text-gray-600">
      <div className="container mx-auto flex flex-col items-center px-5 py-24 md:flex-row">
        <div className="mb-16 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24">
          <h1 className="title-font mb-4 text-3xl font-medium text-gray-900 sm:text-4xl">
            프론트엔드 개발자
            <br className="hidden lg:inline-block" />
            정하승입니다.
          </h1>
          <div className="flex justify-center">
            <button className="inline-flex rounded border-0 bg-[#0C0FB0] py-2 px-6 text-lg hover:bg-[#31339B] focus:outline-none">
              <Link className="text-[#DBDCE6] dark:text-white" href="/project">
                프로젝트 보러가기
              </Link>
            </button>
          </div>
        </div>
        <div className="w-5/6 md:w-1/2 lg:w-full lg:max-w-lg">
          <Animation />
        </div>
      </div>
    </section>
  );
};

export default Content;
