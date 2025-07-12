import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { pizzaData } from "./data";

export function Header() {
  const style = { fontSize: "48px", textTransform: "uppercase" };
  return (
    <header className="header">
      <h1 style={style}>Pizza Reastaurant</h1>
    </header>
  );
}

export function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <ul className="pizzas">
        {pizzaData.map((pizza, i) => (
          <Pizza key={i} pizzaData={pizza} />
        ))}
      </ul>
    </main>
  );
}

function Pizza(props) {
  return (
    <li className="pizza">
      <img src={props.pizzaData.photoName} alt={props.pizzaData.name} />
      <div>
        <h3>{props.pizzaData.name}</h3>
        <p>{props.pizzaData.ingredients}</p>
        <span>{props.pizzaData.price}</span>
      </div>
    </li>
  );
}

export function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour < closeHour;

  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()}
      {isOpen ? " We're currently open!" : " Sorry, We're currently closed"}
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
