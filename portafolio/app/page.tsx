import Image from "next/image";
import Header from "./Components/Header/Header";
import Inicio from "./Components/Inicio/Inicio";
import Interests from "./Components/Interests/Interests";
import Projects from "./Components/Projects/Projects";

export default function Home() {
  return (
    <>
      <Header />
      <Inicio />
      <Interests />
      <Projects />
    </>
  );
}
