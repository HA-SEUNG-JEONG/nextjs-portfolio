import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return (
    <div className="bg-primary">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
