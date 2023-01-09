import Image from "next/legacy/image";
import Link from "next/link";
import { Page } from "../../pages/project";

const ProjectItem = ({ data }: { data: Page }) => {
  const projectTitle = data.properties["이름"].title[0].plain_text;
  const githubLink = data.properties.URL.url;
  const description = data.properties.Description.rich_text[0].plain_text;
  const tags = data.properties["태그"].multi_select;
  const imgsrc = data.cover.cover?.external || data.cover;
  console.log(imgsrc);

  return (
    <div className="project-card">
      <Image
        className="rounded-t-xl"
        src={imgsrc.external.url}
        alt="coverImage"
        quality={100}
        width={100}
        height={60}
        layout="responsive"
        objectFit="cover"
      />
      <div className="flex w-full flex-col p-4">
        <h1 className="text-xl font-bold">{projectTitle}</h1>
        <h3 className="text-md mt-3">{description}</h3>
        <Link href={githubLink}>깃허브 링크</Link>
        <div className="mt-2 flex items-start space-x-1">
          {tags.map((tag: any) => (
            <h1 className="w-30 mr-2 rounded-md bg-sky-200 px-2 py-1 dark:bg-sky-700 " key={tag.id}>
              {tag.name}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
