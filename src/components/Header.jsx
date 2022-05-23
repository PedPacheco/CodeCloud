import "../styles/Header.css";
import Search from "../images/search-symbol.png"

import { useState} from "react";
import CityComponent from "../components/CityComponent"

function Input() {
  const [input, setInput] = useState("");
  const [actualCity, setActualCity] = useState("");

  function setNewCity({ target }) {
    setInput(target.value);
  }

  function submitNewCity(event) {
    event.preventDefault();
    setActualCity(input);
  }

  return (
    <>
      <header className="Header">
        <form>
          <div className="icon-input">
            <input
              placeholder="Ex: Campinas"
              type="text"
              onChange={setNewCity}
            />
            <img src={Search} alt="Símbol de busca" />
          </div>
          <button type="submit" onClick={submitNewCity}>
            <span>Pesquisar Cidade</span>
          </button>
        </form>
      </header>

      <CityComponent actualCity={actualCity}/>
    </>
  );
}

export default Input;
