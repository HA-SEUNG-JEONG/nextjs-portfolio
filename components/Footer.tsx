import Link from "next/link";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer>
      <section className="container mx-auto flex flex-col flex-wrap py-10 px-5 sm:flex-row">
        <Link href="/">
          <p className="text-center text-lg text-black sm:text-left">
            {currentYear} 정하승의 포트폴리오
          </p>
        </Link>
      </section>
    </footer>
  );
};

export default Footer;
