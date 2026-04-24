import Image from "next/image";
import Header from "./Components/Header/Header";
import Inicio from "./Components/Inicio/Inicio";
import Interests from "./Components/Interests/Interests";

export default function Home() {
  return (
    <>
      <Header />
      <Inicio />
      <Interests />
    </>
  );
}
