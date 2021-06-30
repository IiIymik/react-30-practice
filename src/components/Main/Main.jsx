import React from "react";
import Info from "../Info/Info";
import TitlePage from '../TitlePage/TitlePage';
import TitleSection from "../TitleSection/TitleSection";
import Teachers from "../Teachers/Teachers";
import Btn from "../Button/Button";
import Cities from '../Cities/Cities';
import Faculties from '../Faculties/Faculties';
function Main() {
  return (
    <main>
      <TitlePage/>
      <Info />
      <TitleSection text="Преподаватели" src="/images/cat.png" />
      <Teachers />
      <Btn title="Добавить преподавателя" />
      <TitleSection text="Города" src="/images/pin.png" />
      <Cities/>
      <Btn title="Добавить город" />
      <TitleSection text="Факультеты" src="/images/robot.png" />
      <Faculties/>
      <Btn title="Добавить факультет"/>
    </main>
  );
}

export default Main;