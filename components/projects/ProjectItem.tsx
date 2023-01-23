import Image from "next/legacy/image";
import Link from "next/link";
import { Page } from "../../pages/projects";

const ProjectItem = ({ data }: { data: Page }) => {
  const projectTitle = data.properties.name.title[0].plain_text;

  const deployLink = data.properties.url.url;
  console.log(deployLink);
  const description = data.properties.description.rich_text[0].plain_text;
  const tags = data.properties.tag.multi_select;
  const imgSrc = data.cover?.file?.url || data.cover.external.url;
  const githubLink = data.properties.githubLink.rich_text[0].text.link.url;
  const start = data.properties.period.date.start;
  const end = data.properties.period.date.end;
  return (
    <article className="project-card">
      <section className="w-full">
        <Image
          className="rounded-t-xl"
          src={imgSrc}
          alt="coverImage"
          quality={100}
          width={50}
          height={50}
          layout="responsive"
          objectFit="contain"
          placeholder="blur"
          blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO8UA8AAiUBUcc3qzwAAAAASUVORK5CYII=" // 추가
        />
      </section>

      <section className="flex w-full flex-col p-4">
        <h1 className="text-xl font-bold">{projectTitle}</h1>
        <section className="flex flex-col space-y-2">
          <h3 className="text-md mt-3">{description}</h3>
          <Link className="hover:text-slate-300" href={deployLink}>
            배포 링크
          </Link>
          <Link className="hover:text-slate-300" href={githubLink}>
            깃허브 링크
          </Link>
        </section>

        <section className="mt-2 flex items-start space-x-2">
          {tags.map((tag: any) => (
            <h1
              className="w-30 rounded-md bg-sky-200 px-2 py-1 dark:bg-sky-700"
              key={tag.id}>
              {tag.name}
            </h1>
          ))}
        </section>
        <section className="mt-3 font-bold text-slate-300">
          프로젝트 기간 : {start} ~ {end ? end : ""}
        </section>
      </section>
    </article>
  );
};

export default ProjectItem;
