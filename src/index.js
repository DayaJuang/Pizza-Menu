import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
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
      <Pizza />
      <Pizza />
      <Pizza />
    </main>
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

function Pizza() {
  return (
    <div>
      <img src={pizzaData[0].photoName} alt={pizzaData[0].name} />
      <h3>{pizzaData[0].name}</h3>
      <p>{pizzaData[0].ingredients}</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
