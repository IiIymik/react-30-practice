import React from "react";
import Info from "../Info/Info";
import TitlePage from '../TitlePage/TitlePage';
import TitleSection from "../TitleSection/TitleSection";
import Teachers from "../Teachers/Teachers";
function Main() {
  return (
    <main>
      <TitlePage/>
      <Info />
      <TitleSection text="Преподаватели" />
      <Teachers/>
    </main>
  );
}

export default Main;