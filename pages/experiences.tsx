import Head from "next/head";
import React from "react";
import Layout from "../components/Layout";

const experience = () => {
  return (
    <Layout>
      <div className="flex min-h-screen flex-col items-center justify-center px-5">
        <Head>
          <title>정하승의 포트폴리오</title>
          <meta name="description" content="portfolio" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="relative bottom-48 flex flex-col space-y-6">
          <div className="flex space-x-4">
            <span className="text-2xl font-bold text-[#343232] dark:text-[#DEDCE8]">
              코드스테이츠
            </span>
            <div className="font-bold text-[#343232] dark:text-[#DEDCE8]">
              2022.6~2022.12
            </div>
          </div>
          <ul className="flex flex-col justify-center space-y-2 ">
            <li className="text-[#343232] dark:text-[#DEDCE8]">
              - 페어프로그래밍을 통해 다른 개발자들과 소통하는 법을 배웠습니다.
            </li>
            <li className="text-[#343232] dark:text-[#DEDCE8]">
              - 자율적인 학습과 팀 프로젝트를 통해 협업 경험을 했습니다.
            </li>
          </ul>
          <hr />
          <div className="flex space-x-4">
            <span className="text-2xl font-bold text-[#343232] dark:text-[#DEDCE8]">
              함수형 코딩 스터디
            </span>
            <div className="font-bold text-[#343232] dark:text-[#DEDCE8]">
              2022.7~2022.8
            </div>
          </div>
          <ul className="flex flex-col justify-center space-y-2">
            <li className="text-[#343232] dark:text-[#DEDCE8]">
              - 코드를 더 확장성 있게 짜기 위해 스터디를 통한 코드 리팩터링
              연습을 했습니다.
            </li>
            <li className="text-[#343232] dark:text-[#DEDCE8]">
              - 가독성이 떨어지는 코드를 문제로 들고 와서 스터디 시간이나
              주간동안 함수형으로 리팩터링 하는 시간을 가졌습니다.
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default experience;
