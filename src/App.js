import "./App.css";
import Counter from "./components/counter";
import Header from "./components/header";
import Footer from "./components/footer";
import { useState } from "react";
import SquidGame from "./components/clicker";

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
    </div>
  );
}

export default App;
