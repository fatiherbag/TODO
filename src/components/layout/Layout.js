import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ changeTheme, darkTheme, ...props }) {
  return (
    <div
      className="container-backgroud"
      data-theme={darkTheme ? "dark" : "light"}
    >
      <div className="container">
        <Header changeTheme={changeTheme} darkTheme={darkTheme} />
        {props.children}
        <br />
        <Footer />
      </div>
    </div>
  );
}
