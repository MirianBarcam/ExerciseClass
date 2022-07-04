/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let person = [
    {
      name: "Maria",
      lastName: "Rodriguez"
    },
    {
      name: "Pedro",
      lastName: "Perez"
    },
    {
      name: "Juan Jose",
      lastName: "Ruiz"
    }
  ];

  let address = [
    {
      cp: 2080,
      dir: {
        city: "Madrid",
        avenida: "Alcalá"
      }
    },
    {
      cp: 2085,
      dir: {
        city: "Barcelona",
        avenida: "Rua"
      }
    },
    {
      cp: 2087,
      dir: {
        city: "Murcia",
        avenida: "Atocha"
      }
    }
  ];

  let job = [
    {
      company: "Google",
      position: {
        job: "fullstack developer",
        level: "junior"
      },
      antiquity: 6
    },
    {
      company: "Amazon",
      position: {
        job: "back-end developer ",
        level: "senior"
      },
      antiquity: 12
    },
    {
      company: "Indra",
      position: {
        job: "front-end developer ",
        level: "senior"
      },
      antiquity: 5
    }
  ];

  let numRandom = () => {
    const num = Math.floor(Math.random() * 3);
    return num;
  };

  let phraseGenerate = () => {
    let position = numRandom();
    let phrase = `${person[position].name} ${person[position].lastName} con dirección
     ${address[position].dir.avenida} (${address[position].dir.city}), ${address[position].cp} 
    trabaja en ${job[position].company} como ${job[position].position.job} ${job[position].position.level} 
    desde hace ${job[position].antiquity} años`;
    return phrase;
  };

  let datos = phraseGenerate();

  document.getElementById("personaAleatoria").innerHTML = datos;
};
