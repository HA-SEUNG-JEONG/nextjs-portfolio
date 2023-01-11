import { GetServerSideProps, GetStaticProps } from "next";
import Head from "next/head";
import Layout from "../components/layout";
import ProjectItem from "../components/projects/ProjectItem";
import { DATABASE_ID, TOKEN } from "../config";

interface User {
  object: string;
  id: string;
}

interface External {
  url: string;
  type: string;
  external: {
    url: string;
  };
  file: {
    url: string;
  };
}

interface DatabaseId {
  type: string;
  database_id: string;
}

interface RichText {
  id: number;
  type: string;
  rich_text: [
    {
      type: string;
      plain_text: string;
    }
  ];
}

interface URL {
  id: string;
  type: string;
  url: string;
}

interface MultiSelect {
  id: number;
  type: string;
  multi_select: string[];
}

interface Title {
  id: string;
  type: string;
  title: {
    plain_text: string;
  }[];
}

export interface Page {
  object: string;
  id: string;
  created_time: string;
  last_edited_time: string;
  created_by: User;
  last_edited_by: User;
  cover: External;
  icon: object | null;
  parent: DatabaseId | null;
  archived: boolean;
  properties: {
    description: RichText;
    url: URL;
    tag: MultiSelect;
    name: Title;
    githubLink: {
      rich_text: [
        {
          text: {
            link: {
              url: string;
            };
          };
        }
      ];
    };
    period: {
      date: {
        start: string;
        end: string;
      };
    };
  };
  url: string;
  results: string;
}

const Project = ({ projects }: { projects: any }) => {
  return (
    <Layout>
      <div className="mb-10 flex min-h-screen flex-col items-center justify-center px-5">
        <Head>
          <title>정하승의 포트폴리오</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <section className="m-6 grid grid-cols-1 gap-4 py-10 sm:w-full md:grid-cols-2">
          {projects.results.map((result: Page) => (
            <ProjectItem key={result.id} data={result} />
          ))}
        </section>
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Notion-Version": "2022-02-22",
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      page_size: 100,
    }),
  };

  const response = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options);
  const projects = await response.json();

  return {
    props: { projects },
  };
};

export default Project;
