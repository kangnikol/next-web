import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "./content/Header";
import Portofolio from "./content/Portofolio";

export default function Home() {
  return (
    <div>
      {/* Header */}
      <Header />
      {/* Portofolio */}
      <Portofolio />
    </div>
  );
}
