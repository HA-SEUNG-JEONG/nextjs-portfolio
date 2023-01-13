import Head from "next/head";
import React from "react";
import Layout from "../components/layout";

const experience = () => {
  return (
    <Layout>
      <div className="relative mb-10 flex min-h-screen flex-col items-center justify-center px-5">
        <Head>
          <title>정하승의 포트폴리오</title>
          <meta name="description" content="portfolio" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <section className="absolute top-48 h-10 space-y-4 ">
          <div className="border p-4">
            <span className="text-2xl">코드스테이츠</span>
            <div className="font-bold">2022.6~2022.12</div>
            <ul>
              <li>페어 프로그래밍</li>
              <li>백엔드와의 협업</li>
            </ul>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default experience;
