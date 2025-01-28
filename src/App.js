import "./App.css";
import Counter from "./components/counter";
import Header from "./components/header";
import Footer from "./components/footer";
import { useState } from "react";
import SquidGame from "./components/clicker";
import Smallertext from "./components/smallertext";

function App() {
  const [isShow, setIsShow] = useState(false);
  const [squad, setSquad] = useState(true);

  const changeShow = () => {
    setIsShow(!isShow);
  };

  let navlinks = [
    { title: "Первая", href: "vk.com" },
    { title: "Вторая", href: "ok.ru" },
    { title: "Третья", href: "discord.ru" },
  ];

  return (
    <div className="App">
      <Header links={navlinks} />
      <button onClick={changeShow}> Показать/Скрыть</button>

      <SquidGame setSquad={setSquad} squad={squad} />

      {isShow ? <Counter /> : null}
      <Footer years="2025" />

      <Smallertext text='Создать компонент, которому передаем текст (3-4 абзаца с точкой). Компонент выводит только первое предложение. И есть кнопка "Показать подробнее" - при клике на неё выводиться вместо одного предложения весь текст. (состояние с тру или фолс)' />
    </div>
  );
}

export default App;
