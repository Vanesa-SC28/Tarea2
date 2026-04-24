import Image from "next/image";
import Header from "./Components/Header/Header";
import Inicio from "./Components/Inicio/Inicio";
import Interests from "./Components/Interests/Interests";
import Projects from "./Components/Projects/Projects";
import CV from "./Components/CV/CV";

export default function Home() {
  return (
    <>
      <Header />
      <Inicio />
      <Interests />
      <Projects />
      <CV /> 
    </>
  );
}
