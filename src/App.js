// import logo from './logo.svg';
// import './App.css';

import React from 'react';
import './components/Card.css';
import './App.css';
import Card from './components/Card';


const marvelHeroes = [
  { name: "Name of hero: Thor", img: "https://upload.wikimedia.org/wikipedia/uk/0/02/%D0%A2%D0%BE%D1%80_%D0%9E%D0%B4%D1%96%D0%BD%D1%81%D0%BE%D0%BD_%D0%9A%D0%92%D0%9C.jpg", 
    superpower: "Superpower: Speed, Stamina, Resistance, Agility, Invulnerability, Flight, Ability to summon lightning, Slowed aging", 
    weapons: "Wiapons: Mjolnir Hammer, giving the ability to fly, project energy, move through space and time, and deliver powerful blows"},
  { name: "Name of hero: Doctor Strange", img: "https://klike.net/uploads/posts/2019-02/1551253336_38.jpg", 
    superpower: "Superpower: High level of intelligence, Astral and mental projection, Teleportation, Illusions, Superior melee skills",
    weapons: "Weapons: Cloak of Levitation that allows you to fly and change structure, Rings of the elements, Agamotto Sphere"},
  { name: "Name of hero: Captain America", img: "https://vcomicse.ru/wp-content/uploads/2018/09/580b57fbd9996e24bc43c023.png",
    superpower: "Superpower: Peak human strength, Superior physical shape, Master of martial arts, Excellent tactician, strategist and field commander, Accelerated regeneration",
    weapons: "Weapons: Vibranium shield, Vibranium helmet                               "}
]; 

function App() {
  return (
    <div className="App">
      <Card url={marvelHeroes[0].img} name={marvelHeroes[0].name} superpower={marvelHeroes[0].superpower} weapons={marvelHeroes[0].weapons}/>
      <Card url={marvelHeroes[1].img} name={marvelHeroes[1].name} superpower={marvelHeroes[1].superpower} weapons={marvelHeroes[1].weapons} />
      <Card url={marvelHeroes[2].img} name={marvelHeroes[2].name} superpower={marvelHeroes[2].superpower} weapons={marvelHeroes[2].weapons} />
    </div>
  );
}

export default App;
