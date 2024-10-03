import { Metadata } from "next";
import HomeHero from "./components/Hero/Hero";
import React from "react";

export const metadata: Metadata = {
  title: "Home",
  description: "",
}

export default function Home() {
  return (
    <>
      <HomeHero />
    </>
  );
}
