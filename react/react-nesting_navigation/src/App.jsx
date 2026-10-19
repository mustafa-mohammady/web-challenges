import Header from "./components/Header";
import Avater from "./components/Avater";
import Logo from "./components/Logo";
import Nav from "./components/Nav";
import Link from "./components/Link";
import "./styles.css";

export default function App() {
  return (
    <>
      <Header>
        <Logo />
        <Nav>
          <Link url="/Home">Home</Link>
          <Link url="/About">About us</Link>
          <Link url="/Contact">Contact us</Link>
        </Nav>
        <Avater />
      </Header>
      <main>content goes here…</main>
    </>
  );
}
