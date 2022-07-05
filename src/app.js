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
    let position_person = numRandom();
    let position_address = numRandom();
    let position_job = numRandom();

    let phrase = `${person[position_person].name} ${person[position_person].lastName} con dirección
     ${address[position_address].dir.avenida} (${address[position_address].dir.city}), ${address[position_address].cp} 
    trabaja en ${job[position_job].company} como ${job[position_job].position.job} ${job[position_job].position.level} 
    desde hace ${job[position_job].antiquity} años`;

    return phrase;
  };

  const btn = document.querySelector("button");

  btn.addEventListener("click", function() {
    let datos = phraseGenerate();
    document.getElementById("randomPerson").innerHTML = datos;
  });
};
